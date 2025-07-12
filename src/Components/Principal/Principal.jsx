import { useNavigate } from "react-router-dom";
import "./Principal.css";

function Principal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Principal">
        <div className="Titulo-Pricipal">
          <p>Rabit Play Music</p>
        </div>
        <div className="Descripcion-Pricipal">
          <p>Reproducción rápida y sin interrupciones</p>
        </div>
        <div className="Nota-div">
          <p className="Nota">🎵</p>
        </div>
        <div className="Explora-Principal">
          <p>Explora nuevos géneros y artistas</p>
          <button className="btn-buscar" onClick={() => navigate("/Inicio")}>
            Empieza a buscar
          </button>
        </div>
      </div>
      <footer className="principal-footer">
        <p>© 2025 Rabit Play Music. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
export default Principal;
