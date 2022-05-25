import { PokeApi } from './poke.client';
import pokeApiDittoFixture from '../../test/fixtures/poke_api_ditto.json';
import * as POKEUtil from '../utils/request';

jest.mock('../utils/request');

describe('PokeApi client', () => {
  // const MockedRequestClass = POKEUtil.Request as jest.Mocked<
  //   typeof POKEUtil.Request
  // >;
  const mockedRequest = new POKEUtil.Request() as jest.Mocked<POKEUtil.Request>;

  it('should return pokemon Ditto from the Poke service', async () => {
    mockedRequest.get.mockResolvedValue({
      data: pokeApiDittoFixture,
    } as POKEUtil.Response);

    const pokeApi = new PokeApi(mockedRequest);
    const response = await pokeApi.fetchPokemon('ditto');

    expect(response).toEqual(pokeApiDittoFixture);
  });
});
