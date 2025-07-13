import "./Barrabusqueda.css";
import lupa from "../../assets/resource/icon/busquedalista/buscar.png";
import { useState } from "react";
import GetSongpornombre from "../../Services/GetSongpornombre.js";

function Barrabusqueda() {
  const [nombre, setNombre] = useState("");

  const Inputbuscar = (e) => {
    setNombre(e.target.value);
  };

  const BuscarBoton = async () => {
    if (nombre.trim() === "") {
      setcancionnombre([]);
      return;
    }

    try {
      const busqueda = await GetSongpornombre(nombre);
      setcancionnombre(busqueda);
    } catch (error) {
      console.error(error);
    }
  };

  const manejarTecla = (event) => {
    if (event.key === "Enter") {
      BuscarBoton();
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
        onChange={Inputbuscar}
        onKeyDown={manejarTecla}
      />
      <button onClick={BuscarBoton}>
        <img src={lupa} alt="BUSCAR" />
      </button>
    </div>
  );
}

export default Barrabusqueda;
