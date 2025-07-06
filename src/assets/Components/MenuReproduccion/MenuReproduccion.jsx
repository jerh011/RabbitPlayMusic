import "./MenuReproduccion.css";
import Listacanciones from "../Listadecanciones/Listacanciones";
import GetallSong from "../../Services/GetallSong";
import { useState, useEffect } from 'react';

function MenuReproduccion() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dots, setDots] = useState('.');
  useEffect(() => {
    const loadCanciones = async () => {
      try {  
        const response = await GetallSong();   
        setCanciones(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '.';
        return prev + '.';
      });
    }, 500);


    loadCanciones();
     return () => clearInterval(interval);
  }, []);

if (loading) {
  return (
    <div className="cargandopagina">
      <div className="contentcarga">
        <p>cargando{dots}</p>
      </div>
    </div>
  );
}
  if (error) return <div>Error: {error}</div>;

  return (<>
    <ul className="ul">
      { canciones.map(cancion => (
        <Listacanciones 
        key={cancion.id}
        artistaNombre={cancion.artistaCompleto} 
        canciontitulo={cancion.titulo} 
        añoSalida={cancion.año} 
        duracionCancion={cancion.duracion}
        />
        ))} 
    </ul>
        </>
  );
}

export default MenuReproduccion;