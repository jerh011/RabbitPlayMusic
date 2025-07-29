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
export async function AgregarFavoritos(id) {
  try {
    const response = await fetch("http://localhost:3000/favoritos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cancionId: id }), // o favoritos.cancionId si ya viene así
    });

    if (!response.ok) {
      throw new Error("No se pudo agregar a favoritos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error al agregar a favoritos:", error);
    return null;
  }
}

export async function EliminarFavoritos(id) {
  try {
    const response = await fetch(`http://localhost:3000/favoritos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("No se pudo eliminar el favorito");
    }

    return true;
  } catch (error) {
    console.error("❌ Error al eliminar favorito:", error);
    return false;
  }
}

export async function ObtenerFavoritos() {
  try {
    const response = await fetch("http://localhost:3000/favoritos");

    if (!response.ok) {
      throw new Error("Error al obtener los favoritos");
    }

    const data = await response.json();

    // Siempre devolver un arreglo, aunque venga un solo objeto
    if (Array.isArray(data)) {
      return data;
    } else if (data && typeof data === "object") {
      return [data];
    } else {
      return [];
    }
  } catch (error) {
    console.error("❌ No se pudieron cargar los favoritos:", error);
    return [];
  }
}
