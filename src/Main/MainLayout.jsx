import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MainPage.css";
import {
  AgregarFavoritos,
  ObtenerFavoritos,
  EliminarFavoritos,
} from "../Services/FavoritosServices.js";

import Sidebarheader from "../Layout/Sidebarheader/Sidebarheader";
import Sidebarconteiner from "../Layout/Sidebarconteiner/Sidebarconteiner";
import Barrabusqueda from "../Layout/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Layout/BarraReproducction/BarraReproduccion";

function MainLayout() {
  const [cancionES, setCancionEs] = useState([]);
  const [cancionElegida, setCancionElegida] = useState(null);
  const [repetir, setRepetir] = useState(false);
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [Favoritos, setFavoritos] = useState([]);

  // Cargar favoritos al montar
  useEffect(() => {
    const cargarFavoritos = async () => {
      const favoritos = await ObtenerFavoritos();
      const normalizados = favoritos.map((fav) => ({
        ...fav,
        id: fav.cancionId,
      }));
      setFavoritos(normalizados);
    };
    cargarFavoritos();
  }, [Favoritos]);

  const cambiarCancion = (direccion) => {
    if (!Array.isArray(cancionES) || cancionES.length === 0) return;

    const index = cancionES.findIndex((c) => c.id === cancionElegida);
    let nuevoIndex = index + direccion;

    if (nuevoIndex < 0 || nuevoIndex >= cancionES.length) {
      if (repetir) {
        nuevoIndex = 0;
      } else {
        return;
      }
    }

    setCancionElegida(cancionES[nuevoIndex].id);
  };

  const AgregarCancionFavorita = async (cancion) => {
    const yaEsFavorita = Favoritos.some((fav) => fav.id === cancion.id);

    if (!yaEsFavorita) {
      await AgregarFavoritos(cancion.id);
      // const nuevosFavoritos = [...Favoritos, cancion];
      // setFavoritos(nuevosFavoritos);
    } else {
      await EliminarFavoritos(
        cancion.cancionId ? cancion.cancionId : cancion.id
      );
      // const nuevosFavoritos = Favoritos.filter((fav) => fav.id !== cancion.id);
      // setFavoritos(nuevosFavoritos);
    }
  };

  // Seleccionar primera canción si no hay una activa
  useEffect(() => {
    if (
      Array.isArray(cancionES) &&
      cancionES.length > 0 &&
      cancionElegida === null
    ) {
      setCancionElegida(cancionES[0].id);
    }
  }, [cancionES]);

  // Cambiar la activa si la actual ya no existe
  useEffect(() => {
    if (!Array.isArray(cancionES) || cancionES.length === 0) return;

    const existe = cancionES.some((c) => c.id === cancionElegida);
    if (!existe) {
      setCancionElegida(cancionES[0].id);
    }
  }, [cancionES, cancionElegida]);

  return (
    <div className="main">
      <div className={`sidebar-desplegable ${sidebarAbierto ? "activo" : ""}`}>
        <Sidebarconteiner cerrarSidebar={() => setSidebarAbierto(false)} />
      </div>

      <button
        className={`btn-toggle-sidebar ${sidebarAbierto ? "activo" : ""}`}
        onClick={() => setSidebarAbierto(!sidebarAbierto)}
      >
        {sidebarAbierto ? "✕" : "☰"}
      </button>

      <div
        className={`overlay ${sidebarAbierto ? "activo" : ""}`}
        onClick={() => setSidebarAbierto(false)}
      ></div>

      <div className="sicebarheader">
        <Sidebarheader />
      </div>

      <div className="sicebarconteiner">
        <Sidebarconteiner cerrarSidebar={() => setSidebarAbierto(false)} />
      </div>

      <div className="barraBusqueda">
        <Barrabusqueda />
      </div>

      <div className="navegacion">
        <Outlet
          context={{
            setCancionElegida,
            setCancionEs,
            cancionreproduccion: cancionElegida,
            AgregarCancionFavorita,
            Favoritos,
          }}
        />
      </div>

      <div className="BarraReproduccion">
        <BarraReproduccion
          cancionElegida={cancionElegida}
          cancionES={cancionES}
          setRepetir={setRepetir}
          onSiguiente={() => cambiarCancion(1)}
          onAnterior={() => cambiarCancion(-1)}
        />
      </div>
    </div>
  );
}

export default MainLayout;
