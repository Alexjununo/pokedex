import { PokeApi } from './../clients/poke.client';
import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
    controllers: [PokemonController],
    providers: [PokemonService, PokeApi],
})
export class PokemonModule {}
