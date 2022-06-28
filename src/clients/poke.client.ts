import { InternalError } from '../utils/errors/internal-error';
import { Pokemon, PokemonsList, RegionsList } from '../pokemons/interfaces/pokemon.interface';
import * as POKEUtil from '../utils/request';
import { PokemonFactory } from 'src/pokemons/factory/pokemon.factory';

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
  constructor(protected request = new POKEUtil.Request(), private readonly factory: PokemonFactory) {}

  public async fetchPokemons(offset: number, limit: number): Promise<PokemonsList> {
    const LIMIT = 20;
    const OFFSET = 0;

    offset = offset || OFFSET;
    limit = limit || LIMIT;

    try {
      const response: any = await this.request.get('/pokemon?limit=' + limit + '&offset=' + offset);

      return this.factory.normalizePokemonsListResponse(response.data);
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

      return this.factory.normalizePokemonResponse(response.data);
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

  public async fetchRegions(): Promise<RegionsList> {
    try {
      const response: any = await this.request.get('/region');

      return this.factory.normalizeRegionsListResponse(response.data);
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
