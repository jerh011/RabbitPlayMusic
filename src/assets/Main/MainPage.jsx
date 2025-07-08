import "./MainPage.css";
import Sidebarheader from "../Components/Sidebarheader/Sidebarheader"  
//import Sidebarheader from "../Components/Dashboardheader/Dashboardheader";
import Sidebarconteiner from "../Components/Sidebarconteiner/Sidebarconteiner"
//import Dashboardconteiner from "../Components/Sidebarconteiner/Dashboardconteiner";
import Barrabusqueda from "../Components/BarraBusqueda/Barrabusqueda";
import BarraReproduccion from "../Components/BarraReproducction/BarraReproduccion";
import MenuReproduccion from "../Components/MenuReproduccion/MenuReproduccion";
import { useEffect, useState } from "react";
import GetallSong from "../Services/GetallSong";

function MainPage() {
  const [canciones, setCanciones] = useState([]);
  const [cancionbuscadapornombre, setcancionnombre] = useState([]);
  const [cancionElegida, setCancionElegida] = useState("");
  
  useEffect(() => {
    const obtenerCanciones = async () => {
      try {
        if (cancionbuscadapornombre.length === 0) {
          const response = await GetallSong();
          setCanciones(response);
        } else {
          setCanciones(cancionbuscadapornombre);
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
        <MenuReproduccion
          canciones={canciones}
          setCancionElegida={setCancionElegida}/>
      </div>

      <div className="BarraReproducction">
        <BarraReproduccion cancionElegida={cancionElegida} />
      </div>
    </div>
  );
}

export default MainPage;
