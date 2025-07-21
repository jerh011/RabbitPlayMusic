import URL from "../../../Services/URL";
export default function Carrouselconteiner({
  id,
  imagen,
  titulo,
  artista,
  añoLanzamiento,
  selectAlbum,
}) {
  return (
    <div
      className="carrousel-album-card"
      key={id}
      onClick={() => selectAlbum(id)}
    >
      <img
        src={`${URL()}/${imagen}`}
        alt={titulo}
        className="carrousel-album-cover"
      />
      <div className="carrousel-album-info">
        <h3>{titulo}</h3>
        <p>{artista}</p>
        <small>{añoLanzamiento}</small>
      </div>
    </div>
  );
}
