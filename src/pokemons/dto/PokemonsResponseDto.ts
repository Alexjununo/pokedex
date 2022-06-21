import { ApiProperty } from '@nestjs/swagger';

class AbilityDto {
    @ApiProperty({ description: 'Nome da habilidade', example: 'hydro-power' })
    name: string;

    @ApiProperty({ description: 'URL da habilidade', example: 'https://pokeapi.co/api/v2/ability/1' })
    url: string;
}

class SpeciesDto {
    @ApiProperty({ description: 'Nome da espécie', example: 'Ditto' })
    name: string;

    @ApiProperty({ description: 'URL da espécie', example: 'https://pokeapi.co/api/v2/pokemon-species/132/' })
    url: string;
}

export class PokemonsResponseDto {
    @ApiProperty({ description: 'Codigo do Pokemon', example: 10})
    id: number;

    @ApiProperty({ description: 'Altura do Pokemon', example: 120})
    height: number;

    @ApiProperty({ description: 'Peso do Pokemon', example: 5})
    weight: number;

    @ApiProperty({ description: 'Nome do Pokemon', example: 'Ditto'})
    name: string;

    @ApiProperty({ description: 'Localização do Pokemon', example: 'Kanto'})
    location_area_encounters: string;

    @ApiProperty({ description: 'Espécie do Pokemon', example: 'Ditto'})
    species: SpeciesDto;

    @ApiProperty({
        description: 'Habilidades do Pokemon',
        example: [
            { name: 'Habilidade 1', url: 'https://pokeapi.co/api/v2/ability/1/' },
            { name: 'Habilidade 2', url: 'https://pokeapi.co/api/v2/ability/2/' }
        ]
    })
    abilities: AbilityDto[];
}