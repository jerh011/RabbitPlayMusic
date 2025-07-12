import URL from "./URL.js";

async function GetAllAlbumes() {
  try {
    const response = await fetch(URL() + "/api/albumes");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetAllAlbumes;

