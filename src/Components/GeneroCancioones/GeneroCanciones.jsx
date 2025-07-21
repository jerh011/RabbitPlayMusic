import { useParams, useNavigate } from "react-router-dom";
import GetallAlbumes from "../../Services/GetAllAlbumes";
import GetallSongs from "../../Services/GetallSong";
import GetallArtistas from "../../Services/GetAllArtistas";
import { useEffect, useState } from "react";
import Carrousel from "../Carrousel/Carrousel";
import Carga from "../Cargacanciones/Carga";
import ListadocancionesGid from "../ListadocancionesGid/ListadoGid";
import "./GeneroCanciones.css";

export default function Genero() {
  const [albumes, setAlbumes] = useState([]);
  const [canciones, setCanciones] = useState([]);
  const [artistas, setArtistas] = useState([]);
  const { Genero } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const OptenerAlbumes = async () => {
      setLoading(true);

      const album = await GetallAlbumes();
      const canciones = await GetallSongs();
      const artistas = await GetallArtistas();

      const albumfilter = album.filter((albums) => albums.genero === Genero);
      const cancionesfilter = canciones.filter(
        (cancion) => cancion.artistaCompleto.genero === Genero
      );
      const artistasfilter = artistas.filter(
        (artista) => artista.genero === Genero
      );

      setArtistas(artistasfilter);
      setAlbumes(albumfilter);
      setCanciones(cancionesfilter);
      setLoading(false);
    };

    OptenerAlbumes();
  }, [Genero]);

  const selectAlbum = (id) => {
    navigate(`/Inicio/Album/${id}`);
  };
  const selectArtista = (id) => {
    navigate(`/Inicio/Artista/${id}`);
  };

  return (
    <>
      <div className="GeneroCanciones">
        <h2>Álbumes</h2>
        {loading ? (
          <Carga />
        ) : albumes.length > 0 ? (
          <Carrousel datos={albumes} select={selectAlbum} />
        ) : (
          <p>No se encontraron álbumes.</p>
        )}
      </div>

      <div className="GeneroCanciones">
        <h2>Artistas</h2>
        {loading ? (
          <Carga />
        ) : artistas.length > 0 ? (
          <Carrousel datos={artistas} select={selectArtista} />
        ) : (
          <p>No se encontraron artistas.</p>
        )}
      </div>

      <div className="GeneroCanciones">
        <h2>Canciones</h2>
        {loading ? (
          <Carga />
        ) : canciones.length > 0 ? (
          <ListadocancionesGid canciones={canciones} />
        ) : (
          <p>No se encontraron canciones.</p>
        )}
      </div>
    </>
  );
}
