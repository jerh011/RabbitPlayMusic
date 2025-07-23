import URL from "../../Services/URL.js";
import ImagenDefecto from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import "./HeaderInfo.css";

export default function HeaderInfo({
  imagen,
  titulo,
  añoLanzamiento,
  nombre,
  etiqueta,
  onPlay,
}) {
  const hayImagen = !!imagen;
  const img = hayImagen ? `${URL()}/${imagen}` : ImagenDefecto;

  return (
    <div className={`header-info-container ${!hayImagen ? "no-img" : ""}`}>
      {hayImagen && (
        <div className="header-info-img">
          <img src={img} alt={`Portada del álbum ${titulo}`} />
        </div>
      )}

      <div className="header-info-text">
        {!hayImagen && (
          <button
            className="header-play-button"
            onClick={() => {
              onPlay();
            }}
          >
            ▶
          </button>
        )}

        <div>
          <span className="header-info-type">{etiqueta}</span>
          <h1 className="header-info-title">{titulo}</h1>
          <p className="header-info-details">
            {nombre} • {añoLanzamiento}
          </p>
        </div>

        {hayImagen && (
          <button className="header-play-button" onClick={onPlay}>
            ▶
          </button>
        )}
      </div>
    </div>
  );
}
