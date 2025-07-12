import "../../Main/MainPage.css";
import "./Sidebarheader.css";
import { useNavigate } from "react-router-dom";
import Conejo from "../../assets/resource/icon/Dashboard/conejo.png";
function Sidebarheader() {
  const navigate = useNavigate();
  return (
    <button className="botonDeInico centrar " onClick={() => navigate("/")}>
      <img src={Conejo} />
      <p>RabbitPlayMusic</p>
    </button>
  );
}
export default Sidebarheader;
