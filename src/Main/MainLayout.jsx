import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MainPage.css";
import {
  AgregarFavoritosEnLocalStorage,
  ObtenerFavoritosDeLocalStorage,
} from "../Services/LocalStoragefavoritos.js";

import Sidebarheader from "../Layout/Sidebarheader/Sidebarheader";
import Sidebarconteiner from "../Layout/Sidebarconteiner/Sidebarconteiner";
import Barrabusqueda from "../Layout/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Layout/BarraReproducction/BarraReproduccion";

function MainLayout() {
  const [cancionES, setCancionEs] = useState([]);
  const [cancionElegida, setCancionElegida] = useState(null);
  const [repetir, setRepetir] = useState(false);
  const [sidebarAbierto, setSidebarAbierto] = useState(false);
  const [Favoritos, setFavoritos] = useState(
    () => ObtenerFavoritosDeLocalStorage() || []
  );

  const cambiarCancion = (direccion) => {
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

  const AgregarCancionFavorita = (cancion) => {
    const yaEsFavorita = Favoritos.some((fav) => fav.id === cancion.id);

    if (!yaEsFavorita) {
      const nuevosFavoritos = [...Favoritos, cancion];
      setFavoritos(nuevosFavoritos);
      AgregarFavoritosEnLocalStorage(nuevosFavoritos);
    } else {
      const nuevosFavoritos = Favoritos.filter((fav) => fav.id !== cancion.id);
      setFavoritos(nuevosFavoritos);
      EliminarFavoritosEnLocalStorage(cancion.id); // aquí se usa
    }
  };

  // Si aún no hay canción elegida, toma la primera
  useEffect(() => {
    if (cancionES.length > 0 && cancionElegida === null) {
      setCancionElegida(cancionES[0].id);
    }
  }, [cancionES]);

  // Verifica si la canción activa aún existe en la nueva lista
  useEffect(() => {
    if (cancionES.length === 0) return;

    const existe = cancionES.some((c) => c.id === cancionElegida);
    if (!existe) {
      setCancionElegida(cancionES[0].id);
    }
  }, [cancionES]);

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
