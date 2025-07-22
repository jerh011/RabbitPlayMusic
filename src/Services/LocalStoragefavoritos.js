const STORAGE_KEYS = {
  //CANCION_ELEGIDA: "cancionElegida",
  FAVORITOS: "favoritos",
};

// Canción en reproduccion
// export function guardarCancionEnLocalStorage(id) {
//   localStorage.setItem(STORAGE_KEYS.CANCION_ELEGIDA, id);
// }

// export function obtenerCancionDeLocalStorage() {
//   return localStorage.getItem(STORAGE_KEYS.CANCION_ELEGIDA);
// }

// export function limpiarCancionDeLocalStorage() {
//   localStorage.removeItem(STORAGE_KEYS.CANCION_ELEGIDA);
// }

//Lista de Favoritos
export function AgregarFavoritosEnLocalStorage(favoritos) {
  localStorage.setItem(STORAGE_KEYS.FAVORITOS, JSON.stringify(favoritos));
}

export function EliminarFavoritosEnLocalStorage(id) {
  const data = localStorage.getItem(STORAGE_KEYS.FAVORITOS);
  if (!data) return;

  const favoritos = JSON.parse(data);
  const nuevosFavoritos = favoritos.filter((fav) => fav.id !== id);
  localStorage.setItem(STORAGE_KEYS.FAVORITOS, JSON.stringify(nuevosFavoritos));
}
export function ObtenerFavoritosDeLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEYS.FAVORITOS);
  if (!data) return [];

  const parsed = JSON.parse(data);

  if (Array.isArray(parsed)) {
    return parsed;
  }

  // Si no es arreglo pero es objeto válido, lo convertimos en arreglo
  if (typeof parsed === "object" && parsed !== null) {
    return [parsed];
  }

  return [];
}

export function LimpiarFavoritosDeLocalStorage() {
  localStorage.removeItem(STORAGE_KEYS.FAVORITOS);
}
