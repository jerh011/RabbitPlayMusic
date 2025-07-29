import "./Artistas.css";
import GetAllArtistas from "../../Services/GetAllArtistas.js";
import { useEffect, useState } from "react";
import URL from "../../Services/URL.js";
import { useNavigate } from "react-router-dom";
import Carga from "../Cargacanciones/Carga";

function Artistas() {
  const [artistas, Setartistas] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const GetArtistas = async () => {
        const datosartistas = await GetAllArtistas();
        Setartistas(datosartistas);

        if (datosartistas !== null && datosartistas.length > 0) {
          setLoading(false);
        }
      };
      GetArtistas();
    } catch (error) {
      console.error("Error cargando artistas:", error);
      //pagina de erro
    }
  }, []);

  const selectArtista = (id) => {
    navigate(`/Inicio/Artista/${id}`);
  };
  if (loading) {
    return <Carga />;
  }
  return (
    <div className="artistas-container">
      <div className="lista-artistas">
        {artistas.map(
          ({
            id,
            nombre,
            nacionalidad,
            genero,
            añoFormacion,
            biografia,
            imagen,
          }) => (
            <div
              key={id}
              className="artista-card"
              onClick={() => selectArtista(id)}
            >
              <img
                src={`${URL()}${imagen}`}
                alt={nombre}
                className="artista-imagen"
              />
              <div className="artista-info">
                <div className="artista-nombre">{nombre}</div>
                <div className="artista-detalle">
                  {nacionalidad}•{añoFormacion}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Artistas;
