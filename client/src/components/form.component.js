import React, { Component, useState, useContext, useEffect} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'
import moment from 'moment';
import NavBar from './navbar.component';
import Masculino from '../img/male.png';
import Femenino from '../img/female.png';
import SegundaIteracion from "./segunda-iteracion.component";
import TerceraIteracion from './tercera-iteracion.component';
import CuartaIteracion from './cuarta-iteracion.component';
import QuintaIteracion from './quinta-iteracion.component';
import SextaIteracion from './sexta-iteracion.component';
import SeptimaIteracion from './septima-iteracion.component';
import OctavaIteracion from './octava-iteracion.component';
import TablaHorario from "./tablaHorario";
import Agenda from './agenda.component';
import axios from "axios";
import { verify } from "crypto";


function Form() {
    //para abrir el formulario general
    const [open, setOpen] = useState(false);

    //para abrir los 3 textos
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    //para la que esta adentro de formulario general (abrir iteracion 1)
    const [open4, setOpen4] = useState(false);

    const [message, setMessage] = useState("");

    // Load context
    const {formState, updateFormState} = useContext(FormContext);

    const [citas, setCitas] = useState([]);

    const getCitas = () => {
        
        axios.get('./api/citas_paciente/' + formState.patient_folio ).then((response) => {
            if(!response.data.message)
                setCitas(response.data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var current_date = new Date();
        axios.post("./api/forms", {
            formState,
            date: current_date.getDate() + "/" + (current_date.getMonth()+1) + "/" + current_date.getFullYear() + " - " + current_date.getHours() + ":" + (current_date.getMinutes() < 10 ? '0' : '') + current_date.getMinutes()
        }).then((response) => {
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen(false);
            } else {
                setMessage("Ha sucedido un problema");
            }
        });
    };

    const handleSubmitStudies = (e) => {
        e.preventDefault();
        axios.post("./api/studies", {
            studies: formState.patient_data.studies,
            patient_folio: formState.patient_folio
        }).then((response) => {
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen1(false);
            } else {
                setMessage("Ha sucedido un problema");
            }
        });
    };

    const handleSubmitMedicine = (e) => {
        e.preventDefault();
        axios.post("./api/medicine", {
            medicine: formState.patient_data.medicine,
            patient_folio: formState.patient_folio
        }).then((response) => {
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen2(false);
            } else {
                setMessage("Ha sucedido un problema");
            }
        });
    };

    const handleSubmitAppointment = (e) => {
        e.preventDefault();
        var appointments_json = {
            appointments: formState.patient_data.appointments,
            appointments_time: formState.patient_data.appointments_time,
            appointment_description: formState.patient_data.appointment_description,
            patient_folio: formState.patient_folio
        }

        axios.post("./api/appointments", 
            appointments_json
        ).then((response) => {

            if(response.data.message) {
                setMessage(response.data.message);
                setOpen3(false)
            } else {
                setMessage("Ha sucedido un problema");
            }
        });
        getCitas();
    };

    const verifyValue = (value, ogValue) => { return typeof value != "undefined" ? value : ogValue }

    const getForm = () => {
        axios.get("./api/forms?folio=" + formState.patient_data.folio).then((response) => {

            if(!response.data.message){
                formState.patient_data.birth_state= verifyValue(response.data.datos_paciente.entidad_nacimiento, null);
                formState.patient_data.birth_city= verifyValue(response.data.datos_paciente.ciudad_nacimiento, null);
        
                formState.patient_data.permanent_street= verifyValue(response.data.datos_paciente.direccion_permanente.calle, null);
                formState.patient_data.permanent_num= verifyValue(response.data.datos_paciente.direccion_permanente.num, null); 
                formState.patient_data.permanent_suburb= verifyValue(response.data.datos_paciente.direccion_permanente.colonia, null);
                formState.patient_data.permanent_locality= verifyValue(response.data.datos_paciente.direccion_permanente.localidad, null);
                formState.patient_data.permanent_municipality= verifyValue(response.data.datos_paciente.direccion_permanente.municipio, null);
                formState.patient_data.permanent_zip_code= verifyValue(response.data.datos_paciente.direccion_permanente.cp, null);
                formState.patient_data.permanent_phone= verifyValue(response.data.datos_paciente.direccion_permanente.tel, null);
                formState.patient_data.permanent_phone2= verifyValue(response.data.datos_paciente.direccion_permanente.tel2, null);
        
                formState.patient_data.email= verifyValue(response.data.datos_paciente.correo, null);
                formState.patient_data.income= verifyValue(response.data.datos_paciente.ingreso, null);
                formState.patient_data.medical_service= verifyValue(response.data.datos_paciente.servicio_medico, null);
                formState.patient_data.scholarship= verifyValue(response.data.datos_paciente.escolaridad, null);
                formState.patient_data.ocupation= verifyValue(response.data.datos_paciente.ocupacion, null);
                formState.patient_data.religion= verifyValue(response.data.datos_paciente.religion, null);
                formState.patient_data.civil_state= verifyValue(response.data.datos_paciente.estado_civil, null);
        
                formState.patient_data.clinic_record_date= typeof response.data.datos_paciente.realizacion_historial_clinico != "undefined" ? moment.unix(response.data.datos_paciente.realizacion_historial_clinico.$date/999.95).format("yyyy-MM-DD"): null;
        
                formState.patient_data.temp_street= verifyValue(response.data.datos_paciente.direccion_temporal.calle, null);
                formState.patient_data.temp_num= verifyValue(response.data.datos_paciente.direccion_temporal.num, null);
                formState.patient_data.temp_suburb= verifyValue(response.data.datos_paciente.direccion_temporal.colonia, null);
                formState.patient_data.temp_locality= verifyValue(response.data.datos_paciente.direccion_temporal.localidad, null);
                formState.patient_data.temp_municipality= verifyValue(response.data.datos_paciente.direccion_temporal.municipio, null);
                formState.patient_data.temp_zip_code= verifyValue(response.data.datos_paciente.direccion_temporal.cp, null);
                formState.patient_data.temp_phone= verifyValue(response.data.datos_paciente.direccion_temporal.tel, null);
                formState.patient_data.temp_phone2= verifyValue(response.data.datos_paciente.direccion_temporal.tel2, null);

                formState.patient_data.responsable_name= verifyValue(response.data.datos_paciente.familiar_responsable.nombre_responsable, null);
        
                formState.patient_data.responsable_street= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.calle, null);
                formState.patient_data.responsable_num= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.num, null);
                formState.patient_data.responsable_suburb= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.colonia, null);
                formState.patient_data.responsable_locality= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.localidad, null);
                formState.patient_data.responsable_municipality= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.municipio, null);
                formState.patient_data.responsable_zip_code= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.cp, null);
                formState.patient_data.responsable_phone= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.tel, null);
                formState.patient_data.responsable_phone2= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.tel2, null);
        
                formState.patient_data.responsable_relationship= verifyValue(response.data.datos_paciente.familiar_responsable.parentesco_responsable, null);
        
                formState.patient_data.chronic_degenerative_diseases= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_cronicodegenerativas, null);
                formState.patient_data.infectious_contagious_diseases= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_infectocontagiosas, null);

                formState.patient_data.surgeries= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.tiene_antecedente, null);
                formState.patient_data.surgeries_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.notas, null);
                
                formState.patient_data.jail= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.carcel.tiene_antecedente, null);
                formState.patient_data.jail_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.carcel.notas, null);
                
                formState.patient_data.blood_transfusions= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.tiene_antecedente, null);
                formState.patient_data.blood_transfusions_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.notas, null);
                
                formState.patient_data.allergies= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alergias.tiene_antecedente, null);
                formState.patient_data.allergies_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alergias.notas, null);
                
                
                formState.patient_data.trauma= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.tiene_antecedente, null);
                formState.patient_data.trauma_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.notas, null);

                formState.patient_data.alcoholism_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.consumo, null);
                formState.patient_data.alcoholism_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.edad_inicio, null);
                formState.patient_data.alcoholism_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.cantidad, null);
                formState.patient_data.alcoholism_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.frecuencia, null);
                formState.patient_data.alcoholism_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.ultimo_consumo, null);

                formState.patient_data.smoking_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.consumo, null);
                formState.patient_data.smoking_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.edad_inicio, null);
                formState.patient_data.smoking_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.cantidad, null);
                formState.patient_data.smoking_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.frecuencia, null);
                formState.patient_data.smoking_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.ultimo_consumo, null);

                formState.patient_data.drug_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.consumo, null);
                formState.patient_data.drug_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.edad_inicio, null);
                formState.patient_data.drug_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.cantidad, null);
                formState.patient_data.drug_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.frecuencia, null);
                formState.patient_data.drug_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.ultimo_consumo, null);
        
                formState.patient_data.male_start_sexual_life= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.inicio_vida_sexual, null);
                formState.patient_data.male_sexual_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.parejas_sexuales, null);
                formState.patient_data.male_std= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.ets, null);
                formState.patient_data.male_contraceptive_methods= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.metodos_anticonceptivos, null);
        
                formState.patient_data.female_menarche= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.menarca, false);
                formState.patient_data.female_menarche_age= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.edad_menarca, null);
                formState.patient_data.female_rhythm= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ritmo_menarca, null);
                formState.patient_data.female_start_sexual_life= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.inicio_vida_sexual, null);
                formState.patient_data.female_high_risk_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.parejas_alto_riesgo, null);
                formState.patient_data.female_sexual_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.parejas_sexuales, null);

                formState.patient_data.female_std= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ets.tiene_antecedente, null);
                formState.patient_data.female_std_notes= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ets.notas, null);
                
                formState.patient_data.female_gestations= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.gestas, null);
                formState.patient_data.female_deliveries= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.partos, null);
                formState.patient_data.female_cesarean_births= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.cesareas, null);
                formState.patient_data.female_abortions= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.abortos, null);

                formState.patient_data.female_date_last_delivery= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto.$date/999.95).format("yyyy-MM-DD") : null;
                
                formState.patient_data.female_age_first_pregnancy= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.edad_primer_embarazo, null);
                formState.patient_data.female_family_planning_methods= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.metodos_planificacion_familiar, null);

                formState.patient_data.female_date_last_menstruation= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla.$date/999.95).format("yyyy-MM-DD") : null;


                formState.patient_data.female_menopause= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.menopausia, null);
                formState.patient_data.female_hormonal_therapy= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.terapia_remplazo_hormonal, null);
                formState.patient_data.female_breastfeeding= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.lactancia_materna, null);

                formState.patient_data.female_last_pap_smear= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha.$date/999.95).format("yyyy-MM-DD") : null;

                formState.patient_data.female_last_pap_smear_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.resultado, null);
                
                formState.patient_data.female_last_hybrid_test= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha.$date/999.95).format("yyyy-MM-DD") : null;
                formState.patient_data.female_last_hybrid_test_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.resultado, null);
                
                formState.patient_data.female_last_mammography= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha.$date/999.95).format("yyyy-MM-DD") : null;
                formState.patient_data.female_last_mammography_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.resultado, null);
        
        
                /*Cambios coloracion*/
                formState.patient_data.skin_paleness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.palidez, false);
                formState.patient_data.skin_icterus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.ictericia, false);
                formState.patient_data.skin_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.cianosis, false);
        
                formState.patient_data.skin_eruptions= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.erupciones, false);
                formState.patient_data.skin_spots= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.manchas, false);
                formState.patient_data.skin_pruritus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.prurito, false);
                formState.patient_data.skin_dryness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.sequedad, false);
                formState.patient_data.skin_volume_increase= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.aumento_volumen, false);
                formState.patient_data.skin_nails_hair= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.unas_pelo, false);
                formState.patient_data.skin_nodules= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.nodulos, false);
                formState.patient_data.skin_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.observaciones, null);
        
                /*Cambios vision*/
                formState.patient_data.ophthalmic_diplopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.diplopia, false);
                formState.patient_data.ophthalmic_eye_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.dolor_ocular, false);
                formState.patient_data.ophthalmic_photophobia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotofobia, false);
                formState.patient_data.ophthalmic_amaurosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.amaurosis, false);
                formState.patient_data.ophthalmic_photopsies= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotopsias, false);
                formState.patient_data.ophthalmic_myodesopsias= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miodesopsias, false);
                formState.patient_data.ophthalmic_scotomas= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.scotomas, false);
                formState.patient_data.ophthalmic_hemeralopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.hemeralopia, false);
                formState.patient_data.ophthalmic_nyctalopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.nictalopia, false);
        
                /*Uso de lentes*/
                formState.patient_data.ophthalmic_myopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miopia, false);
                formState.patient_data.ophthalmic_astigmatism= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.astigmatismo, false);
        
                formState.patient_data.ophthalmic_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.observaciones, null);
        
                /*Cambios en la audicion*/
                formState.patient_data.ent_otalgia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.otalgia, false);
                formState.patient_data.ent_algiacusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.algiacusia, false);
                formState.patient_data.ent_presbycusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.presbiacusia, false);
                formState.patient_data.ent_anacusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.anacusia, false);
                formState.patient_data.ent_tinnitus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.tinnitus, false);
                formState.patient_data.ent_ear_ringing= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.acufenos, false);
                formState.patient_data.ent_hearing_loss= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.hipoacusia, false);
        
                formState.patient_data.ent_ear_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_oido, false);
                formState.patient_data.ent_vertigo= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.vertigo, false);
                formState.patient_data.ent_fluid_leaking_ear= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_oido, false);
                formState.patient_data.ent_smelling_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.cambios_olfato, false);
                formState.patient_data.ent_fluid_leaking_nose= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_nariz, false);
                formState.patient_data.ent_nose_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_nariz, false);
                formState.patient_data.ent_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.observaciones, null);
        
                /*Dientes*/
                formState.patient_data.mouth_throat_cavities= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.caries, false);
                formState.patient_data.mouth_throat_dental_agenesis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.agenesia_dental, false);
                formState.patient_data.mouth_throat_prothesis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dientes_protesis, false);
        
                /*Encias */
                formState.patient_data.mouth_throat_gingivorrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorrea, false);
                formState.patient_data.mouth_throat_gingivorrhagia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorragia, false);
                formState.patient_data.mouth_throat_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_dolor_encias, false);
                formState.patient_data.mouth_throat_gums_ulcerations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_ulceras, false);
        
                /*Lengua*/
                formState.patient_data.mouth_throat_colorations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_coloraciones, false);
                formState.patient_data.mouth_throat_size= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_tamaño, false);
                formState.patient_data.mouth_throat_plaque_presence= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_presencia_placa, false);
                formState.patient_data.mouth_throat_tongue_ulcerations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_ulceras, false);
        
                /*Problemas de hablar*/
                formState.patient_data.mouth_throat_dysphonia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.disfonia, false);
                formState.patient_data.mouth_throat_aphonia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.afonia, false);
        
                formState.patient_data.mouth_throat_thirst= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.sed, false);
                formState.patient_data.mouth_throat_speaking_eating_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dolor_comer_hablar, false);
                formState.patient_data.mouth_throat_bad_breath= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.mal_aliento, false);
                formState.patient_data.mouth_throat_excess_salivation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.exceso_salivacion, false);
                formState.patient_data.mouth_throat_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.observaciones, null);
        
                formState.patient_data.digestive_apettite_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.cambio_apetito, false);
                formState.patient_data.digestive_sickness_vomit= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.nauseas_vomito, false);
                formState.patient_data.digestive_abdominal_distention= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.distension_abdominal, false);
        
                /*Esofago*/
                formState.patient_data.digestive_abdominal_gastralgia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.gastralgia, false);
                formState.patient_data.digestive_abdominal_acidity= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acidez, false);
                formState.patient_data.digestive_abdominal_postrandial_fullness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.llenura_postprandial, false);
        
                /*Cambios de evacuacion*/
                formState.patient_data.digestive_abdominal_tenesmus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.tenesmo, false);
                formState.patient_data.digestive_abdominal_bids= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.pujos, false);
                formState.patient_data.digestive_abdominal_encopresis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.encopresis, false);
                formState.patient_data.digestive_abdominal_anal_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_anal, false);
                formState.patient_data.digestive_abdominal_constipation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.constipacion, false);
                formState.patient_data.digestive_abdominal_rectal_bleeding= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.rectorragia, false);
                formState.patient_data.digestive_abdominal_hematochezia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.hematoquecia, false);
        
                /*Higado y vias biliares*/
                formState.patient_data.digestive_abdominal_jaundice= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ictericia, false);
                formState.patient_data.digestive_abdominal_pruritus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.prurito, false);
                formState.patient_data.digestive_abdominal_fever= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ulcerations, false);
                formState.patient_data.digestive_abdominal_ascites= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ascitis, false);
                formState.patient_data.digestive_abdominal_biliary_colic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_biliar, false);
                formState.patient_data.digestive_abdominal_hepatic_colic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_epatitico, false);
                formState.patient_data.digestive_abdominal_acholia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acolia, false);
        
                /*Pancreas*/
                formState.patient_data.digestive_abdominal_steatorrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.esteatorrea, false);
                formState.patient_data.digestive_abdominal_diarrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.diarrea, false);
                formState.patient_data.digestive_abdominal_hypersalivation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.sialorrea, false);
                formState.patient_data.digestive_abdominal_abdominal_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_abdomen, false);
                formState.patient_data.digestive_abdominal_back_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_espalda, false);
        
                formState.patient_data.digestive_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.observaciones, null);
        
                formState.patient_data.respiratory_cough= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.tos, false);
                formState.patient_data.respiratory_chest_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.dolor_toracico, false);
                formState.patient_data.respiratory_hemoptysis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.hemoptisis, false);
                formState.patient_data.respiratory_vomiting_cough= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.vomica, false);
                formState.patient_data.respiratory_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cianosis, false);
                formState.patient_data.respiratory_fatigue= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.fatiga, false);
                formState.patient_data.respiratory_breathing_problems= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.problemas_respirar, false);
                formState.patient_data.respiratory_breathing_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cambios_respiracion, false);
                formState.patient_data.respiratory_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.observaciones, null);
        
                formState.patient_data.cardiovascular_dyspnoea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.disnea, false);
                formState.patient_data.cardiovascular_orthopnea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.ortopnea, false);
                formState.patient_data.cardiovascular_lipothymia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.lipotimia, false);
                formState.patient_data.cardiovascular_syncope= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.sincope, false);
                formState.patient_data.cardiovascular_edema= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.edema, false);
                formState.patient_data.cardiovascular_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.cianosis, false);
                formState.patient_data.cardiovascular_chest_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.color_toracico, false);
                formState.patient_data.cardiovascular_palpitations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.palpitaciones, false);
                formState.patient_data.cardiovascular_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.observaciones, null);
        
                formState.patient_data.genitourinary_urinating_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_miccionar, false);
                formState.patient_data.genitourinary_urinating_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dolor_miccionar, false);
                formState.patient_data.genitourinary_urinating_difficulty = verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dificultad_miccionar, false);
                formState.patient_data.genitourinary_jet_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_chorro, false);
                formState.patient_data.genitourinary_menstruation_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_menstruacion, false);
                formState.patient_data.genitourinary_dyspareunia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dispareunia, false);
                formState.patient_data.genitourinary_libido_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_libido, false);
                formState.patient_data.genitourinary_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.observaciones, null);
        
                formState.patient_data.musculoskeletal_muscle_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_muscular, false);
                formState.patient_data.musculoskeletal_joint_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_articular, false);
                formState.patient_data.musculoskeletal_joint_stiffness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.rigidez_articular, false);
                formState.patient_data.musculoskeletal_nodules= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.nodulos, false);
                formState.patient_data.musculoskeletal_bone_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_osea, false);
                formState.patient_data.musculoskeletal_ambulation_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.cambios_deambulacion, false);
                formState.patient_data.musculoskeletal_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.observaciones, null);
        
                formState.patient_data.hematological_weakness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.debilidad, false);
                formState.patient_data.hematological_color_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.cambios_coloracion, false);
                formState.patient_data.hematological_bleeding= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hemorragias, false);
                formState.patient_data.hematological_petechiae= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.petequias, false);
                formState.patient_data.hematological_ecchymosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.equimosis, false);
                formState.patient_data.hematological_bruises= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hematomas, false);
                formState.patient_data.hematological_lymphadenopathy= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.adenopatias, false);
                formState.patient_data.hematological_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.observaciones, null);
            
                formState.patient_data.nervous_headache= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cefalea, false);
                formState.patient_data.nervous_seizures= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.convulsiones, false);
                formState.patient_data.nervous_memory_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_memoria, false);
                formState.patient_data.nervous_sphincters_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_esfinteres, false);
                formState.patient_data.nervous_loss_of_feeling= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_sensacion, false);
                formState.patient_data.nervous_loss_of_movement= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_movimiento, false);
                formState.patient_data.nervous_loss_of_balance= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_equilibrio, false);
                formState.patient_data.nervous_language_disorders= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.trastornos_lenguaje, false);
                formState.patient_data.nervous_gait_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_marcha, false);
                formState.patient_data.nervous_tremors= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.temblores, false);
                formState.patient_data.nervous_paralysis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paralisis, false);
                formState.patient_data.nervous_parasthesia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.parestesias, false);
                formState.patient_data.nervous_paresis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paresias, false);
                formState.patient_data.nervous_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.observaciones, null);
            
                formState.patient_data.psychic_distress= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.angustia, false);
                formState.patient_data.psychic_depression= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.depresion, false);
                formState.patient_data.psychic_interest_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.cambios_interes, false);
                formState.patient_data.psychic_guilt= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.culpa, false);
                formState.patient_data.psychic_suicidal_thoughts= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.ideas_suicidas, false);
                formState.patient_data.psychic_hallucinations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.alucinaciones, false);
                formState.patient_data.psychic_delirium= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.delirio, false);
                formState.patient_data.psychic_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.observaciones, null);
            
                formState.patient_data.physical_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.observaciones_exploracion_fisica, null);
            
                formState.patient_data.follow_up_treatment_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.tiene_antecedente, null);
                formState.patient_data.follow_up_treatment_changes_notes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.notas, null);
                formState.patient_data.follow_up_actual_symptoms= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.sintomas_actuales, null);
                formState.patient_data.follow_up_last_medication_efects= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.efectos_ultima_administracion_medicamentos, null);
                formState.patient_data.follow_up_psychology_follow_up= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.seguimiento_psicologico, null);
                formState.patient_data.follow_up_actual_diagnostic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.diagnostico_actual, null);

                formState.family_data.first_member_name= verifyValue(response.data.datos_familia.estructura_familiar.primer_nombre_familiar, null);
                formState.family_data.first_member_age= verifyValue(response.data.datos_familia.estructura_familiar.primera_edad_familiar, null);
                formState.family_data.first_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.primer_parentesco_familiar, null);
                formState.family_data.first_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.primer_estado_civil_familiar, null);
                formState.family_data.first_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.primer_ocupacion_familiar, null);
                formState.family_data.first_member_income= verifyValue(response.data.datos_familia.estructura_familiar.primer_ingreso_familiar, null);
        
                formState.family_data.second_member_name= verifyValue(response.data.datos_familia.estructura_familiar.segundo_nombre_familiar, null);
                formState.family_data.second_member_age= verifyValue(response.data.datos_familia.estructura_familiar.segunda_edad_familiar, null);
                formState.family_data.second_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.segundo_parentesco_familiar, null);
                formState.family_data.second_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.segundo_estado_civil_familiar, null);
                formState.family_data.second_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.segundo_ocupacion_familiar, null);
                formState.family_data.second_member_income= verifyValue(response.data.datos_familia.estructura_familiar.segundo_ingreso_familiar, null);
        
                formState.family_data.third_member_name= verifyValue(response.data.datos_familia.estructura_familiar.tercer_nombre_familiar, null);
                formState.family_data.third_member_age= verifyValue(response.data.datos_familia.estructura_familiar.tercera_edad_familiar, null);
                formState.family_data.third_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.tercer_parentesco_familiar, null);
                formState.family_data.third_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.tercer_estado_civil_familiar, null);
                formState.family_data.third_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.tercer_ocupacion_familiar, null);
                formState.family_data.third_member_income= verifyValue(response.data.datos_familia.estructura_familiar.tercer_ingreso_familiar, null);
        
                formState.family_data.fourth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_nombre_familiar, null);
                formState.family_data.fourth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.cuarta_edad_familiar, null);
                formState.family_data.fourth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_parentesco_familiar, null);
                formState.family_data.fourth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_estado_civil_familiar, null);
                formState.family_data.fourth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_ocupacion_familiar, null);
                formState.family_data.fourth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_ingreso_familiar, null);
        
                formState.family_data.fifth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.quinto_nombre_familiar, null);
                formState.family_data.fifth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.quinta_edad_familiar, null);
                formState.family_data.fifth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.quinto_parentesco_familiar, null);
                formState.family_data.fifth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.quinto_estado_civil_familiar, null);
                formState.family_data.fifth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.quinto_ocupacion_familiar, null);
                formState.family_data.fifth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.quinto_ingreso_familiar, null);
        
                formState.family_data.sixth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.sexto_nombre_familiar, null);
                formState.family_data.sixth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.sexta_edad_familiar, null);
                formState.family_data.sixth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.sexto_parentesco_familiar, null);
                formState.family_data.sixth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.sexto_estado_civil_familiar, null);
                formState.family_data.sixth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.sexto_ocupacion_familiar, null);
                formState.family_data.sixth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.sexto_ingreso_familiar, null);
        
                formState.family_data.seventh_member_name= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_nombre_familiar, null);
                formState.family_data.seventh_member_age= verifyValue(response.data.datos_familia.estructura_familiar.séptima_edad_familiar, null);
                formState.family_data.seventh_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_parentesco_familiar, null);
                formState.family_data.seventh_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_estado_civil_familiar, null);
                formState.family_data.seventh_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_ocupacion_familiar, null);
                formState.family_data.seventh_member_income= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_ingreso_familiar, null);
        
                formState.family_data.paternal_grandfather_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.vive, null);
                formState.family_data.paternal_grandfather_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.enfermedades, null);
                formState.family_data.paternal_grandfather_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.causa_defuncion, null);
        
                formState.family_data.paternal_grandmother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.vive, null);
                formState.family_data.paternal_grandmother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.enfermedades, null);
                formState.family_data.paternal_grandmother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.causa_defuncion, null);
        
                formState.family_data.maternal_grandfather_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.vive, null);
                formState.family_data.maternal_grandfather_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.enfermedades, null);
                formState.family_data.maternal_grandfather_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.causa_defuncion, null);
        
                formState.family_data.maternal_grandmother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.vive, null);
                formState.family_data.maternal_grandmother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.enfermedades, null);
                formState.family_data.maternal_grandmother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.causa_defuncion, null);
        
                formState.family_data.father_living= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.vive, null);
                formState.family_data.father_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.enfermedades, null);
                formState.family_data.father_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.causa_defuncion, null);
        
                formState.family_data.mother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.vive, null);
                formState.family_data.mother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.enfermedades, null);
                formState.family_data.mother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.causa_defuncion, null);
        
                formState.family_data.siblings_quantity= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.cantidad, null);
                formState.family_data.siblings_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.enfermedades, null);
                formState.family_data.siblings_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.causa_defuncion, null);
        
                formState.family_data.sons_quantity= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.cantidad, null);
                formState.family_data.sons_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.enfermedades, null);
                formState.family_data.sons_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.causa_defuncion, null);
        
                formState.family_data.number_sicks= verifyValue(response.data.datos_familia.numero_de_enfermos, null);
        
                formState.family_data.household_member_substance= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.consume_miembro_vivienda, null);
                
                formState.family_data.substance_alcohol= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.alcohol, false);
                formState.family_data.substance_glue= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.resistol, false);
                formState.family_data.substance_cocaine= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cocaina, false);
                formState.family_data.substance_tobacco= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.tabaco, false);
                formState.family_data.substance_marijuana= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.marihuana, false);
                formState.family_data.substance_tablets= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.pastillas, false);
                formState.family_data.substance_metamphetamine= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cristal, false);
                formState.family_data.substance_others= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.otros, null);
                
                formState.family_data.consuming_father= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_padre, false);
                formState.family_data.consuming_mother= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_madre, false);
                formState.family_data.consuming_tutor= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tutor, false);
                formState.family_data.consuming_son= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_hijo, false);
                formState.family_data.consuming_spouse= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_cónyuge, false);
                formState.family_data.consuming_uncle= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tío, false);
                formState.family_data.consuming_grandparent= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_abuelo, false);
                formState.family_data.consuming_others= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_otro, null);

                formState.family_data.consuming_frequency= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.frecuencia_consumo, null)

                formState.home_and_economy.place_type= verifyValue(response.data.casa_economia.vivienda.tipo_vivienda, null);
                formState.home_and_economy.place_services= verifyValue(response.data.casa_economia.vivienda.servicios_vivienda, null);
                formState.home_and_economy.place_material= verifyValue(response.data.casa_economia.vivienda.material_vivienda, null);
                
                formState.home_and_economy.place_kitchen= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.cocina, false);
                formState.home_and_economy.place_lounge= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.sala, false);
                formState.home_and_economy.place_dining_room= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.comedor, false);
                formState.home_and_economy.place_bedroom= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.recámara, false);
                formState.home_and_economy.place_bedroom_quantity= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.cantidad_de_recámaras, null);
                formState.home_and_economy.place_others= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.otros_cuartos, null);
                
                formState.home_and_economy.place_person_per_room= verifyValue(response.data.casa_economia.vivienda.personas_por_cuarto_vivienda, null);
                formState.home_and_economy.place_location= verifyValue(response.data.casa_economia.vivienda.zona_vivienda, null);

                formState.home_and_economy.place_dust= verifyValue(response.data.casa_economia.vivienda.polvo, false);
                formState.home_and_economy.place_wood_smoke= verifyValue(response.data.casa_economia.vivienda.humo_leña, false);
                formState.home_and_economy.place_others_exposition= verifyValue(response.data.casa_economia.vivienda.otros, null);
            
                formState.home_and_economy.electrodomestics= verifyValue(response.data.casa_economia.bienes_hogar.electrodomesticos, null);
                formState.home_and_economy.air_conditioner= verifyValue(response.data.casa_economia.bienes_hogar.refrigeracion, null);
            
                formState.home_and_economy.transportation= verifyValue(response.data.casa_economia.transporte_familiar.transporte, null);
                formState.home_and_economy.car_brand= verifyValue(response.data.casa_economia.transporte_familiar.marca_auto, null);
                formState.home_and_economy.car_model= verifyValue(response.data.casa_economia.transporte_familiar.modelo_auto, null);
            
                formState.home_and_economy.geographic_area= verifyValue(response.data.casa_economia.area_geografica, null);
            
                formState.home_and_economy.outcome_electric_power= verifyValue(response.data.casa_economia.egresos.energia_electrica_egreso, null);
                formState.home_and_economy.outcome_water= verifyValue(response.data.casa_economia.egresos.agua_egreso, null);
                formState.home_and_economy.outcome_gas= verifyValue(response.data.casa_economia.egresos.gas_egreso, null);
                formState.home_and_economy.outcome_phone= verifyValue(response.data.casa_economia.egresos.telefono_egreso, null);
                formState.home_and_economy.outcome_food= verifyValue(response.data.casa_economia.egresos.alimentos_egreso, null);
                formState.home_and_economy.outcome_rent= verifyValue(response.data.casa_economia.egresos.renta_egreso, null);
                formState.home_and_economy.outcome_transportation= verifyValue(response.data.casa_economia.egresos.transporte_egreso, null);
                formState.home_and_economy.outcome_education= verifyValue(response.data.casa_economia.egresos.educacion_egreso, null);
                formState.home_and_economy.outcome_clothing= verifyValue(response.data.casa_economia.egresos.vestimenta_egreso, null);
                formState.home_and_economy.outcome_recreational= verifyValue(response.data.casa_economia.egresos.diversion_egreso, null);
                formState.home_and_economy.outcome_other= verifyValue(response.data.casa_economia.egresos.otros_egreso, null);

                formState.diet.perceived_quality= verifyValue(response.data.alimentacion.calidad_percibida, formState.diet.perceived_quality);
                formState.diet.meals_per_day= verifyValue(response.data.alimentacion.comidas_al_dia, null);
                formState.diet.food_preparation= verifyValue(response.data.alimentacion.preparacion_alimentos, null);
                formState.diet.water_per_day= verifyValue(response.data.alimentacion.agua_al_dia, null);
                formState.diet.red_meat_week= verifyValue(response.data.alimentacion.carne_roja_semana, null);
                formState.diet.red_meat_month= verifyValue(response.data.alimentacion.carne_roja_mes, null);
                formState.diet.chicken_week= verifyValue(response.data.alimentacion.pollo_semana, null);
                formState.diet.chicken_month= verifyValue(response.data.alimentacion.pollo_mes, null);
                formState.diet.fish_week= verifyValue(response.data.alimentacion.pescado_semana, null);
                formState.diet.fish_month= verifyValue(response.data.alimentacion.pescado_mes, null);
                formState.diet.grain_week= verifyValue(response.data.alimentacion.granos_semana, null);
                formState.diet.grain_month= verifyValue(response.data.alimentacion.granos_mes, null);
                formState.diet.dairy_week= verifyValue(response.data.alimentacion.lacteos_semana, null);
                formState.diet.dairy_month= verifyValue(response.data.alimentacion.lacteos_mes, null);
                formState.diet.bread_week= verifyValue(response.data.alimentacion.pan_semana, null);
                formState.diet.bread_month= verifyValue(response.data.alimentacion.pan_mes, null);
                formState.diet.bread_pasta_week= verifyValue(response.data.alimentacion.bread_pasta_semana, null);
                formState.diet.bread_pasta_month= verifyValue(response.data.alimentacion.bread_pasta_mes, null);
                formState.diet.vegetables_fruits_week= verifyValue(response.data.alimentacion.verduras_frutas_semana, null);
                formState.diet.vegetables_fruits_month= verifyValue(response.data.alimentacion.verduras_frutas_mes, null);
                
                formState.hygiene_pass_physact.shower_frequency= verifyValue(response.data.higiene_act_fis_pasatiempo.frecuencia_duchas, null);
                formState.hygiene_pass_physact.toothbrushing_frequency= verifyValue(response.data.higiene_act_fis_pasatiempo.frecuencia_lavar_dientes, null);
                formState.hygiene_pass_physact.home_hygiene= verifyValue(response.data.higiene_act_fis_pasatiempo.higiene_hogar, null);
                formState.hygiene_pass_physact.phys_activity= verifyValue(response.data.higiene_act_fis_pasatiempo.actividad_fisica, null);
                formState.hygiene_pass_physact.passtime= verifyValue(response.data.higiene_act_fis_pasatiempo.pasatiempo, null);

                formState.others.how_found_out= verifyValue(response.data.otros.como_se_entero, null);
                formState.others.has_support_background= verifyValue(response.data.otros.antecedentes_apoyo.tiene_antecedente, null);
                formState.others.notes_support_background= verifyValue(response.data.otros.antecedentes_apoyo.notas, null);
                formState.others.observations= verifyValue(response.data.otros.observations, null);
                formState.others.social_plan= verifyValue(response.data.otros.plan_social, null);

                formState.others.socioeconomic_class_1= verifyValue(response.data.otros.clase_socioeconomica_1, null);
                formState.others.socioeconomic_class_2= verifyValue(response.data.otros.clase_socioeconomica_2, null);
                formState.others.socioeconomic_class_3= verifyValue(response.data.otros.clase_socioeconomica_3, null);

                formState.others.social_worker= verifyValue(response.data.otros.trabajador_social, null);
                formState.others.animals= verifyValue(response.data.otros.animales, null);
                formState.others.vaccinated_animals= verifyValue(response.data.otros.animales_vacunados, false);
                formState.others.ticks_animals= verifyValue(response.data.otros.animales_garrapatas, false);
                formState.others.diseases_animals= verifyValue(response.data.otros.animales_enfermedades, false);
                formState.others.vaccination_card= verifyValue(response.data.otros.cartilla_vacunacion, null);
                    
                formState.finished= true;
            }
        })
    }



    useEffect(() => {
        if(formState.patient_data.folio){
            getForm();
        }
        getCitas();
    }, []);

    let icon = formState.general_info.sex == "Femenino" ? Femenino : Masculino;

    
    return (
        <>

        <NavBar />

        <div className="info-pat">
            <div className="col-md-12 row">
                    <div className="col-lg-4">
                        <img width="250px" src={icon} />
                    </div>
                    <div className="col-lg-3">
                        <div className="patient-text-br"> {formState.general_info.name} </div>
                        <div className="patient-text">Nacimiento: {formState.general_info.birth_date} - Años: {formState.general_info.age}</div>
                        <br></br>
                        <div className="patient-text-br">Sangre:</div>
                        <div className="patient-text">{formState.general_info.blood_type}</div>
                        <br></br>
                        <div className="patient-text-br">Contacto de Emergencia:</div>
                        <div className="patient-text">{formState.general_info.emergency_contact_num} - {formState.general_info.emergency_contact_name}</div>
                        <br></br>
                        <div className="patient-text-br">Acude con Acompañante:</div>
                        <div className="form-row">
                            
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={formState.general_info.companion}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!formState.general_info.companion}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="patient-text-br">DX MÉDICO</div>
                        <div className="box">&ensp;{formState.general_info.medical_dx}</div>
                        
                        <br></br>
                        <div className="patient-text-br">Albergue:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={formState.general_info.shelter}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!formState.general_info.shelter}/>
                            </div>
                        </div>
                        <br></br>
                        <div className="patient-text-br">Quimioterapia:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={formState.general_info.quimio}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!formState.general_info.quimio}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>

        <p className="alertita col-md-12 center">{message}</p>

        <div
            onClick={() => setOpen(!open)}
            aria-controls="info-collapse-text"
            aria-expanded={open}
            className="col-md-10 btn-text active btn btn-custom2 text-left"
        >
            DATOS DEL PACIENTE
        </div>
        <Collapse in={open}>
            <div id="info-collapse-text" className="info-text">

                    <div
                    onClick={() => setOpen4(!open4)}
                    aria-controls="form1"
                    aria-expanded={open4}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    INFORMACIÓN GENERAL
                    </div>
                    <Collapse in={open4}>
                        <div id="form1" className="formulario">

                            <form className="info-form form-text-supra col-md-12">
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputEN" value={formState.patient_data.birth_state} placeholder="Entidad de Nacimiento" onChange={(e) => {
                                            updateFormState("patient_data", "birth_state",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCN" value={formState.patient_data.birth_city} placeholder="Ciudad de Nacimiento" onChange={(e) => {
                                            updateFormState("patient_data", "birth_city",e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div>Domicilio Permanente</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCDP" value={formState.patient_data.permanent_street}  placeholder="Calle" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_street",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNDP" value={formState.patient_data.permanent_num}  placeholder="Número" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_num",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColDP" value={formState.patient_data.permanent_suburb}  placeholder="Colonia" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_suburb",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalDP" value={formState.patient_data.permanent_locality}  placeholder="Localidad" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_locality",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunDP" value={formState.patient_data.permanent_municipality} placeholder="Municipio" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_municipality",e.target.value);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat" id="inputCPDP" value={formState.patient_data.permanent_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "permanent_zip_code",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1DP" value={formState.patient_data.permanent_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2DP" value={formState.patient_data.permanent_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone2",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                <br />
                                
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.email} placeholder="Correo Electrónico" onChange={(e) => {
                                        updateFormState("patient_data", "email",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.income} placeholder="Ingresos" onChange={(e) => {
                                        updateFormState("patient_data", "income",e.target.value);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.medical_service} placeholder="Servicio Médico" onChange={(e) => {
                                        updateFormState("patient_data", "medical_service",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.scholarship} placeholder="Escolaridad" onChange={(e) => {
                                        updateFormState("patient_data", "scholarship",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.ocupation} placeholder="Ocupación" onChange={(e) => {
                                        updateFormState("patient_data", "ocupation",e.target.value);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.religion} placeholder="Religión" onChange={(e) => {
                                        updateFormState("patient_data", "religion",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.civil_state} placeholder="Estado Civil" onChange={(e) => {
                                        updateFormState("patient_data", "civil_state",e.target.value);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">Realización Historial Clínico</div>
                                    <div className="form-group col-md-2">
                                        <input type="date" className="form-control form-pat" value={formState.patient_data.clinic_record_date} onChange={(e) => {
                                        updateFormState("patient_data", "clinic_record_date",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Domicilio Temporal</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalle" value={formState.patient_data.temp_street} placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "temp_street",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNum" value={formState.patient_data.temp_num} placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "temp_num",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCol" value={formState.patient_data.temp_suburb} placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "temp_suburb",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocal" value={formState.patient_data.temp_locality} placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "temp_locality",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMun" value={formState.patient_data.temp_municipality} placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "temp_municipality",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input className="form-control form-pat" id="inputCP" value={formState.patient_data.temp_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "temp_zip_code",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputTel1" value={formState.patient_data.temp_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2" value={formState.patient_data.temp_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone2",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Familia Responsable</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNombreFR" value={formState.patient_data.responsable_name} placeholder="Nombre del Responsable" onChange={(e) => {
                                            updateFormState("patient_data", "responsable_name",e.target.value);
                                        }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalleFR" value={formState.patient_data.responsable_street} placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_street",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNumFR" value={formState.patient_data.responsable_num} placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_num",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColFR" value={formState.patient_data.responsable_suburb} placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_suburb",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalFR" value={formState.patient_data.responsable_locality} placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_locality",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunFR" value={formState.patient_data.responsable_municipality} placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_municipality",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat" id="inputCPFR" value={formState.patient_data.responsable_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "responsable_zip_code",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1FR" value={formState.patient_data.responsable_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone",e.target.value);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2FR" value={formState.patient_data.responsable_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone2",e.target.value);
                                    }} />
                                    </div>
                                </div>
                                <div>Parentesco</div>
                                <div>
                                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" value={formState.patient_data.responsable_relationship} placeholder="Parentesco" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_relationship",e.target.value);
                                    }} />
                                </div>
                            </form>
                            <br/>
                        </div>
                    </Collapse>

                
                {/* Segunda Iteracion */}

                <SegundaIteracion />
                <br />

                {/* Tercera Iteracion */}

                <TerceraIteracion />
                <br />
                
                {/* Cuarta iteracion */}
                
                <CuartaIteracion />
                <br />

                {/* Quinta Iteracion */}

                <QuintaIteracion />
                <br />

                {/* Sexta Iteracion */}

                <SextaIteracion />
                <br />

                {/* Septima Iteracion */}

                <SeptimaIteracion />
                <br />

                {/* Octava Iteracion */}
                <OctavaIteracion />
                <br />

                {/* boton de enviar */}
                <div>
                    <button className="btn btn-custom btn-md btn-block col-md-2 btn-pat" onClick={handleSubmit}>
                        <b>Guardar Datos de Paciente</b>
                    </button>
                </div>
            </div>
        </Collapse>
        
        {/* Cajas de texto BACKEND CONECTARLAS */}
        <div
        onClick={() => setOpen1(!open1)}
        aria-controls="est-collapse-text"
        aria-expanded={open1}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            ESTUDIOS
        </div>
        <Collapse in={open1}>
        <div id="est-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    <textarea className="form-control form-pat" rows="6" value={formState.patient_data.studies}
                    onChange={(e) => {updateFormState("patient_data", "studies", e.target.value);}} 
                    ></textarea>
                    {/* boton de enviar */}
                    <div>
                        <button className="btn btn-custom btn-md btn-block col-md-2 btn-pat" onClick={handleSubmitStudies}>
                            <b>Guardar Estudios</b>
                        </button>
                    </div>
                </div>
            </div>
        </Collapse>

        <div
        onClick={() => setOpen2(!open2)}
        aria-controls="med-collapse-text"
        aria-expanded={open2}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            MEDICAMENTOS
        </div>
        <Collapse in={open2}>
        <div id="med-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    <textarea className="form-control form-pat" value={formState.patient_data.medicine} rows="6"
                    onChange={(e) => {updateFormState("patient_data", "medicine",e.target.value);}} 
                    ></textarea>
                    {/* boton de enviar */}
                    <div>
                        <button onClick={handleSubmitMedicine} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                            <b>Guardar Medicamentos</b>
                        </button>
                    </div>
                </div>
            </div>
        </Collapse>

        <div
        onClick={() => setOpen3(!open3)}
        aria-controls="cit-collapse-text"
        aria-expanded={open3}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            CITAS
        </div>
        <Collapse in={open3}>
        <div id="cit-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    
                    <p className="cita-text">Selecciona aquí la fecha para tu cita: </p>
                        <div className="form-group col-md-4" >
                                    
                                    <input style={{textAlign: "center"}} type="date" className="form-control form-pat" onChange={(e) => {
                                    updateFormState("patient_data", "appointments",e.target.value);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Selecciona aquí la hora para tu cita: </p>
                        <div className="form-group col-md-4" >
                                    
                                    <input style={{textAlign: "center"}} type="time" className="form-control form-pat" onChange={(e) => {
                                    updateFormState("patient_data", "appointments_time",e.target.value);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Ingresa aquí la descripción de la cita: </p>
                    <div className="col-md-12 row">
                            
                            
                        
                            <textarea className="form-control col-md-6 form-pat" rows="4"
                                onChange={(e) => {updateFormState("patient_data", "appointment_description",e.target.value);}} 
                            ></textarea>
                            <div className="horario col-md-6">
                                {/* <TablaHorario/> */}
                                <>
                                    <table className="table table-hover">
                                        <th className="thead-custom">
                                            Agenda
                                            </th>
                                            <tbody>
                                            <table className="table table-hover">
                                                <thead className="thead-custom">
                                                    <tr>
                                                        <th>Fecha</th>
                                                        <th>Hora</th>
                                                        <th>Descripción</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {citas.map((citas) => (
                                                            <tr key={citas._id.$_oid}>
                                                                <td>
                                                                    {moment.unix(citas.fecha.$date/999.95).format("MM/DD/YYYY")}
                                                                </td>
                                                                <td>
                                                                    {citas.hora} 
                                                                </td>
                                                                <td>
                                                                    {citas.descripcion}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                        </tbody>
                                    </table>
                                </>
                            </div>
                            
                        <br></br><br></br>
                    </div>
                    <div>
                        {/* boton de enviar */}
                    <div>
                        <button onClick={handleSubmitAppointment} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                            <b>Guardar Cita</b>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
                
        </Collapse>
        </> 
    );
}

export default Form;