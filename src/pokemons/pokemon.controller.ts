import { Controller, Get, Param } from '@nestjs/common';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonService } from './pokemon.service'

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get(':pokemon')
  getPokemon(@Param('pokemon') pokemon: string): Promise<Pokemon> {
    return this.pokemonService.getPokemon(pokemon);
  }
}
