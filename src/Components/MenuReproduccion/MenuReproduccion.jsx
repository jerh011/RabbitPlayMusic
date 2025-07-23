import "./MenuReproduccion.css";
import ListadocancionesGid from "../ListadocancionesGid/ListadoGid";
import { useState, useEffect } from "react";
import GetallSong from "../../Services/GetallSong.js";
import Carga from "../Cargacanciones/Carga";
import { useOutletContext } from "react-router-dom";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
function MenuReproduccion() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    setCancionElegida,
    setCancionEs,
    cancionreproduccion,
    AgregarCancionFavorita,
    Favoritos,
  } = useOutletContext();

  useEffect(() => {
    const cargarCanciones = async () => {
      try {
        setLoading(true);
        const cancionesData = await GetallSong();
        setCanciones(cancionesData);
      } catch (error) {
        console.error("Error cargando canciones:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarCanciones();
  }, []);

  const onCancionSeleccionada = (id) => {
    setCancionElegida(id);
  };

  const onPlay = () => {
    setCancionElegida(canciones[0].id);
    setCancionEs(canciones);
  };

  if (loading) return <Carga />;

  return (
    <>
      <HeaderInfo
        titulo="Todas las canciones"
        añoLanzamiento=""
        nombre="Explora tu música"
        onPlay={onPlay}
      />
      <ListadocancionesGid
        canciones={canciones}
        onCancionSeleccionada={onCancionSeleccionada}
        activa={cancionreproduccion}
        AgregarCancionFavorita={AgregarCancionFavorita}
        Favoritos={Favoritos}
      />
    </>
  );
}

export default MenuReproduccion;
