import "./MenuReproduccion.css";
import Listacanciones from "../Listadecanciones/Listacanciones";
import { useState, useEffect } from "react";

function MenuReproduccion({ canciones, setCancionElegida }) {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(".");
  const [cancionActivaId, setCancionActivaId] = useState(null);
  // const [allcanciones, SerAlcaciones] = useState([]);
  /*useEffect(() => {
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
  }, [cancionbuscadapornombre]); */
  useEffect(() => {
    // const GetallCanciones = async () => {
    //   const response = await GetallSong();
    //   setCancionesall(response);
    // };
    setLoading(true);

    const agregarpunto = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    // Cambio tiempo de 1 a 1500 ms para que se note la carga
    const tiempoagootado = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearInterval(agregarpunto);
      clearTimeout(tiempoagootado);
    };
  }, [canciones]);

  if (loading) {
    return (
      <div className="cargandopagina">
        <div className="contentcarga">
          <p>cargando{dots}</p>
        </div>
      </div>
    );
  }

  const seleccionarCancion = (id) => {
    setCancionElegida(id);
    setCancionActivaId(id);
  };
  return (
    <>
      <ul className="ul">
        {canciones.map((cancion) => (
          <Listacanciones
            key={cancion.id}
            artistaCompleto={cancion.artistaCompleto}
            canciontitulo={cancion.titulo}
            añoSalida={cancion.año}
            duracionCancion={cancion.duracion}
            id={cancion.id}
            artista={cancion.artista}
            onCancionSeleccionada={seleccionarCancion}
            activa={cancion.id === cancionActivaId}
          />
        ))}
      </ul>
    </>
  );
}

export default MenuReproduccion;
