import { Test, TestingModule } from '@nestjs/testing';
import { PokeApi } from '../clients/poke.client';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('AppController', () => {
  let pokemonController: PokemonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService, PokeApi],
    }).compile();

    pokemonController = app.get<PokemonController>(PokemonController);
  });
  
  it('should return a Ditto json', async () => {
    const response = await pokemonController.getPokemon('ditto');

    expect(response).toEqual({
      "id": 132,
      "height": 3,
      "weight": 40,
      "name": "ditto",
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
      "species": {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
      },
      "abilities": [
        {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        {
          "name": "imposter",
          "url": "https://pokeapi.co/api/v2/ability/150/"
        }
      ]
    });
  });
});