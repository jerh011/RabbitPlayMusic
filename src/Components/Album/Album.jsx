import URL from "../../Services/URL";
import Carga from "../Carga/Carga";
import "./Album.css";
import { useEffect, useState } from "react";
import GetAlbumById from "../../Services/GetAlbumById";
import { useParams } from "react-router-dom";

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
      <div className="album-header">
        <img
          className="album-cover"
          src={`${URL()}/${datos.artista.imagen}`}
          alt="Portada del álbum Abbey Road"
        />
        <div className="album-descripcion">
          <span className="album-type">Álbum</span>
          <h1 className="album-title">{datos.titulo}</h1>
          <p className="album-descripcion">
            {datos.artista.nombre} • {datos.añoLanzamiento}
          </p>
        </div>
      </div>

      <div className="song-list-header">
        <div>#</div>
        <div>Título</div>
        <div>Álbum</div>
        <div>Año</div>
        <div>Duración</div>
      </div>

      {canciones.map((cancion) => (
        <div className="song-row">
          <div>{cancion.pista}</div>
          <div>{cancion.titulo}</div>
          <div>{datos.titulo}</div>
          <div>{cancion.año}</div>
          <div>{cancion.duracion}</div>
        </div>
      ))}
    </div>
  );
}

export default Album;
