import { useState, useEffect } from "react";
import GetallGenero from "../../Services/GetallGenero";
import "./Sidebarconteiner.css";
function Sidebarconteiner() {
  const [generos, setGeneros] = useState([]);
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    const LoadGenero = async () => {
      try {
        const response = await GetallGenero();

        setGeneros(response);
      } catch (error) {
        console.error("Error al buscar las canciónes:", error);
        return null;
      }
    };
    LoadGenero();
  }, []);

  return (
    <>
      <div className="menu-navegacion">
        <button className="boton-navegacion">Principal</button>
        <button className="boton-navegacion">Albunes</button>
        <button className="boton-navegacion">Artistas</button>
      </div>
      <div className="generos">
        <button
          className="boton-navegacion acordeon-toggle"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-controls="lista-generos"
        >
          <span className={`icono ${abierto ? "abierto" : ""}`}>▾</span>
           Géneros 

        </button>
        <ul
          id="lista-generos"
          className={`lista-generos ${abierto ? "abierto" : "cerrado"}`}
        >
          {generos.map((nombre, index) => (
            <li key={index}>
              <button
                className="boton-navegacion"
                onClick={() => filtrarGenero(nombre)}
              >
                {nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebarconteiner;
