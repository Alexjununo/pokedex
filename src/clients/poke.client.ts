import { InternalError } from '../utils/errors/internal-error';
import { Pokemon } from '../pokemons/interfaces/pokemon.interface';
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
      'height': pokemon.height,
      'weight': pokemon.weight,
      'name': pokemon.name,
      'location_area_encounters': pokemon.location_area_encounters,
      'species': pokemon.species,
      'abilities': pokemon.abilities.map(({ ability }) => ability),
    };
  }

  public async fetchPokemon(pokemon: string): Promise<Pokemon> {
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
