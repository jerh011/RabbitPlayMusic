import "./MainPage.css"
import Dashboardheader from "../Components/Dashboardheader/Dashboardheader"
import Dashboardconteiner from "../Components/Dashboardconteiner/Dashboardconteiner"
import Barrabusqueda from "../Components/BarraBusqueda/Barrabusqueda"
import BarraReproduccion from "../Components/BarraReproducction/BarraReproduccion"
import MenuReproduccion from "../Components/MenuReproduccion/MenuReproduccion"
import { useEffect, useState } from "react"
import GetallSong from "../Services/GetallSong"


function MainPage() {
  const [canciones, setCanciones] = useState([]);
  const [cancionElegida, setCancionElegida] = useState("");
  useEffect(() => {
    const obtenerCanciones = async () => {
      try {
        const response = await GetallSong();
        setCanciones(response);
      } catch (err) {
        console.error("Error al obtener canciones:", err.message);
      }
    };
    obtenerCanciones();
  }, []);

  return (
    <div className="main">
      <div className="dashboardheader">
        <Dashboardheader />
      </div>
      <div className="dashboardconteiner">
        <Dashboardconteiner />
      </div>
      <div className="barraBusqueda">
        <Barrabusqueda />
      </div>
      <div className="listasdereproducion">
        <MenuReproduccion canciones={canciones}
                          setCancionElegida={setCancionElegida}
        />
      </div>
      <div className="BarraReproducction">
                  
        <BarraReproduccion cancionElegida={cancionElegida} />
      </div>
    </div>
  );
}

export default MainPage;