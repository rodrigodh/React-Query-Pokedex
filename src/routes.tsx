import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Pokemons } from "./pages/Pokemons";
import { Pokemon } from "./pages/Pokemon";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}
