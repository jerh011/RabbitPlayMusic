import { useState, useEffect } from "react";
import "./Carga.css";
export default function Carga() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    let interval;
    try {
      interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
      }, 500);
    } catch (error) {}
  }, []);

  return (
    <div className="cargandopagina">
      <div className="contentcarga">
        <p>cargando{dots}</p>
      </div>
    </div>
  );
}
