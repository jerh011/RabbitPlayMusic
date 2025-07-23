// Genero.jsx
import { useParams, useNavigate } from "react-router-dom";
import GetallAlbumes from "../../Services/GetAllAlbumes.js";
import GetallSongs from "../../Services/GetallSong.js";
import GetallArtistas from "../../Services/GetAllArtistas.js";
import { useEffect, useState } from "react";
import Carrousel from "../Carrousel/Carrousel";
import Carga from "../Cargacanciones/Carga";
import ListadocancionesGid from "../ListadocancionesGid/ListadoGid";
import "./GeneroCanciones.css";
import { useOutletContext } from "react-router-dom";
import HeaderInfo from "../HeaderInfo/HeaderInfo";

export default function Genero() {
  const [albumes, setAlbumes] = useState([]);
  const [canciones, setCanciones] = useState([]);
  const [artistas, setArtistas] = useState([]);

  const [loading, setLoading] = useState(true);

  const { Genero } = useParams();
  const navigate = useNavigate();

  const {
    setCancionElegida,
    setCancionEs,
    cancionreproduccion,
    AgregarCancionFavorita,
    Favoritos,
  } = useOutletContext();

  useEffect(() => {
    const OptenerAlbumes = async () => {
      setLoading(true);
      const album = await GetallAlbumes();
      const canciones = await GetallSongs();
      const artistas = await GetallArtistas();

      setAlbumes(album.filter((a) => a.genero === Genero));
      setCanciones(
        canciones.filter((c) => c.artistaCompleto.genero === Genero)
      );
      setArtistas(artistas.filter((a) => a.genero === Genero));
      setLoading(false);
    };

    OptenerAlbumes();
  }, [Genero]);

  const selectAlbum = (id) => navigate(`/Inicio/Album/${id}`);
  const selectArtista = (id) => navigate(`/Inicio/Artista/${id}`);
  const onCancionSeleccionada = (id) => setCancionElegida(id);

  const onPlay = () => {
    setCancionElegida(canciones[0].id);
    setCancionEs(canciones);
  };

  return (
    <>
      {loading ? (
        <Carga />
      ) : (
        <>
          {albumes.length > 0 && (
            <Carrousel datos={albumes} select={selectAlbum} Titulo="Álbumes" />
          )}
          {artistas.length > 0 && (
            <Carrousel
              datos={artistas}
              select={selectArtista}
              Titulo="Artistas"
            />
          )}
        </>
      )}

      <div className="GeneroCanciones">
        {loading ? (
          <Carga />
        ) : canciones.length > 0 ? (
          <>
            <HeaderInfo
              titulo={Genero}
              añoLanzamiento={new Date().getFullYear().toString()}
              nombre="Explora tu música"
              onPlay={onPlay}
              etiqueta={Genero}
            />
            <ListadocancionesGid
              canciones={canciones}
              onCancionSeleccionada={onCancionSeleccionada}
              activa={cancionreproduccion}
              AgregarCancionFavorita={AgregarCancionFavorita}
              Favoritos={Favoritos}
            />
          </>
        ) : (
          <p>No se encontraron canciones.</p>
        )}
      </div>
    </>
  );
}
