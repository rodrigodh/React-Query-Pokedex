import axios from "axios";

export interface IPokemonListItem {
  name: string;
  url: string;
}

interface IGetPokemons {
  next: string;
  results: IPokemonListItem[];
}

interface IPokemon {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  name: string;
  height: number;
  id: number;
  weight: 225;
  sprites: {
    front_default: string;
  };
}

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function getPokemons(): Promise<IPokemonListItem[]> {
  const pokemons = await api.get<IGetPokemons>("pokemon");
  return pokemons.data.results;
}

export async function getPokemon(name: string): Promise<IPokemon> {
  const pokemons = await api.get<IPokemon>(`pokemon/${name}`);
  return pokemons.data;
}
