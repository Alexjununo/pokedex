import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('AppController', () => {
  let pokemonController: PokemonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    pokemonController = app.get<PokemonController>(PokemonController);
  });

  describe('root', () => {
    it('should return a Pikachu json', () => {
      expect(pokemonController.getPokemon('pikachu')).toBe({});
    });
  });
});