import "./Albumes.css";
import URL from "../../Services/URL";
import { useState, useEffect } from "react";
import GetAllAlbumes from "../../Services/GetAllAlbumes";
import { useNavigate } from "react-router-dom";
import Carga from "../Carga/Carga";
export default function Albumes() {
  const navigate = useNavigate();
  const [albumes, Setalbumes] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    let timeout;

    try {
      const AllAlbumes = async () => {
        setLoading(true);
        const datos = await GetAllAlbumes();
        Setalbumes(datos);
      };

      timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
      AllAlbumes();
    } catch (error) {
      console.error("Error cargando canciones:", error);
      setLoading(false);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const selectAlbum = (id) => {
    navigate(`/Inicio/Album/${id}`);
  };
  if (loading) {
    return <Carga />;
  }

  return (
    <div className="album-grid">
      {albumes.map((album) => (
        <div
          key={album.id}
          className="album-card"
          onClick={() => selectAlbum(album.id)}
        >
          <img src={`${URL()}/${album.portada}`} alt={album.titulo} />
          <div className="album-info">
            <h3>{album.titulo}</h3>
            <p>
              <strong>Artista:</strong> {album.artista}
            </p>
            <p>
              <strong>Año:</strong> {album.añoLanzamiento}
            </p>
            <p>
              <strong>Género:</strong> {album.genero}
            </p>
            <p>
              <strong>Duración:</strong> {album.duracionTotal}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
