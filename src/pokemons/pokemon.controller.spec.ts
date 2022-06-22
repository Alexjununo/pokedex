import { Test, TestingModule } from '@nestjs/testing';
import { PokeApi } from '../clients/poke.client';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import pokemonDetailsFixture from '../../test/fixtures/pokemon_details_normalize.json';
import pokemonsListNormalize from '../../test/fixtures/pokemons_list_normalize.json'

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
      .spyOn(pokemonService, 'getPokemonDetails')
      .mockImplementation(() => Promise.resolve(pokemonDetailsFixture));

    const response = await pokemonController.getPokemonDetails({ pokemon: 'ditto' });

    expect(response).toEqual(pokemonDetailsFixture);
  });

  // deve retornar uma lista de pokemons
  it('should return a list of pokemons', async () => {
    jest
      .spyOn(pokemonService, 'getPokemons')
      .mockImplementation(() => Promise.resolve(pokemonsListNormalize));

    const response = await pokemonController.getPokemons();

    expect(response).toEqual(pokemonsListNormalize);
  });
});