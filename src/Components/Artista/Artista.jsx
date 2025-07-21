import { useState, useEffect } from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import "./Artista.css";
import { useParams } from "react-router-dom";
import Carga from "../Cargacanciones/Carga";
import GetArtistaById from "../../Services/GetArtistaById";
import ListadoCanciones from "../ListadoCancioones/ListadoCanciones";

export default function Artista() {
  const [loading, setLoading] = useState(true);
  const [canciones, Setcanciones] = useState([]);
  const [datos, SetDatos] = useState(null);

  const { Id } = useParams();
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

  if (loading || (canciones == null && datos == null)) {
    return <Carga />;
  }

  return (
    <div className="artista-page">
      <HeaderInfo
        imagen={datos.imagen}
        titulo={datos.nombre}
        añoLanzamiento={datos.añoFormacion}
        nombre={datos.nombre}
      />

      <ListadoCanciones canciones={canciones} datos={datos} />
    </div>
  );
}
