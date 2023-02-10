import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";

import Cargando from "../components/Cargando";

const Pokemones=()=> {
  const [pokemones, setPokemones] = useState(null);
  const navigate = useNavigate();
  const getMenus = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      if (!res.ok) throw "404";
      const data = await res.json();
      setPokemones(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenus();
  }, []);

  const getKey = (url) => {
    let sumaStr = "";
    const arrayURL = url.split("");
    for (let i = 34; i < arrayURL.length - 1; i++) {
      const character = arrayURL[i];
      sumaStr = sumaStr + character;
    }
    return sumaStr;
  };

  if (!pokemones) return <Cargando />;

  return (
    <div className="container my-4 d-flex flex-column align-items-center">
      <h4>Selecciona un pokemón para ver sus características</h4>
      <Form.Select
        className="pokeForm my-3"
        onChange={(e) => navigate(`/pokemons/${e.target.value}`)}
        aria-label="Default select example"
      >
        <option>Select a pokemon</option>
        {pokemones.map((pokemon) => {
          return (
            <option value={getKey(pokemon.url)} key={getKey(pokemon.url)}>
              {pokemon.name}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}


export default Pokemones