import NavBar from "../navbar.component";
import Carrusel from "../carrusel.component";
import TablaHorario from "../tablaHorario";
import ReactCalendar from "../calendar.component";
import Agenda from '../agenda.component';

export const PagInicio = () => {
    return (
        <div>
            <NavBar/>
            <div/>
            <Carrusel/>
            <br />
            <div className="row col-md-12">
                <div className="col-md-2" />
                <div className="calendario col-md-4">
                    <ReactCalendar />
                </div>
                <div className=" col-md-4">
                    <Agenda/>
                </div>
            </div>
        </div>
    )
};
export default PagInicio;