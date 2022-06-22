import { PokeApi } from './poke.client';
import pokemonDetailsFixture from '../../test/fixtures/pokemon_details_normalize.json';
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
      .spyOn(api, 'fetchPokemonDetails')
      .mockImplementation(() => Promise.resolve(pokemonDetailsFixture));

    const response = await api.fetchPokemonDetails('ditto');

    expect(response).toEqual(pokemonDetailsFixture);
  });
});
