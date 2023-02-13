import { Routes, Route } from "react-router-dom";

// Views
import Home from "./assets/views/Home";
import Login from "./assets/views/Login";
import Pokemones from "./assets/views/Pokemones";
import PokeDex from "./assets/views/PokeDex";

//Componente Nav
import NavBar from "./assets/components/NavBar";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/PokeDex/:id" element={<PokeDex />} />
        <Route path="/*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </div>
  );
};

export default App;
