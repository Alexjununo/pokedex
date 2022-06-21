import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PokemonsResponseDto } from './dto/PokemonsResponseDto';
import { PokemonService } from './pokemon.service'

@ApiTags('pokemons')
@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @ApiOkResponse({ type: PokemonsResponseDto })
  @Get(':pokemon')
  getPokemon(@Param('pokemon') pokemon: string): Promise<PokemonsResponseDto> {
    return this.pokemonService.getPokemon(pokemon);
  }
}
