import Index from "./index";
import Carrusel from "../carrusel.component";
import TablaHorario from "../tablaHorario";

export const PagInicio = () => {
    return (
        <div>
            <Index/>
            <div/>
            <Carrusel/>
            <div className="horario">
                <TablaHorario/>
            </div>
        </div>
    )
};
export default PagInicio;