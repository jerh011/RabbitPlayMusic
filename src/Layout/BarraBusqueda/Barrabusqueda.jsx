import "./Barrabusqueda.css";
import lupa from "../../assets/resource/icon/busquedalista/buscar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Barrabusqueda() {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSearch = () => {
    if (nombre.trim() !== "") {
      navigate(`/Inicio/Buscar?q=${encodeURIComponent(nombre)}`);
    }
  };

  const manejarTecla = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="centrar-barabusqueda centrar">
      <input
        id="BuscarCanciones"
        type="text"
        placeholder="Buscar canciones"
        className="BuscarCanciones"
        value={nombre}
        onChange={handleInputChange}
        onKeyDown={manejarTecla}
      />
      <button onClick={handleSearch}>
        <img src={lupa} alt="BUSCAR" />
      </button>
    </div>
  );
}

export default Barrabusqueda;
