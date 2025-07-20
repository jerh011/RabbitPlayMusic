import "./MenuReproduccion.css";
import Listacanciones from "../Listadecanciones/Listacanciones";
import { useState, useEffect } from "react";
import GetallSong from "../../Services/GetallSong";
import { useOutletContext } from "react-router-dom";
import Carga from "../Carga/Carga";
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
    setCancionEs(canciones);
    setCancionElegida(id);
  };

  return (
    <ul className="ul">
      {canciones.map(
        ({ id, artistaCompleto, titulo, año, duracion, artista }) => (
          <Listacanciones
            key={id}
            id={id}
            artistaCompleto={artistaCompleto}
            canciontitulo={titulo}
            añoSalida={año}
            duracionCancion={duracion}
            artista={artista}
            onCancionSeleccionada={seleccionarCancion}
            activa={id === cancionreproduccion}
          />
        )
      )}
    </ul>
  );
}

export default MenuReproduccion;
