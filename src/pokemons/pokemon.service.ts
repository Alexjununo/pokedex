import { Injectable } from '@nestjs/common';
import { PokeApi } from '../clients/poke.client'

@Injectable()
export class PokemonService {
    constructor(protected pokeApi: PokeApi) {}
    getPokemon(pokemon: string): any {
        return this.pokeApi.fetchPokemon(pokemon);
    }
}
