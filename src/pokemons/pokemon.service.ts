import { Injectable } from '@nestjs/common';
import { PokeApi } from '../clients/poke.client'
import { Pokemon, PokemonsList } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
    constructor(protected pokeApi: PokeApi) {}

    getPokemons(offset: number, limit: number): Promise<PokemonsList> {
        return this.pokeApi.fetchPokemons(offset, limit);
    }

    getPokemonDetails(pokemon: string): Promise<Pokemon> {
        return this.pokeApi.fetchPokemonDetails(pokemon);
    }
}
