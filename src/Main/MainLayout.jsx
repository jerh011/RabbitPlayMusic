import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MainPage.css";

import Sidebarheader from "../Layout/Sidebarheader/Sidebarheader";
import Sidebarconteiner from "../Layout/Sidebarconteiner/Sidebarconteiner";
import Barrabusqueda from "../Layout/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Layout/BarraReproducction/BarraReproduccion";

function MainLayout() {
  const [cancionES, setCancionEs] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [repetir, setRepetir] = useState(false);
  const [sidebarAbierto, setSidebarAbierto] = useState(false); // Estado para abrir/cerrar el sidebar móvil

  const cancionElegida = cancionES[indiceActual]?.id || null;

  const cambiarCancion = (direccion) => {
    setIndiceActual((prev) => {
      const nuevoIndice = prev + direccion;
      if ((nuevoIndice < 0 || nuevoIndice >= cancionES.length) && repetir)
        return 0;
      return nuevoIndice;
    });
  };

  useEffect(() => {
    if (cancionES.length > 0) {
      setIndiceActual(0);
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
            setCancionElegida: (id) => {
              const index = cancionES.findIndex(
                (idcancion) => idcancion.id === id
              );
              if (index !== -1) setIndiceActual(index);
            },
            setCancionEs,
            cancionreproduccion: cancionElegida,
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
