import { Injectable } from '@nestjs/common';
import { PokeApi } from '../clients/poke.client'
import { Pokemon } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
    constructor(protected pokeApi: PokeApi) {}

    getPokemon(pokemon: string): Promise<Pokemon> {
        return this.pokeApi.fetchPokemon(pokemon);
    }
}
