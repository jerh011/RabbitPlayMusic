import URL from "./URL.JS";
let  GetallSong= async () => {
try {
    const response = await fetch(URL() + "/api/canciones");
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
  }
}
export default GetallSong