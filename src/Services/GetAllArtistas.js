import URL from "./URL.js";

async function GetAllArtistas() {
  try {
    const response = await fetch(URL() + "artistas");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default GetAllArtistas;
