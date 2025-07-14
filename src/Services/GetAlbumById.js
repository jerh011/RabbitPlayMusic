import URL from "./URL.js";

async function GetAlbumById(id) {
  try {
    const response = await fetch(URL() + "/api/albumes/" + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetAlbumById;
