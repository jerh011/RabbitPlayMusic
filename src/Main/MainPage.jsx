import "./MainPage.css";
import Sidebarheader from "../Layout/Sidebarheader/Sidebarheader";
import Sidebarconteiner from "../Layout/Sidebarconteiner/Sidebarconteiner";
import Barrabusqueda from "../Layout/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Layout/BarraReproducction/BarraReproduccion";
import MenuReproduccion from "../Layout/MenuReproduccion/MenuReproduccion";
import { useEffect, useState } from "react";
import GetallSong from "../Services/GetallSong";
import { Routes, Route, useNavigate } from "react-router-dom";
import Albumes from "../Components/Albumes/Albumes";
import Artistas from "../Components/Artistas/Artistas";
function MainPage() {
  const [canciones, setCanciones] = useState([]);
  const [cancionbuscadapornombre, setcancionnombre] = useState([]);
  const [cancionElegida, setCancionElegida] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const obtenerCanciones = async () => {
      try {
        if (cancionbuscadapornombre.length === 0) {
          const response = await GetallSong();
          setCanciones(response);
        } else {
          setCanciones(cancionbuscadapornombre);
          navigate("/Inicio");
        }
      } catch (err) {
        console.error("Error al obtener canciones:", err.message);
      }
    };
    obtenerCanciones();
  }, [cancionbuscadapornombre]);

  return (
    <div className="main">
      <div className="dashboardheader">
        <Sidebarheader />
      </div>

      <div className="dashboardconteiner">
        <Sidebarconteiner />
      </div>

      <div className="barraBusqueda">
        <Barrabusqueda setcancionnombre={setcancionnombre} />
      </div>

      <div className="listasdereproducion">
        <Routes>
          <Route
            path="/"
            element={
              <MenuReproduccion
                canciones={canciones}
                setCancionElegida={setCancionElegida}
              />
            }
          />
          <Route path="/Albumes" element={<Albumes />} />
          <Route path="/Artistas" element={<Artistas />} />
        </Routes>
      </div>

      <div className="BarraReproducction">
        <BarraReproduccion cancionElegida={cancionElegida} />
      </div>
    </div>
  );
}

export default MainPage;
