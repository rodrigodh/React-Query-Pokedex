import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getPokemons } from "../../services/api";
import { Container } from "./styles";

export function Pokemons() {
  const query = useQuery(["pokemons"], getPokemons);
  const navigate = useNavigate();

  function navigateToPokemon(name: string) {
    navigate(`/pokemon/${name}`);
  }

  return (
    <Container>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/1200px-International_Pokémon_logo.svg.png"
        alt="pokemon logo"
      />

      <ul>
        {query.data?.map((pokemon) => (
          <li
            aria-hidden
            onClick={() => navigateToPokemon(pokemon.name)}
            key={pokemon.name}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}
