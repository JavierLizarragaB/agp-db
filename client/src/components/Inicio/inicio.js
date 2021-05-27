import NavBar from "../navbar.component";
import Carrusel from "../carrusel.component";
import TablaHorario from "../tablaHorario";

export const PagInicio = () => {
    return (
        <div>
            <NavBar/>
            <div/>
            <Carrusel/>
            <div className="horario">
                <TablaHorario/>
            </div>
        </div>
    )
};
export default PagInicio;