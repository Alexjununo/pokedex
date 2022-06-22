import { ApiProperty } from '@nestjs/swagger';
export class PokemonDetailsResponseDto {
    @ApiProperty({ description: 'Codigo do Pokemon', example: 10 })
    id: number;

    @ApiProperty({ description: 'Nome do Pokemon', example: 'Ditto' })
    name: string;

    @ApiProperty({ description: 'Altura do Pokemon', example: 120 })
    height: number;

    @ApiProperty({ description: 'Peso do Pokemon', example: 5 })
    weight: number;

    @ApiProperty({ description: 'Experiencia base', example: 100 })
    base_experience: number;

    @ApiProperty({ description: 'Localização do Pokemon', example: 'Kanto' })
    location_area_encounters: string;

    @ApiProperty({ description: 'Tipo de Pokemon', example: ['Poison'], isArray: true })
    types: string[];

    @ApiProperty({ description: 'Habilidades do Pokemon', example: ['Overgrow'], isArray: true })
    abilities: string[];
}

class PokemonIdentifierDto {
    @ApiProperty({ description: 'Codigo do Pokemon', example: '10' })
    id: string;

    @ApiProperty({ description: 'Nome do Pokemon', example: 'Ditto' })
    name: string;
}

export class PokemonsListResponseDto {
    @ApiProperty({ description: 'Lista de Pokemons', example: [{ id: '10', name: 'Ditto' }], isArray: true })
    pokemons: PokemonIdentifierDto[];
}