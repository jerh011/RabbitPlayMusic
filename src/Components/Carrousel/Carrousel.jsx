import { useState } from "react";
import "./Carrousel.css";
import Carrouselconteiner from "./Carrouselconteiner/Carrouselconteiner";
export default function Carrousel({ datos = [], select }) {
  const [index, setIndex] = useState(0);
  const prev = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const next = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, datos.length - 1));
  };

  return (
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
          {console.log(datos)}
          {datos.map((dato) => (
            <Carrouselconteiner
              id={dato.id}
              imagen={dato.portada ? dato.portada : dato.imagen}
              titulo={dato.titulo ? dato.titulo : dato.nombre}
              artista={
                dato.artistaCompleto?.nombre
                  ? dato.artistaCompleto.nombre
                  : dato.nombre
              }
              añoLanzamiento={
                dato.añoLanzamiento ? dato.añoLanzamiento : dato.añoFormacion
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
  );
}
