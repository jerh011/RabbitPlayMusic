import URL from "./URL.js";
let GetallSong = async () => {
  try {
    const response = await fetch(URL() + "canciones");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default GetallSong;
