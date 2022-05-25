import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service'

@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @Get()
  findAll() {
    return 'TODOSSSS';
  }

  @Get(':pokemon')
  getPokemon(@Param('pokemon') pokemon: string): any {
    return this.pokemonService.getPokemon(pokemon);
  }
}
