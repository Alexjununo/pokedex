import { InternalError } from '../utils/errors/internal-error';
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

  public async fetchPokemon(pokemon: string) {
    try {
      const response = await this.request.get(`/pokemon/${pokemon}`);

      return response.data;
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
