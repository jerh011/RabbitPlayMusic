import "./MainPage.css";
import Sidebarheader from "../Layout/Sidebarheader/Sidebarheader";
import Sidebarconteiner from "../Layout/Sidebarconteiner/Sidebarconteiner";
import Barrabusqueda from "../Layout/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Layout/BarraReproducction/BarraReproduccion";
import Navegation from "../Layout/NavegacionContainer/NavegacionContainer";
import { useState, useEffect } from "react";

function MainLayout() {
  const [cancionES, setCancionEs] = useState([]); // Lista de canciones
  const [indiceActual, setIndiceActual] = useState(0); // Índice de la canción actual
  const [repetir, setRepetir] = useState(false); // Índice de la canción actual

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
      <div className="dashboardheader">
        <Sidebarheader />
      </div>

      <div className="dashboardconteiner">
        <Sidebarconteiner />
      </div>

      <div className="barraBusqueda">
        <Barrabusqueda />
      </div>

      <div className="listasdereproducion">
        <Navegation
          setCancionElegida={(id) => {
            const index = cancionES.findIndex((c) => c.id === id);
            if (index !== -1) setIndiceActual(index);
          }}
          setCancionEs={setCancionEs}
          cancionreproduccion={cancionElegida}
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
