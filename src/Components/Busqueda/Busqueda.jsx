import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GetSongpornombre from "../../Services/GetSongpornombre.js";
import { useOutletContext } from "react-router-dom";
import "./Busqueda.css";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import ListadoCanciones from "../ListadoCanciones/ListadoCanciones";
import Carga from "../Cargacanciones/Carga";
import Carrousel from "../Carrousel/Carrousel";

export default function Busqueda() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [resultados, setResultados] = useState({
    albumes: [],
    artistas: [],
    canciones: [],
  });
  const [loading, setLoading] = useState(false);

  const {
    setCancionElegida,
    setCancionEs,
    cancionreproduccion,
    AgregarCancionFavorita,
    Favoritos,
  } = useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    GetSongpornombre(query)
      .then((data) => {
        setResultados({
          albumes: Array.isArray(data?.albumes) ? data.albumes : [],
          artistas: Array.isArray(data?.artistas) ? data.artistas : [],
          canciones: Array.isArray(data?.canciones) ? data.canciones : [],
        });
      })
      .catch((error) => {
        console.error("Error al obtener resultados:", error);
        setResultados({ albumes: [], artistas: [], canciones: [] });
      })
      .finally(() => setLoading(false));
  }, [query]);

  const selectAlbum = (id) => navigate(`/Inicio/Album/${id}`);
  const selectArtista = (id) => navigate(`/Inicio/Artista/${id}`);
  const onCancionSeleccionada = (id) => setCancionElegida(id);

  const onPlay = () => {
    if (resultados.canciones.length > 0) {
      setCancionElegida(resultados.canciones[0].id);
      setCancionEs(resultados.canciones);
    }
  };

  return (
    <>
      {loading ? (
        <Carga />
      ) : (
        <>
          {Array.isArray(resultados.albumes) &&
            resultados.albumes.length > 0 && (
              <Carrousel
                datos={resultados.albumes}
                select={selectAlbum}
                Titulo="Álbumes"
              />
            )}

          {Array.isArray(resultados.artistas) &&
            resultados.artistas.length > 0 && (
              <Carrousel
                datos={resultados.artistas}
                select={selectArtista}
                Titulo="Artistas"
              />
            )}

          {Array.isArray(resultados.canciones) &&
            resultados.canciones.length > 0 && (
              <>
                <HeaderInfo
                  titulo="Canciones encontradas"
                  añoLanzamiento={new Date().getFullYear().toString()}
                  nombre="Explora tu música"
                  onPlay={onPlay}
                  etiqueta="Búsqueda"
                />
                <div className="canciones">
                  <ListadoCanciones
                    canciones={resultados.canciones}
                    activa={cancionreproduccion}
                    onCancionSeleccionada={onCancionSeleccionada}
                    AgregarCancionFavorita={AgregarCancionFavorita}
                    Favoritos={Favoritos}
                  />
                </div>
              </>
            )}
        </>
      )}
    </>
  );
}
