import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Cargando from "../components/Cargando";

const PokeDex= () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setError] = useState(null);

  const getMenu = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
      if (!res) throw `${res.ok}`;
      const data = await res.json();
      setPokemon(data);



      
    } catch (error) {
      setError(error);
      navigate("/pokemones");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getMenu();
  }, []);

  const getPage = (value) => {
    console.log(value);
  };

  if (loading) return <Cargando />;
  if (!pokemon) return <h1>{`El Pokemon n° ${params.id} no existe`}</h1>;

  return (
    <div className="container text-center">
      <h2 className="my-4">
        {pokemon.name.toUpperCase()} N°:{pokemon.id}{" "}
      </h2>
      <div className="d-flex justify-content-center gap-4">
        <div className="divPokeImg">
          <img
            className="pokeImg"
            src={pokemon.sprites.other.dream_world.front_default}
            alt="foto pókemon"
          />
        </div>
        <div className="divPokeRender">
          <ul className="list-group">
            {pokemon.stats.map((item) => {
              return (
                <li className="list-group-item" key={item.stat.name}>
                  <div className="rowStat">
                    <p className="h5 me-2">{item.stat.name.toUpperCase()}:</p>
                    <p className="h5">{item.base_stat}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <button
        className="btn btn-dark my-3"
        onClick={() => navigate("/pokemones")}
      >
        Volver
      </button>
    </div>
  );
};

export default PokeDex;
