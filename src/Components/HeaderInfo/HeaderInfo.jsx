import URL from "../../Services/URL";
import Imagen from "../../assets/resource/icon/imagenesdeprueba/imagen1.webp";
import "./HeaderInfo.css";
export default function HeaderInfo({ imagen, titulo, añoLanzamiento, nombre }) {
  const img = imagen ? `${URL()}/${imagen}` : Imagen;

  return (
    <div className="album-header">
      <img
        className="album-cover"
        src={img}
        alt="Portada del álbum Abbey Road"
      />
      <div className="album-descripcion">
        <span className="album-type">Álbum</span>
        <h1 className="album-title">{titulo}</h1>
        <p className="album-descripcion">
          {nombre} • {añoLanzamiento}
        </p>
      </div>
    </div>
  );
}

//  const imagen = cancion.artistaCompleto?.imagen
//    ? `${URL()}/${cancion.artistaCompleto.imagen}`
//    : Imagen;
