import "./Error.css";
export default function Error() {
  return (
    <div className="error-container">
      {/* <IconoError className="error-icon" /> */}
      <div className="error-icon">⚠️</div>
      <h2>¡Algo salió mal!</h2>
      <p>No pudimos cargar la información. Intenta de nuevo más tarde.</p>
    </div>
  );
}
