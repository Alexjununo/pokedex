export interface Ability {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Pokemon {
    abilities: [Ability];
    height: number;
    weight: number;
    id: number;
    name: string;
    location_area_encounters: string;
    species: Species
}