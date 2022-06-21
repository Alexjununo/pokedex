import { Test, TestingModule } from '@nestjs/testing';
import { PokeApi } from '../clients/poke.client';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import pokeApiDittoNormalizeFixture from '../../test/fixtures/poke_api_ditto_normalize.json';

describe('AppController', () => {
  let pokemonController: PokemonController;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService, PokeApi],
    }).compile();

    pokemonController = app.get<PokemonController>(PokemonController);
    pokemonService = app.get<PokemonService>(PokemonService);
  });
  
  it('should return a Ditto json', async () => {
    jest
      .spyOn(pokemonService, 'getPokemon')
      .mockImplementation(() => Promise.resolve(pokeApiDittoNormalizeFixture));

    const response = await pokemonController.getPokemon('ditto');

    expect(response).toEqual(pokeApiDittoNormalizeFixture);
  });
});