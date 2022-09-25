import { useQuery } from "@tanstack/react-query";
import { FiArrowLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import { getPokemon } from "../../services/api";
import { queryStatusHandler } from "../../utils/queryStatusHandler";
import { Container } from "./styles";

export function Pokemon() {
  const defaultPokemon = "bulbassaur";

  const { name } = useParams();
  const navigate = useNavigate();

  const { data, status } = useQuery(["pokemon", name], () =>
    getPokemon(name || defaultPokemon)
  );

  return (
    <Container>
      <button type="button" onClick={() => navigate("/")}>
        <FiArrowLeft />
      </button>

      <h1>{queryStatusHandler({ status })}</h1>

      <img src={data?.sprites.front_default} alt={name} />

      <h1>{data?.name}</h1>

      <h3>Habilidades</h3>
      {data?.abilities.map((ability) => (
        <li>{ability.ability.name}</li>
      ))}

      <h3>Peso</h3>
      <p>{data?.weight}</p>

      <h3>Altura </h3>
      <p>{data?.height}</p>
    </Container>
  );
}
