import URL from "./URL.js";

const GetSongpornombre = (nombre) => {
  return fetch(`${URL()}canciones/buscar?q=${nombre}`)
    .then((response) => response.json())
    .then((data) => data) // Ajusta si `data` no tiene un campo `.data`
    .catch((error) => {
      console.error("Error al obtener canciones:", error);
      return null;
    });
};

export default GetSongpornombre;
