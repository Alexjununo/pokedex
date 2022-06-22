import { InternalError } from '../utils/errors/internal-error';
import { Pokemon, PokemonsList } from '../pokemons/interfaces/pokemon.interface';
import * as POKEUtil from '../utils/request';

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage = `Unexpected error when trying to communicate to PokeApi: ${message}`;
    super(internalMessage);
  }
}

export class PokeApiResponseError extends InternalError {
  constructor(message: string) {
    const internalMessage = `Unexpected error returned by the PokeApi service: ${message}`;
    super(internalMessage);
  }
}


export class PokeApi {
  constructor(protected request = new POKEUtil.Request()) {}

  private normalizeResponse (pokemon: any) {
    return {
      'id': pokemon.id,
      'name': pokemon.name,
      'height': pokemon.height,
      'weight': pokemon.weight,
      'base_experience': pokemon.base_experience,
      'location_area_encounters': pokemon.location_area_encounters,
      'types': pokemon.types.map(({ type }) => type.name),
      'abilities': pokemon.abilities.map(({ ability }) => ability.name),
    };
  }

  private normalizeResponseList (pokemons: any) {
    return {
      'pokemons': pokemons.results.map(data => ({
        id: data.url
          .split('/')
          .filter(part => !!part)
          .pop(),
        name: data.name
      }))
    }
  }

  public async fetchPokemons(offset: number, limit: number): Promise<PokemonsList> {
    const LIMIT = 20;
    const OFFSET = 0;

    offset = offset || OFFSET;
    limit = limit || LIMIT;

    try {
      const response: any = await this.request.get('/pokemon?limit=' + limit + '&offset=' + offset);

      return this.normalizeResponseList(response.data);
    } catch (error: any) {
      if (POKEUtil.Request.isRequestError(error)) {
        throw new PokeApiResponseError(
          `Error: ${JSON.stringify(error.response.data)} Code: ${
            error.response.status
          }`,
        );
      }
      throw new ClientRequestError(error.message);
    }
  }

  public async fetchPokemonDetails(pokemon: string): Promise<Pokemon> {
    try {
      const response: any = await this.request.get(`/pokemon/${pokemon}`);

      return this.normalizeResponse(response.data);
    } catch (error: any) {
      if (POKEUtil.Request.isRequestError(error)) {
        throw new PokeApiResponseError(
          `Error: ${JSON.stringify(error.response.data)} Code: ${
            error.response.status
          }`,
        );
      }
      throw new ClientRequestError(error.message);
    }
  }
}
