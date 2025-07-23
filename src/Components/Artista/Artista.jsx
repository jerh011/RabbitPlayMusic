import { useState, useEffect } from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import "./Artista.css";
import { useParams, useOutletContext } from "react-router-dom";
import Carga from "../Cargacanciones/Carga";
import GetArtistaById from "../../Services/GetArtistaById.js";
import ListadoCanciones from "../ListadoCanciones/ListadoCanciones";

export default function Artista() {
  const [loading, setLoading] = useState(true);
  const [canciones, Setcanciones] = useState([]);
  const [datos, SetDatos] = useState(null);
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
        const data = await GetArtistaById(Id);
        SetDatos(data);
        Setcanciones(data.canciones);
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
  if (loading || (canciones == null && datos == null)) {
    return <Carga />;
  }

  return (
    <>
      <HeaderInfo
        imagen={datos.imagen}
        titulo={datos.nombre}
        añoLanzamiento={datos.añoFormacion}
        nombre={datos.nombre}
        etiqueta={"Artista"}
        onPlay={onPlay}
      />
      <div className="artista-page">
        <ListadoCanciones
          canciones={canciones}
          activa={cancionreproduccion}
          onCancionSeleccionada={onCancionSeleccionada}
          Favoritos={Favoritos}
          AgregarCancionFavorita={AgregarCancionFavorita}
        />
      </div>
    </>
  );
}
