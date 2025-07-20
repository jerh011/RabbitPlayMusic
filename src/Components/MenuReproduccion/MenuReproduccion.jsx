import "./MenuReproduccion.css";
import ListadocancionesGid from "../ListadocancionesGid/ListadoGid";
import { useState, useEffect } from "react";
import GetallSong from "../../Services/GetallSong";
import { useOutletContext } from "react-router-dom";
import Carga from "../Cargacanciones/Carga";
function MenuReproduccion() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setCancionElegida, setCancionEs, cancionreproduccion } =
    useOutletContext();

  useEffect(() => {
    let timeout;
    const cargarCanciones = async () => {
      try {
        setLoading(true);
        const cancionesData = await GetallSong();
        setCanciones(cancionesData);
        setCancionEs(cancionesData);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error cargando canciones:", error);
        setLoading(false);
      }
    };

    cargarCanciones();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return <Carga />;
  }

  const seleccionarCancion = (id) => {
    setCancionElegida(id);
  };

  return (
    <ListadocancionesGid
      canciones={canciones}
      onCancionSeleccionada={seleccionarCancion}
      activa={cancionreproduccion}
    />
  );
}

export default MenuReproduccion;
