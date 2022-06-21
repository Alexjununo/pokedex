import { PokeApi } from './poke.client';
import pokeApiDittoNormalizeFixture from '../../test/fixtures/poke_api_ditto_normalize.json';
import { Test, TestingModule } from '@nestjs/testing';

jest.mock('../utils/request');

describe('PokeApi client', () => {
  let api: PokeApi;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokeApi],
    }).compile();

    api = module.get<PokeApi>(PokeApi);
  });

  it('should return the normalized pokemon Ditto from the Poke service', async () => {

    jest
      .spyOn(api, 'fetchPokemon')
      .mockImplementation(() => Promise.resolve(pokeApiDittoNormalizeFixture));

    const response = await api.fetchPokemon('ditto');

    expect(response).toEqual(pokeApiDittoNormalizeFixture);
  });
});
