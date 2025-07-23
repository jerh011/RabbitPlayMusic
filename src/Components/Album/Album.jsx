import Carga from "../Cargacanciones/Carga";
import "./Album.css";
import { useEffect, useState } from "react";
import GetAlbumById from "../../Services/GetAlbumById.js";
import { useParams, useOutletContext } from "react-router-dom";
import ListadoCanciones from "../ListadoCanciones/ListadoCanciones";
import HeaderInfo from "../HeaderInfo/HeaderInfo";

function Album() {
  const [loading, setLoading] = useState(true);
  const [canciones, setCanciones] = useState([]);
  const [datos, setDatos] = useState(null);
  const { Id } = useParams();
  const {
    setCancionElegida,
    setCancionEs,
    cancionreproduccion,
    AgregarCancionFavorita,
    Favoritos,
  } = useOutletContext();
  useEffect(() => {
    const cargarAlbum = async () => {
      try {
        const album = await GetAlbumById(Id);
        setDatos(album.data);
        setCanciones(album.data.canciones);
      } catch (error) {
        console.error("Error cargando álbum:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarAlbum();
  }, [Id]);

  const onPlay = () => {
    if (canciones.length > 0) {
      setCancionElegida(canciones[0].id);
      setCancionEs(canciones);
    }
  };

  const onCancionSeleccionada = (id) => {
    setCancionElegida(id);
    setCancionEs(canciones);
  };

  if (loading || !datos || !canciones) {
    return <Carga />;
  }

  return (
    <>
      <HeaderInfo
        imagen={datos.portada}
        titulo={datos.titulo}
        añoLanzamiento={datos.añoLanzamiento}
        nombre={datos.artista.nombre}
        etiqueta="Álbum"
        onPlay={onPlay}
      />
      <div className="album-page">
        <ListadoCanciones
          canciones={canciones}
          activa={cancionreproduccion}
          onCancionSeleccionada={onCancionSeleccionada}
          album={datos.titulo}
          Favoritos={Favoritos}
          AgregarCancionFavorita={AgregarCancionFavorita}
        />
      </div>
    </>
  );
}

export default Album;
