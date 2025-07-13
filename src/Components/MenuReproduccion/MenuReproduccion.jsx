import "./MenuReproduccion.css";
import Listacanciones from "../Listadecanciones/Listacanciones";
import { useState, useEffect } from "react";
import GetallSong from "../../Services/GetallSong";

function MenuReproduccion({
  setCancionElegida,
  setCancionEs,
  cancionreproduccion,
}) {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    let interval, timeout;

    const cargarCanciones = async () => {
      try {
        setLoading(true);

        interval = setInterval(() => {
          setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
        }, 500);

        const cancionesData = await GetallSong();
        setCanciones(cancionesData);
        setCancionEs(cancionesData);

        timeout = setTimeout(() => {
          setLoading(false);
          clearInterval(interval);
        }, 1500);
      } catch (error) {
        console.error("Error cargando canciones:", error);
        setLoading(false);
      }
    };

    cargarCanciones();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const seleccionarCancion = (id) => {
    setCancionElegida(id);
  };

  if (loading) {
    return (
      <div className="cargandopagina">
        <div className="contentcarga">
          <p>cargando{dots}</p>
        </div>
      </div>
    );
  }

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
