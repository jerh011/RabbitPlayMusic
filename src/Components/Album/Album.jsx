import Carga from "../Cargacanciones/Carga";
import "./Album.css";
import { useEffect, useState } from "react";
import GetAlbumById from "../../Services/GetAlbumById";
import { useParams } from "react-router-dom";
import ListadoCanciones from "../ListadoCancioones/ListadoCanciones";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
function Album() {
  const [loading, setLoading] = useState(true);
  const [canciones, Setcanciones] = useState([]);
  const [datos, SetDatos] = useState(null);
  const { Id } = useParams();
  useEffect(() => {
    const cargarAlbum = async () => {
      try {
        const album = await GetAlbumById(Id);
        SetDatos(album.data);
        Setcanciones(album.data.canciones);
      } catch (error) {
        console.error("Error cargando álbum:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarAlbum();
  }, [Id]);

  if (loading || (canciones == null && datos == null)) {
    return <Carga />;
  }

  return (
    <div className="album-page ">
      <HeaderInfo
        imagen={datos.portada}
        titulo={datos.titulo}
        añoLanzamiento={datos.añoLanzamiento}
        nombre={datos.artista.nombre}
      />
      <ListadoCanciones canciones={canciones} album={datos.titulo} />
    </div>
  );
}

export default Album;
