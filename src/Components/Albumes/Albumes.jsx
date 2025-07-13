import "./Albumes.css";
import URL from "../../Services/URL";
const albums = [
  {
    id: 1,
    titulo: "Abbey Road",
    artista: "The Beatles",
    añoLanzamiento: 1969,
    genero: "Rock",
    duracionTotal: "47:23",
    numeroTracks: 17,
    portada: "media/abbey-road.jpg",
    descripcion:
      "Undécimo álbum de estudio de The Beatles, considerado uno de sus mejores trabajos.",
    sello: "Apple Records",
    productor: "George Martin",
  },
  {
    id: 2,
    titulo: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    añoLanzamiento: 1973,
    genero: "Rock Progresivo",
    duracionTotal: "42:59",
    numeroTracks: 9,
    portada: "media/The Dark Side of the Mood.jpg",
    descripcion:
      "Octavo álbum de estudio de Pink Floyd, uno de los álbumes más vendidos de todos los tiempos.",
    sello: "Harvest Records",
    productor: "Pink Floyd",
  },
  {
    id: 3,
    titulo: "A Night at the Opera",
    artista: "Queen",
    añoLanzamiento: 1975,
    genero: "Rock",
    duracionTotal: "43:08",
    numeroTracks: 12,
    portada: "media/A Night at the Opera.jpg",
    descripcion:
      "Cuarto álbum de estudio de Queen, que incluye el icónico 'Bohemian Rhapsody'.",
    sello: "EMI",
    productor: "Roy Thomas Baker",
  },
  {
    id: 4,
    titulo: "Led Zeppelin IV",
    artista: "Led Zeppelin",
    añoLanzamiento: 1971,
    genero: "Hard Rock",
    duracionTotal: "42:34",
    numeroTracks: 8,
    portada: "media/Led Zeppelin IV.jpg",
    descripcion:
      "Cuarto álbum de estudio de Led Zeppelin, que incluye 'Stairway to Heaven'.",
    sello: "Atlantic Records",
    productor: "Jimmy Page",
  },
  {
    id: 5,
    titulo: "Thriller",
    artista: "Michael Jackson",
    añoLanzamiento: 1982,
    genero: "Pop",
    duracionTotal: "42:19",
    numeroTracks: 9,
    portada: "media/Thriller.jpg",
    descripcion:
      "Sexto álbum de estudio de Michael Jackson, el álbum más vendido de todos los tiempos.",
    sello: "Epic Records",
    productor: "Quincy Jones",
  },
  {
    id: 6,
    titulo: "Sgt. Pepper's Lonely Hearts Club Band",
    artista: "The Beatles",
    añoLanzamiento: 1967,
    genero: "Rock",
    duracionTotal: "39:52",
    numeroTracks: 13,
    portada: "media/Sgt. Pepper's Lonely Hearts Club Band.jpg",
    descripcion:
      "Octavo álbum de estudio de The Beatles, considerado uno de los más influyentes de la historia.",
    sello: "Parlophone",
    productor: "George Martin",
  },
];

export default function Albumes() {
  return (
    <div className="album-grid">
      {albums.map((album) => (
        <div key={album.id} className="album-card">
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
