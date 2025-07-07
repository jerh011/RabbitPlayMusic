import "./MenuReproduccion.css";
import Listacanciones from "../Listadecanciones/Listacanciones";
import { useState, useEffect } from "react";

function MenuReproduccion({ canciones, setCancionElegida }) {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(".");

  useEffect(() => {
  setLoading(true);

  const agregarpunto = setInterval(() => {
    setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
  }, 500);

  // Cambio tiempo de 1 a 1500 ms para que se note la carga
  const tiempoagootado = setTimeout(() => {
    setLoading(false);
  }, 1500);

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

  return (
    <>
      <ul className="ul">
        {canciones.map((cancion) => (
          <Listacanciones
            key={cancion.id}
            artistaNombre={cancion.artistaCompleto}
            canciontitulo={cancion.titulo}
            añoSalida={cancion.año}
            duracionCancion={cancion.duracion}
            id={cancion.id}
            onCancionSeleccionada={() => setCancionElegida(cancion.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default MenuReproduccion;
