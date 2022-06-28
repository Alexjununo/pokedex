export class PokemonFactory {
  public normalizePokemonResponse(pokemon: any) {
    return {
      'id': pokemon.id,
      'name': pokemon.name,
      'height': pokemon.height,
      'weight': pokemon.weight,
      'base_experience': pokemon.base_experience,
      'location_area_encounters': pokemon.location_area_encounters,
      'types': pokemon.types.map(({ type }) => type.name),
      'abilities': pokemon.abilities.map(({ ability }) => ability.name),
    };
  }

  public normalizePokemonsListResponse(pokemons: any) {
    return {
      'pokemons': pokemons.results.map(data => ({
        id: data.url
          .split('/')
          .filter((part: any) => !!part)
          .pop(),
        name: data.name
      }))
    }
  }

  public normalizeRegionsListResponse(regions: any) {
    return {
      'regions': regions.results.map((data: { name: any; }) => ({
        name: data.name
      }))
    }
  }
}