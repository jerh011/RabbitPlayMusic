import URL from "./URL";

const GetSongpornombre = (nombre) => {
  return fetch(`${URL()}/api/canciones?q=${nombre}`)
    .then((response) => response.json())
    .then((data) => data.data) // Ajusta si `data` no tiene un campo `.data`
    .catch((error) => {
      console.error("Error al obtener canciones:", error);
      return null;
    });
};

export default GetSongpornombre;
