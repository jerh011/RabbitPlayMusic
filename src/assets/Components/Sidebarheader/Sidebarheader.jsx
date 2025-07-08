import "../../Main/MainPage.css"
import "./Sidebarheader.css"
import  Conejo from  "../../resource/icon/Dashboard/conejo.png"
function Sidebarheader(){
    return(
        <button className="centrar botonDeInico"><img src={Conejo}/>RabbitPlayMusic</button>
    )

}
export default Sidebarheader