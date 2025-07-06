import "./MainPage.css"
import Dashboardheader from "../Components/Dashboardheader/Dashboardheader"
import Dashboardconteiner from "../Components/Dashboardconteiner/Dashboardconteiner"
import Barrabusqueda from "../Components/BarraBusqueda/Barrabusqueda"
import BarraReproduccion from "../Components/BarraReproducction/BarraReproduccion"
import MenuReproduccion from "../Components/MenuReproduccion/MenuReproduccion"
function MainPage(){
    return (
        <div className="main">
            <div className="dashboardheader">
            <Dashboardheader/>
            </div>
            <div className="dashboardconteiner">
            <Dashboardconteiner/>         
            </div>

            <div className="barraBusqueda">
                 <Barrabusqueda/>
            </div>
            <div className="listasdereproducion">
                <MenuReproduccion/>
            </div>
            <div className="BarraReproducction">
               <BarraReproduccion/>
            </div>
        </div>
    )
}
export default MainPage