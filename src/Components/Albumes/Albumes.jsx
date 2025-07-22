import "./Albumes.css";
import URL from "../../Services/URL.js";
import { useState, useEffect } from "react";
import GetAllAlbumes from "../../Services/GetAllAlbumes";
import { useNavigate } from "react-router-dom";
import Carga from "../Cargacanciones/Carga";
import { useOutletContext } from "react-router-dom";
export default function Albumes() {
  const navigate = useNavigate();
  const [albumes, Setalbumes] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    try {
      const AllAlbumes = async () => {
        setLoading(true);
        const datos = await GetAllAlbumes();
        Setalbumes(datos);
        if (datos.length > 0 && datos !== null) {
          setLoading(false);
        }
      };

      AllAlbumes();
    } catch (error) {
      console.error("Error cargando canciones:", error);
    }
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
