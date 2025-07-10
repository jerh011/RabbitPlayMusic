import "./Artistas.css";
function Artistas() {
  const artistasEjemplo = [
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
    {
      id: 1,
      nombre: "Pink Floyd",
      imagen: "https://api-musica.netlify.app/media/pink-floyd.jpeg",
      info: "Reino Unido 1965",
      descripcion:
        "Banda británica de rock progresivo, conocida por sus álbumes conceptuales y sus innovaciones en el estudio.",
    },
  ];
  return (
    <div className="artistas-container">
      <div className="lista-artistas">
        {artistasEjemplo.map(({ id, nombre, imagen, info }) => (
          <div key={id} className="artista-card">
            <img src={imagen} alt={nombre} className="artista-imagen" />
            <div className="artista-info">
              <div className="artista-nombre">{nombre}</div>
              <div className="artista-detalle">{info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Artistas;
