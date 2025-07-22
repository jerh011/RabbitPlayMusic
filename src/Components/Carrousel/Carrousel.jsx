import { useState } from "react";
import "./Carrousel.css";
import Carrouselconteiner from "./Carrouselconteiner/Carrouselconteiner";

export default function Carrousel({ datos = [], select, Titulo }) {
  const [index, setIndex] = useState(0); // índice del carrusel
  const [mostrarAlbumes, setMostrarAlbumes] = useState(true); // visibilidad del carrusel

  // Ir al elemento anterior
  const prev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Ir al siguiente elemento
  const next = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, datos.length - 1));
  };

  return (
    <div className="carouselContainer">
      {/* Título que permite expandir o contraer el carrusel */}
      <h2
        onClick={() => setMostrarAlbumes(!mostrarAlbumes)}
        className="toggle-titulo"
      >
        {Titulo}
        <span className={`flecha-icono ${mostrarAlbumes ? "girar" : ""}`}>
          ▼
        </span>
      </h2>
      {/* Carrusel visible solo si mostrarAlbumes es true */}
      {mostrarAlbumes && (
        <div className="carrousel-container">
          <button
            className="carrousel-nav-btn left"
            onClick={prev}
            disabled={index === 0}
          >
            ‹
          </button>

          <div className="carrousel-window">
            <div
              className="carrousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {datos.map((dato) => (
                <Carrouselconteiner
                  key={dato.id}
                  id={dato.id}
                  imagen={dato.portada ? dato.portada : dato.imagen}
                  titulo={dato.titulo ? dato.titulo : dato.nombre}
                  artista={
                    dato.artistaCompleto?.nombre
                      ? dato.artistaCompleto.nombre
                      : dato.nombre
                  }
                  añoLanzamiento={
                    dato.añoLanzamiento
                      ? dato.añoLanzamiento
                      : dato.añoFormacion
                  }
                  selectAlbum={select}
                />
              ))}
            </div>
          </div>

          <button
            className="carrousel-nav-btn right"
            onClick={next}
            disabled={index === datos.length - 1}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
