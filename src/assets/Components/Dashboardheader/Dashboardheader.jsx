import "../../Main/MainPage.css"
import "./Dashboardheader.css"
import  Conejo from  "../../resource/icon/Dashboard/conejo.png"
function Dashboardheader(){
    return(
        <button className="centrar botonDeInico"><img src={Conejo}/>RabbitPlayMusic</button>
    )

}
export default Dashboardheader