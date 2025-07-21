import { useState, useEffect } from "react";
import GetallGenero from "../../Services/GetallGenero";
import { useNavigate } from "react-router-dom";
import "./Sidebarconteiner.css";

function Sidebarconteiner({ cerrarSidebar }) {
  const [generos, setGeneros] = useState([]);
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const LoadGenero = async () => {
      try {
        const response = await GetallGenero();
        setGeneros(response);
      } catch (error) {
        console.error("Error al buscar las canciónes:", error);
      }
    };
    LoadGenero();
  }, []);

  const filtrarGenero = (genero) => {
    navigate(`/Inicio/Genero/${genero}`);
    //if (cerrarSidebar) cerrarSidebar(); // cerrar menú si se proporcionó la función
  };

  const navegarYcerrar = (ruta) => {
    navigate(ruta);
    if (cerrarSidebar) cerrarSidebar();
  };

  return (
    <>
      <div className="menu-navegacion">
        <button
          className="boton-navegacion"
          onClick={() => navegarYcerrar("/Inicio")}
        >
          Canciones
        </button>
        <button
          className="boton-navegacion"
          onClick={() => navegarYcerrar("/Inicio/Albumes")}
        >
          Albumes
        </button>
        <button
          className="boton-navegacion"
          onClick={() => navegarYcerrar("/Inicio/Artistas")}
        >
          Artistas
        </button>
        <button
          className="boton-navegacion"
          onClick={() => navegarYcerrar("/Inicio/Favoritos")}
        >
          Favoritos
        </button>
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
          {generos.map((genero, index) => (
            <li key={index}>
              <button
                className="boton-navegacion"
                onClick={() => filtrarGenero(genero)}
              >
                {genero}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebarconteiner;
