import "./Artistas.css";
import GetAllArtistas from "../../Services/GetAllArtistas";
import { useEffect, useState } from "react";
import URL from "../../Services/URL";
function Artistas() {
  const [artistas, Setartistas] = useState([]);

  useEffect(() => {
    const GetArtistas = async () => {
      const datosartistas = await GetAllArtistas();
      Setartistas(datosartistas);
    };
    GetArtistas();
  }, []);

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
            <div key={id} className="artista-card">
              <img
                src={`${URL()}/${imagen}`}
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
