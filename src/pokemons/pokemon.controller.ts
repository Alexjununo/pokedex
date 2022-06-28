import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PokemonNameDto, PokemonPaginationListDto } from './dto/PokemonsRequestDto';
import { PokemonDetailsResponseDto, PokemonsListResponseDto, RegionsListResponseDto } from './dto/PokemonsResponseDto';
import { PokemonService } from './pokemon.service'

@ApiTags('pokemons')
@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @ApiOkResponse({ type: PokemonsListResponseDto })
  @ApiQuery({ type: PokemonPaginationListDto })
  @Get()
  getPokemons(
    @Query() query?: PokemonPaginationListDto,
  ): Promise<PokemonsListResponseDto> {
    return this.pokemonService.getPokemons(query.offset, query.limit);
  }

  @ApiOkResponse({ type: PokemonDetailsResponseDto })
  @ApiQuery({ type: PokemonNameDto})
  @Get(':pokemon')
  getPokemonDetails(@Param() param: PokemonNameDto): Promise<PokemonDetailsResponseDto> {
    return this.pokemonService.getPokemonDetails(param.pokemon);
  }

  @ApiOkResponse({ type: RegionsListResponseDto })
  @Get('/regions')
  getRegions(): Promise<RegionsListResponseDto> {
    return this.pokemonService.getRegions();
  }
}
