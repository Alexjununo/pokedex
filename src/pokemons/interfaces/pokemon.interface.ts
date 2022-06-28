export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    location_area_encounters: string;
    types: string[];
    abilities: string[];
}

interface PokemonIdentifier {
    id: string;
    name: string;
}

export interface PokemonsList {
    pokemons: PokemonIdentifier[];
}

interface Region {
    name: string;
}
export interface RegionsList {
    regions: Region[];
}