import URL from "../../Services/URL";
import "./HeaderInfo.css";
export default function HeaderInfo({ datos }) {
  return (
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
  );
}
