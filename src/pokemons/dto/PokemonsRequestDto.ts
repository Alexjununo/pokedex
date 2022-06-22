import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PokemonNameDto {
    @IsString()
    @IsNotEmpty()
    pokemon: string;
}

export class PokemonPaginationListDto {
    @IsNumber()
    @IsOptional()
    offset: number;

    @IsNumber()
    @IsOptional()
    limit: number;
}