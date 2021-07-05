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
            console.log(response.data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        var current_date = new Date();
        axios.post("./api/forms", {
            formState,
            date: current_date.getDate() + "/" + (current_date.getMonth()+1) + "/" + current_date.getFullYear() + " - " + current_date.getHours() + ":" + (current_date.getMinutes() < 10 ? '0' : '') + current_date.getMinutes()
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };

    const handleSubmitStudies = (e) => {
        e.preventDefault();
        axios.post("./api/studies", {
            studies: formState.patient_data.studies
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen1(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };

    const handleSubmitMedicine = (e) => {
        e.preventDefault();
        axios.post("./api/medicine", {
            medicine: formState.patient_data.medicine
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen2(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };

    const handelSubmitAppointment = (e) => {
        e.preventDefault();
        var appointments_json = {
            appointments: formState.patient_data.appointments,
            appointments_time: formState.patient_data.appointments_time,
            appointment_description: formState.patient_data.appointment_description,
            patient_folio: formState.patient_data.folio,
        }
        console.log(appointments_json)
        axios.post("./api/appointments", 
            appointments_json
        ).then((response) => {
            console.log(response);

            if(response.data.message) {
                setMessage(response.data.message);
                setOpen2(false);
            } else {
                setMessage("Ha sucedido algo :o");
            }
        });
    };

    const verifyValue = (value, ogValue) => { return typeof value != "undefined" ? value : ogValue }

    const getForm = () => {
        axios.get("./api/forms?folio=" + formState.patient_data.folio).then((response) => {

            if(response.status == 200){
                formState.patient_data.birth_state= verifyValue(response.data.datos_paciente.entidad_nacimiento, formState.patient_data.birth_state);
                formState.patient_data.birth_city= verifyValue(response.data.datos_paciente.ciudad_nacimiento, formState.patient_data.birth_city);
        
                formState.patient_data.permanent_street= verifyValue(response.data.datos_paciente.direccion_permanente.calle, formState.patient_data.permanent_street);
                formState.patient_data.permanent_num= verifyValue(response.data.datos_paciente.direccion_permanente.num, formState.patient_data.permanent_num); 
                formState.patient_data.permanent_suburb= verifyValue(response.data.datos_paciente.direccion_permanente.colonia, formState.patient_data.permanent_suburb);
                formState.patient_data.permanent_locality= verifyValue(response.data.datos_paciente.direccion_permanente.localidad, formState.patient_data.permanent_locality);
                formState.patient_data.permanent_municipality= verifyValue(response.data.datos_paciente.direccion_permanente.municipio, formState.patient_data.permanent_municipality);
                formState.patient_data.permanent_zip_code= verifyValue(response.data.datos_paciente.direccion_permanente.cp, formState.patient_data.permanent_zip_code);
                formState.patient_data.permanent_phone= verifyValue(response.data.datos_paciente.direccion_permanente.tel, formState.patient_data.permanent_phone);
                formState.patient_data.permanent_phone2= verifyValue(response.data.datos_paciente.direccion_permanente.tel2,formState.patient_data.permanent_phone2);
        
                formState.patient_data.email= verifyValue(response.data.datos_paciente.correo, formState.patient_data.email);
                formState.patient_data.income= verifyValue(response.data.datos_paciente.ingreso, formState.patient_data.income);
                formState.patient_data.medical_service= verifyValue(response.data.datos_paciente.servicio_medico, formState.patient_data.medical_service);
                formState.patient_data.scholarship= verifyValue(response.data.datos_paciente.escolaridad, formState.patient_data.scholarship);
                formState.patient_data.ocupation= verifyValue(response.data.datos_paciente.ocupacion, formState.patient_data.ocupation);
                formState.patient_data.religion= verifyValue(response.data.datos_paciente.religion, formState.patient_data.religion);
                formState.patient_data.civil_state= verifyValue(response.data.datos_paciente.estado_civil, formState.patient_data.civil_state);
        
                formState.patient_data.clinic_record_date= typeof response.data.datos_paciente.realizacion_historial_clinico != "undefined" ? moment.unix(response.data.datos_paciente.realizacion_historial_clinico.$date/999.95).format("yyyy-MM-DD"): formState.patient_data.clinic_record_date;
        
                formState.patient_data.temp_street= verifyValue(response.data.datos_paciente.direccion_temporal.calle, formState.patient_data.temp_street);
                formState.patient_data.temp_num= verifyValue(response.data.datos_paciente.direccion_temporal.num, formState.patient_data.temp_num);
                formState.patient_data.temp_suburb= verifyValue(response.data.datos_paciente.direccion_temporal.colonia, formState.patient_data.temp_suburb);
                formState.patient_data.temp_locality= verifyValue(response.data.datos_paciente.direccion_temporal.localidad, formState.patient_data.temp_locality);
                formState.patient_data.temp_municipality= verifyValue(response.data.datos_paciente.direccion_temporal.municipio, formState.patient_data.temp_municipality);
                formState.patient_data.temp_zip_code= verifyValue(response.data.datos_paciente.direccion_temporal.cp, formState.patient_data.temp_zip_code);
                formState.patient_data.temp_phone= verifyValue(response.data.datos_paciente.direccion_temporal.tel, formState.patient_data.temp_phone);
                formState.patient_data.temp_phone2= verifyValue(response.data.datos_paciente.direccion_temporal.tel2, formState.patient_data.temp_phone2);

                formState.patient_data.responsable_name= verifyValue(response.data.datos_paciente.familiar_responsable.nombre_responsable, formState.patient_data.responsable_name);
        
                formState.patient_data.responsable_street= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.calle, formState.patient_data.responsable_street);
                formState.patient_data.responsable_num= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.num, formState.patient_data.responsable_num);
                formState.patient_data.responsable_suburb= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.colonia, formState.patient_data.responsable_suburb);
                formState.patient_data.responsable_locality= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.localidad, formState.patient_data.responsable_locality);
                formState.patient_data.responsable_municipality= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.municipio, formState.patient_data.responsable_municipality);
                formState.patient_data.responsable_zip_code= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.cp, formState.patient_data.responsable_zip_code);
                formState.patient_data.responsable_phone= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.tel, formState.patient_data.responsable_phone);
                formState.patient_data.responsable_phone2= verifyValue(response.data.datos_paciente.familiar_responsable.direccion_responsable.tel2, formState.patient_data.responsable_phone2);
        
                formState.patient_data.responsable_relationship= verifyValue(response.data.datos_paciente.familiar_responsable.parentesco_responsable, formState.patient_data.responsable_relationship);
        
                formState.patient_data.chronic_degenerative_diseases= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_cronicodegenerativas, formState.patient_data.chronic_degenerative_diseases);
                formState.patient_data.infectious_contagious_diseases= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_infectocontagiosas, formState.patient_data.infectious_contagious_diseases);

                formState.patient_data.surgeries= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.tiene_antecedente, formState.patient_data.surgeries);
                formState.patient_data.surgeries_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.notas, formState.patient_data.surgeries_notes);
                
                formState.patient_data.jail= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.carcel.tiene_antecedente, formState.patient_data.jail);
                formState.patient_data.jail_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.carcel.notas, formState.patient_data.jail_notes);
                
                formState.patient_data.blood_transfusions= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.tiene_antecedente, formState.patient_data.blood_transfusions);
                formState.patient_data.blood_transfusions_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.notas, formState.patient_data.blood_transfusions_notes);
                
                formState.patient_data.allergies= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alergias.tiene_antecedente, formState.patient_data.allergies);
                formState.patient_data.allergies_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alergias.notas, formState.patient_data.allergies_notes);
                
                
                formState.patient_data.trauma= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.tiene_antecedente, formState.patient_data.trauma);
                formState.patient_data.trauma_notes= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.notas, formState.patient_data.trauma_notes);

                formState.patient_data.alcoholism_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.consumo, formState.patient_data.alcoholism_consumption);
                formState.patient_data.alcoholism_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.edad_inicio, formState.patient_data.alcoholism_starting_age);
                formState.patient_data.alcoholism_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.cantidad, formState.patient_data.alcoholism_quantity);
                formState.patient_data.alcoholism_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.frecuencia, formState.patient_data.alcoholism_frequency);
                formState.patient_data.alcoholism_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.ultimo_consumo, formState.patient_data.alcoholism_last_consumption);

                formState.patient_data.smoking_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.consumo, formState.patient_data.smoking_consumption);
                formState.patient_data.smoking_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.edad_inicio, formState.patient_data.smoking_starting_age);
                formState.patient_data.smoking_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.cantidad, formState.patient_data.smoking_quantity);
                formState.patient_data.smoking_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.frecuencia, formState.patient_data.smoking_frequency);
                formState.patient_data.smoking_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.ultimo_consumo, formState.patient_data.smoking_last_consumption);

                formState.patient_data.drug_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.consumo, formState.patient_data.drug_consumption);
                formState.patient_data.drug_starting_age= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.edad_inicio, formState.patient_data.drug_starting_age);
                formState.patient_data.drug_quantity= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.cantidad, formState.patient_data.drug_quantity);
                formState.patient_data.drug_frequency= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.frecuencia, formState.patient_data.drug_frequency);
                formState.patient_data.drug_last_consumption= verifyValue(response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.ultimo_consumo, formState.patient_data.drug_last_consumption);
        
                formState.patient_data.male_start_sexual_life= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.inicio_vida_sexual, formState.patient_data.male_start_sexual_life);
                formState.patient_data.male_sexual_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.parejas_sexuales, formState.patient_data.male_sexual_partners);
                formState.patient_data.male_std= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.ets, formState.patient_data.male_std);
                formState.patient_data.male_contraceptive_methods= verifyValue(response.data.datos_paciente.en_caso_de_ser_hombre.metodos_anticonceptivos, formState.patient_data.male_contraceptive_methods);
        
                formState.patient_data.female_menarche= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.menarca, formState.patient_data.female_menarche);
                formState.patient_data.female_menarche_age= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.edad_menarca, formState.patient_data.female_menarche_age);
                formState.patient_data.female_rhythm= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ritmo_menarca, formState.patient_data.female_rhythm);
                formState.patient_data.female_start_sexual_life= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.inicio_vida_sexual, formState.patient_data.female_start_sexual_life);
                formState.patient_data.female_high_risk_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.parejas_alto_riesgo, formState.patient_data.female_high_risk_partners);
                formState.patient_data.female_sexual_partners= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.parejas_sexuales, formState.patient_data.female_sexual_partners);

                formState.patient_data.female_std= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ets.tiene_antecedente, formState.patient_data.female_std);
                formState.patient_data.female_std_notes= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ets.notas, formState.patient_data.female_std_notes);
                
                formState.patient_data.female_gestations= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.gestas, formState.patient_data.female_gestations);
                formState.patient_data.female_deliveries= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.partos, formState.patient_data.female_deliveries);
                formState.patient_data.female_cesarean_births= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.cesareas, formState.patient_data.female_cesarean_births);
                formState.patient_data.female_abortions= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.abortos, formState.patient_data.female_abortions);

                formState.patient_data.female_date_last_delivery= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_date_last_delivery;
                
                formState.patient_data.female_age_first_pregnancy= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.edad_primer_embarazo, formState.patient_data.female_age_first_pregnancy);
                formState.patient_data.female_family_planning_methods= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.metodos_planificacion_familiar, formState.patient_data.female_family_planning_methods);

                formState.patient_data.female_date_last_menstruation= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_date_last_menstruation;


                formState.patient_data.female_menopause= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.menopausia, formState.patient_data.female_menopause);
                formState.patient_data.female_hormonal_therapy= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.terapia_remplazo_hormonal, formState.patient_data.female_hormonal_therapy);
                formState.patient_data.female_breastfeeding= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.lactancia_materna, formState.patient_data.female_breastfeeding);

                formState.patient_data.female_last_pap_smear= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_last_pap_smear;

                formState.patient_data.female_last_pap_smear_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.resultado, formState.patient_data.female_last_pap_smear_result);
                
                formState.patient_data.female_last_hybrid_test= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_last_hybrid_test;
                formState.patient_data.female_last_hybrid_test_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.resultado, formState.patient_data.female_last_hybrid_test_result);
                
                formState.patient_data.female_last_mammography= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_last_mammography;
                formState.patient_data.female_last_mammography_result= verifyValue(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.resultado, formState.patient_data.female_last_mammography_result);
        
        
                /*Cambios coloracion*/
                formState.patient_data.skin_paleness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.palidez, formState.patient_data.skin_paleness);
                formState.patient_data.skin_icterus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.ictericia, formState.patient_data.skin_icterus);
                formState.patient_data.skin_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.cianosis, formState.patient_data.skin_cyanosis);
        
                formState.patient_data.skin_eruptions= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.erupciones, formState.patient_data.skin_eruptions);
                formState.patient_data.skin_spots= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.manchas, formState.patient_data.skin_spots);
                formState.patient_data.skin_pruritus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.prurito, formState.patient_data.skin_pruritus);
                formState.patient_data.skin_dryness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.sequedad, formState.patient_data.skin_dryness);
                formState.patient_data.skin_volume_increase= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.aumento_volumen, formState.patient_data.skin_volume_increase);
                formState.patient_data.skin_nails_hair= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.unas_pelo, formState.patient_data.skin_nails_hair);
                formState.patient_data.skin_nodules= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.nodulos, formState.patient_data.skin_nodules);
                formState.patient_data.skin_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.piel.observaciones, formState.patient_data.skin_observations);
        
                /*Cambios vision*/
                formState.patient_data.ophthalmic_diplopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.diplopia, formState.patient_data.ophthalmic_diplopia);
                formState.patient_data.ophthalmic_eye_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.dolor_ocular, formState.patient_data.ophthalmic_eye_pain);
                formState.patient_data.ophthalmic_photophobia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotofobia, formState.patient_data.ophthalmic_photophobia);
                formState.patient_data.ophthalmic_amaurosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.amaurosis, formState.patient_data.ophthalmic_amaurosis);
                formState.patient_data.ophthalmic_photopsies= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotopsias, formState.patient_data.ophthalmic_photopsies);
                formState.patient_data.ophthalmic_myodesopsias= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miodesopsias, formState.patient_data.ophthalmic_myodesopsias);
                formState.patient_data.ophthalmic_scotomas= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.scotomas, formState.patient_data.ophthalmic_scotomas);
                formState.patient_data.ophthalmic_hemeralopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.hemeralopia, formState.patient_data.hemeralopia);
                formState.patient_data.ophthalmic_nyctalopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.nictalopia, formState.patient_data.ophthalmic_nyctalopia);
        
                /*Uso de lentes*/
                formState.patient_data.ophthalmic_myopia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miopia, formState.patient_data.ophthalmic_myopia);
                formState.patient_data.ophthalmic_astigmatism= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.astigmatismo,formState.patient_data.ophthalmic_astigmatism);
        
                formState.patient_data.ophthalmic_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.observaciones, formState.patient_data.ophthalmic_observations);
        
                /*Cambios en la audicion*/
                formState.patient_data.ent_otalgia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.otalgia, formState.patient_data.ent_otalgia);
                formState.patient_data.ent_algiacusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.algiacusia, formState.patient_data.ent_algiacusis);
                formState.patient_data.ent_presbycusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.presbiacusia, formState.patient_data.ent_presbycusis);
                formState.patient_data.ent_anacusis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.anacusia, formState.patient_data.ent_anacusis);
                formState.patient_data.ent_tinnitus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.tinnitus, formState.patient_data.ent_tinnitus);
                formState.patient_data.ent_ear_ringing= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.acufenos, formState.patient_data.ent_ear_ringing);
                formState.patient_data.ent_hearing_loss= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.hipoacusia, formState.patient_data.ent_hearing_loss);
        
                formState.patient_data.ent_ear_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_oido, formState.patient_data.ent_ear_pain);
                formState.patient_data.ent_vertigo= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.vertigo, formState.patient_data.ent_vertigo);
                formState.patient_data.ent_fluid_leaking_ear= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_oido, formState.patient_data.ent_fluid_leaking_ear);
                formState.patient_data.ent_smelling_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.cambios_olfato, formState.patient_data.ent_smelling_changes);
                formState.patient_data.ent_fluid_leaking_nose= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_nariz, formState.patient_data.ent_fluid_leaking_ear);
                formState.patient_data.ent_nose_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_nariz, formState.patient_data.ent_nose_pain);
                formState.patient_data.ent_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.observaciones, formState.patient_data.ent_observations);
        
                /*Dientes*/
                formState.patient_data.mouth_throat_cavities= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.caries, formState.patient_data.mouth_throat_cavities);
                formState.patient_data.mouth_throat_dental_agenesis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.agenesia_dental, formState.patient_data.mouth_throat_dental_agenesis);
                formState.patient_data.mouth_throat_prothesis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dientes_protesis, formState.patient_data.mouth_throat_prothesis);
        
                /*Encias */
                formState.patient_data.mouth_throat_gingivorrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorrea, formState.patient_data.mouth_throat_gingivorrhea);
                formState.patient_data.mouth_throat_gingivorrhagia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorragia, formState.patient_data.mouth_throat_gingivorrhagia);
                formState.patient_data.mouth_throat_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_dolor_encias, formState.patient_data.mouth_throat_pain);
                formState.patient_data.mouth_throat_gums_ulcerations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_ulceras, formState.patient_data.mouth_throat_gums_ulcerations);
        
                /*Lengua*/
                formState.patient_data.mouth_throat_colorations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_coloraciones, formState.patient_data.mouth_throat_colorations);
                formState.patient_data.mouth_throat_size= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_tamaño, formState.patient_data.mouth_throat_size);
                formState.patient_data.mouth_throat_plaque_presence= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_presencia_placa, formState.patient_data.mouth_throat_plaque_presence);
                formState.patient_data.mouth_throat_tongue_ulcerations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_ulceras, formState.patient_data.mouth_throat_tongue_ulcerations);
        
                /*Problemas de hablar*/
                formState.patient_data.mouth_throat_dysphonia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.disfonia, formState.patient_data.mouth_throat_dysphonia);
                formState.patient_data.mouth_throat_aphonia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.afonia, formState.patient_data.mouth_throat_aphonia);
        
                formState.patient_data.mouth_throat_thirst= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.sed, formState.patient_data.mouth_throat_thirst);
                formState.patient_data.mouth_throat_speaking_eating_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dolor_comer_hablar, formState.patient_data.mouth_throat_speaking_eating_pain);
                formState.patient_data.mouth_throat_bad_breath= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.mal_aliento, formState.patient_data.mouth_throat_bad_breath);
                formState.patient_data.mouth_throat_excess_salivation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.exceso_salivacion, formState.patient_data.mouth_throat_excess_salivation);
                formState.patient_data.mouth_throat_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.observaciones, formState.patient_data.mouth_throat_observations);
        
                formState.patient_data.digestive_apettite_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.cambio_apetito, formState.patient_data.digestive_apettite_changes);
                formState.patient_data.digestive_sickness_vomit= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.nauseas_vomito, formState.patient_data.digestive_sickness_vomit);
                formState.patient_data.digestive_abdominal_distention= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.distension_abdominal, formState.patient_data.digestive_abdominal_distention);
        
                /*Esofago*/
                formState.patient_data.digestive_abdominal_gastralgia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.gastralgia, formState.patient_data.digestive_abdominal_gastralgia);
                formState.patient_data.digestive_abdominal_acidity= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acidez, formState.patient_data.digestive_abdominal_acidity);
                formState.patient_data.digestive_abdominal_postrandial_fullness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.llenura_postprandial, formState.patient_data.digestive_abdominal_postrandial_fullness);
        
                /*Cambios de evacuacion*/
                formState.patient_data.digestive_abdominal_tenesmus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.tenesmo, formState.patient_data.digestive_abdominal_tenesmus);
                formState.patient_data.digestive_abdominal_bids= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.pujos, formState.patient_data.digestive_abdominal_bids);
                formState.patient_data.digestive_abdominal_encopresis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.encopresis, formState.patient_data.digestive_abdominal_encopresis);
                formState.patient_data.digestive_abdominal_anal_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_anal, formState.patient_data.digestive_abdominal_anal_pain);
                formState.patient_data.digestive_abdominal_constipation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.constipacion, formState.patient_data.digestive_abdominal_constipation);
                formState.patient_data.digestive_abdominal_rectal_bleeding= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.rectorragia, formState.patient_data.digestive_abdominal_rectal_bleeding);
                formState.patient_data.digestive_abdominal_hematochezia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.hematoquecia, formState.patient_data.digestive_abdominal_hematochezia);
        
                /*Higado y vias biliares*/
                formState.patient_data.digestive_abdominal_jaundice= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ictericia, formState.patient_data.digestive_abdominal_jaundice);
                formState.patient_data.digestive_abdominal_pruritus= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.prurito, formState.patient_data.digestive_abdominal_pruritus);
                formState.patient_data.digestive_abdominal_fever= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ulcerations, formState.patient_data.digestive_abdominal_fever);
                formState.patient_data.digestive_abdominal_ascites= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ascitis, formState.patient_data.digestive_abdominal_ascites);
                formState.patient_data.digestive_abdominal_biliary_colic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_biliar, formState.patient_data.digestive_abdominal_biliary_colic);
                formState.patient_data.digestive_abdominal_hepatic_colic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_epatitico, formState.patient_data.digestive_abdominal_hepatic_colic);
                formState.patient_data.digestive_abdominal_acholia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acolia, formState.patient_data.digestive_abdominal_acholia);
        
                /*Pancreas*/
                formState.patient_data.digestive_abdominal_steatorrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.esteatorrea, formState.patient_data.digestive_abdominal_steatorrhea);
                formState.patient_data.digestive_abdominal_diarrhea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.diarrea, formState.patient_data.digestive_abdominal_diarrhea);
                formState.patient_data.digestive_abdominal_hypersalivation= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.sialorrea, formState.patient_data.digestive_abdominal_hypersalivation);
                formState.patient_data.digestive_abdominal_abdominal_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_abdomen, formState.patient_data.digestive_abdominal_abdominal_pain);
                formState.patient_data.digestive_abdominal_back_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_espalda, formState.patient_data.digestive_abdominal_back_pain);
        
                formState.patient_data.digestive_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.observaciones, formState.patient_data.digestive_observations);
        
                formState.patient_data.respiratory_cough= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.tos, formState.patient_data.respiratory_cough);
                formState.patient_data.respiratory_chest_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.dolor_toracico, formState.patient_data.respiratory_chest_pain);
                formState.patient_data.respiratory_hemoptysis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.hemoptisis, formState.patient_data.respiratory_hemoptysis);
                formState.patient_data.respiratory_vomiting_cough= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.vomica, formState.patient_data.respiratory_cough);
                formState.patient_data.respiratory_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cianosis, formState.patient_data.respiratory_cyanosis);
                formState.patient_data.respiratory_fatigue= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.fatiga, formState.patient_data.respiratory_fatigue);
                formState.patient_data.respiratory_breathing_problems= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.problemas_respirar, formState.patient_data.respiratory_breathing_problems);
                formState.patient_data.respiratory_breathing_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cambios_respiracion, formState.patient_data.respiratory_breathing_changes);
                formState.patient_data.respiratory_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.observaciones, formState.patient_data.respiratory_observations);
        
                formState.patient_data.cardiovascular_dyspnoea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.disnea, formState.patient_data.cardiovascular_dyspnoea);
                formState.patient_data.cardiovascular_orthopnea= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.ortopnea, formState.patient_data.cardiovascular_orthopnea);
                formState.patient_data.cardiovascular_lipothymia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.lipotimia, formState.patient_data.cardiovascular_lipothymia);
                formState.patient_data.cardiovascular_syncope= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.sincope, formState.patient_data.cardiovascular_syncope);
                formState.patient_data.cardiovascular_edema= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.edema, formState.patient_data.cardiovascular_edema);
                formState.patient_data.cardiovascular_cyanosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.cianosis, formState.patient_data.cardiovascular_cyanosis);
                formState.patient_data.cardiovascular_chest_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.color_toracico, formState.patient_data.cardiovascular_chest_pain);
                formState.patient_data.cardiovascular_palpitations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.palpitaciones, formState.patient_data.cardiovascular_palpitations);
                formState.patient_data.cardiovascular_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.observaciones, formState.patient_data.cardiovascular_observations);
        
                formState.patient_data.genitourinary_urinating_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_miccionar, formState.patient_data.genitourinary_urinating_changes);
                formState.patient_data.genitourinary_urinating_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dolor_miccionar, formState.patient_data.genitourinary_urinating_pain);
                formState.patient_data.genitourinary_urinating_difficulty = verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dificultad_miccionar, formState.patient_data.genitourinary_urinating_difficulty);
                formState.patient_data.genitourinary_jet_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_chorro, formState.patient_data.genitourinary_jet_changes);
                formState.patient_data.genitourinary_menstruation_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_menstruacion, formState.patient_data.genitourinary_menstruation_changes);
                formState.patient_data.genitourinary_dyspareunia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dispareunia, formState.patient_data.genitourinary_dyspareunia);
                formState.patient_data.genitourinary_libido_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_libido, formState.patient_data.genitourinary_libido_changes);
                formState.patient_data.genitourinary_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.observaciones, formState.patient_data.genitourinary_observations);
        
                formState.patient_data.musculoskeletal_muscle_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_muscular, formState.patient_data.musculoskeletal_muscle_pain);
                formState.patient_data.musculoskeletal_joint_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_articular, formState.patient_data.musculoskeletal_joint_pain);
                formState.patient_data.musculoskeletal_joint_stiffness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.rigidez_articular, formState.patient_data.musculoskeletal_joint_stiffness);
                formState.patient_data.musculoskeletal_nodules= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.nodulos, formState.patient_data.musculoskeletal_nodules);
                formState.patient_data.musculoskeletal_bone_pain= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_osea, formState.patient_data.musculoskeletal_bone_pain);
                formState.patient_data.musculoskeletal_ambulation_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.cambios_deambulacion, formState.patient_data.musculoskeletal_ambulation_changes);
                formState.patient_data.musculoskeletal_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.observaciones, formState.patient_data.musculoskeletal_observations);
        
                formState.patient_data.hematological_weakness= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.debilidad, formState.patient_data.hematological_weakness);
                formState.patient_data.hematological_color_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.cambios_coloracion, formState.patient_data.hematological_color_changes);
                formState.patient_data.hematological_bleeding= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hemorragias, formState.patient_data.hematological_bleeding);
                formState.patient_data.hematological_petechiae= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.petequias, formState.patient_data.hematological_petechiae);
                formState.patient_data.hematological_ecchymosis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.equimosis, formState.patient_data.hematological_ecchymosis);
                formState.patient_data.hematological_bruises= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hematomas, formState.patient_data.hematological_bruises);
                formState.patient_data.hematological_lymphadenopathy= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.adenopatias, formState.patient_data.hematological_lymphadenopathy);
                formState.patient_data.hematological_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.observaciones, formState.patient_data.hematological_observations);
            
                formState.patient_data.nervous_headache= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cefalea, formState.patient_data.nervous_headache);
                formState.patient_data.nervous_seizures= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.convulsiones, formState.patient_data.nervous_seizures);
                formState.patient_data.nervous_memory_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_memoria, formState.patient_data.nervous_memory_changes);
                formState.patient_data.nervous_sphincters_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_esfinteres, formState.patient_data.nervous_sphincters_changes);
                formState.patient_data.nervous_loss_of_feeling= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_sensacion, formState.patient_data.nervous_loss_of_feeling);
                formState.patient_data.nervous_loss_of_movement= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_movimiento, formState.patient_data.nervous_loss_of_movement);
                formState.patient_data.nervous_loss_of_balance= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_equilibrio, formState.patient_data.nervous_loss_of_balance);
                formState.patient_data.nervous_language_disorders= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.trastornos_lenguaje, formState.patient_data.nervous_language_disorders);
                formState.patient_data.nervous_gait_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_marcha, formState.patient_data.nervous_gait_changes);
                formState.patient_data.nervous_tremors= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.temblores, formState.patient_data.nervous_tremors);
                formState.patient_data.nervous_paralysis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paralisis, formState.patient_data.nervous_paralysis);
                formState.patient_data.nervous_parasthesia= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.parestesias, formState.patient_data.nervous_parasthesia);
                formState.patient_data.nervous_paresis= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paresias, formState.patient_data.nervous_paresis);
                formState.patient_data.nervous_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.observaciones, formState.patient_data.nervous_observations);
            
                formState.patient_data.psychic_distress= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.angustia, formState.patient_data.psychic_distress);
                formState.patient_data.psychic_depression= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.depresion, formState.patient_data.psychic_depression);
                formState.patient_data.psychic_interest_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.cambios_interes, formState.patient_data.psychic_interest_changes);
                formState.patient_data.psychic_guilt= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.culpa, formState.patient_data.psychic_guilt);
                formState.patient_data.psychic_suicidal_thoughts= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.ideas_suicidas, formState.patient_data.psychic_suicidal_thoughts);
                formState.patient_data.psychic_hallucinations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.alucinaciones, formState.patient_data.psychic_hallucinations);
                formState.patient_data.psychic_delirium= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.delirio, formState.patient_data.psychic_delirium);
                formState.patient_data.psychic_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.observaciones, formState.patient_data.psychic_observations);
            
                formState.patient_data.physical_observations= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.observaciones_exploracion_fisica, formState.patient_data.physical_observations);
            
                formState.patient_data.follow_up_treatment_changes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.tiene_antecedente, formState.patient_data.follow_up_treatment_changes);
                formState.patient_data.follow_up_treatment_changes_notes= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.notas, formState.patient_data.follow_up_treatment_changes_notes);
                formState.patient_data.follow_up_actual_symptoms= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.sintomas_actuales, formState.patient_data.follow_up_actual_symptoms);
                formState.patient_data.follow_up_last_medication_efects= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.efectos_ultima_administracion_medicamentos, formState.patient_data.follow_up_last_medication_efects);
                formState.patient_data.follow_up_psychology_follow_up= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.seguimiento_psicologico, formState.patient_data.follow_up_psychology_follow_up);
                formState.patient_data.follow_up_actual_diagnostic= verifyValue(response.data.datos_paciente.aparatos_y_sistemas.seguimiento.diagnostico_actual, formState.patient_data.follow_up_actual_diagnostic);

                formState.family_data.first_member_name= verifyValue(response.data.datos_familia.estructura_familiar.primer_nombre_familiar, formState.family_data.first_member_name);
                formState.family_data.first_member_age= verifyValue(response.data.datos_familia.estructura_familiar.primera_edad_familiar, formState.family_data.first_member_age);
                formState.family_data.first_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.primer_parentesco_familiar, formState.family_data.first_member_relationship);
                formState.family_data.first_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.primer_estado_civil_familiar, formState.family_data.first_member_civil_state);
                formState.family_data.first_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.primer_ocupacion_familiar, formState.family_data.first_member_ocupation);
                formState.family_data.first_member_income= verifyValue(response.data.datos_familia.estructura_familiar.primer_ingreso_familiar, formState.family_data.first_member_income);
        
                formState.family_data.second_member_name= verifyValue(response.data.datos_familia.estructura_familiar.segundo_nombre_familiar, formState.family_data.second_member_name);
                formState.family_data.second_member_age= verifyValue(response.data.datos_familia.estructura_familiar.segunda_edad_familiar, formState.family_data.second_member_age);
                formState.family_data.second_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.segundo_parentesco_familiar, formState.family_data.second_member_relationship);
                formState.family_data.second_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.segundo_estado_civil_familiar, formState.family_data.second_member_civil_state);
                formState.family_data.second_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.segundo_ocupacion_familiar, formState.family_data.second_member_ocupation);
                formState.family_data.second_member_income= verifyValue(response.data.datos_familia.estructura_familiar.segundo_ingreso_familiar, formState.family_data.second_member_income);
        
                formState.family_data.third_member_name= verifyValue(response.data.datos_familia.estructura_familiar.tercer_nombre_familiar, formState.family_data.third_member_name);
                formState.family_data.third_member_age= verifyValue(response.data.datos_familia.estructura_familiar.tercera_edad_familiar, formState.family_data.third_member_age);
                formState.family_data.third_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.tercer_parentesco_familiar, formState.family_data.third_member_relationship);
                formState.family_data.third_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.tercer_estado_civil_familiar, formState.family_data.third_member_civil_state);
                formState.family_data.third_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.tercer_ocupacion_familiar, formState.family_data.third_member_ocupation);
                formState.family_data.third_member_income= verifyValue(response.data.datos_familia.estructura_familiar.tercer_ingreso_familiar, formState.family_data.third_member_income);
        
                formState.family_data.fourth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_nombre_familiar, formState.family_data.fourth_member_name);
                formState.family_data.fourth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.cuarta_edad_familiar, formState.family_data.fourth_member_age);
                formState.family_data.fourth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_parentesco_familiar, formState.family_data.fourth_member_relationship);
                formState.family_data.fourth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_estado_civil_familiar, formState.family_data.fourth_member_civil_state);
                formState.family_data.fourth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_ocupacion_familiar, formState.family_data.fourth_member_ocupation);
                formState.family_data.fourth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.cuarto_ingreso_familiar, formState.family_data.fourth_member_income);
        
                formState.family_data.fifth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.quinto_nombre_familiar, formState.family_data.fifth_member_name);
                formState.family_data.fifth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.quinta_edad_familiar, formState.family_data.fifth_member_age);
                formState.family_data.fifth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.quinto_parentesco_familiar, formState.family_data.fifth_member_relationship);
                formState.family_data.fifth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.quinto_estado_civil_familiar, formState.family_data.fifth_member_civil_state);
                formState.family_data.fifth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.quinto_ocupacion_familiar, formState.family_data.fifth_member_ocupation);
                formState.family_data.fifth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.quinto_ingreso_familiar, formState.family_data.fifth_member_income);
        
                formState.family_data.sixth_member_name= verifyValue(response.data.datos_familia.estructura_familiar.sexto_nombre_familiar, formState.family_data.sixth_member_name);
                formState.family_data.sixth_member_age= verifyValue(response.data.datos_familia.estructura_familiar.sexta_edad_familiar, formState.family_data.sixth_member_age);
                formState.family_data.sixth_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.sexto_parentesco_familiar, formState.family_data.sixth_member_relationship);
                formState.family_data.sixth_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.sexto_estado_civil_familiar, formState.family_data.sixth_member_civil_state);
                formState.family_data.sixth_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.sexto_ocupacion_familiar, formState.family_data.sixth_member_ocupation);
                formState.family_data.sixth_member_income= verifyValue(response.data.datos_familia.estructura_familiar.sexto_ingreso_familiar, formState.family_data.sixth_member_income);
        
                formState.family_data.seventh_member_name= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_nombre_familiar, formState.family_data.seventh_member_name);
                formState.family_data.seventh_member_age= verifyValue(response.data.datos_familia.estructura_familiar.séptima_edad_familiar, formState.family_data.seventh_member_age);
                formState.family_data.seventh_member_relationship= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_parentesco_familiar, formState.family_data.seventh_member_relationship);
                formState.family_data.seventh_member_civil_state= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_estado_civil_familiar, formState.family_data.seventh_member_civil_state);
                formState.family_data.seventh_member_ocupation= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_ocupacion_familiar, formState.family_data.seventh_member_ocupation);
                formState.family_data.seventh_member_income= verifyValue(response.data.datos_familia.estructura_familiar.séptimo_ingreso_familiar, formState.family_data.seventh_member_income);
        
                formState.family_data.paternal_grandfather_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.vive, formState.family_data.paternal_grandfather_living);
                formState.family_data.paternal_grandfather_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.enfermedades, formState.family_data.paternal_grandfather_diseases);
                formState.family_data.paternal_grandfather_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_paterno.causa_defuncion, formState.family_data.paternal_grandfather_cause_of_death);
        
                formState.family_data.paternal_grandmother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.vive, formState.family_data.paternal_grandmother_living);
                formState.family_data.paternal_grandmother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.enfermedades, formState.family_data.paternal_grandmother_diseases);
                formState.family_data.paternal_grandmother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_paterna.causa_defuncion, formState.family_data.paternal_grandmother_cause_of_death);
        
                formState.family_data.maternal_grandfather_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.vive, formState.family_data.maternal_grandfather_living);
                formState.family_data.maternal_grandfather_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.enfermedades, formState.family_data.maternal_grandfather_diseases);
                formState.family_data.maternal_grandfather_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuelo_materno.causa_defuncion, formState.family_data.maternal_grandfather_cause_of_death);
        
                formState.family_data.maternal_grandmother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.vive, formState.family_data.maternal_grandmother_living);
                formState.family_data.maternal_grandmother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.enfermedades, formState.family_data.maternal_grandmother_diseases);
                formState.family_data.maternal_grandmother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.abuela_materna.causa_defuncion, formState.family_data.maternal_grandmother_cause_of_death);
        
                formState.family_data.father_living= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.vive, formState.family_data.father_living);
                formState.family_data.father_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.enfermedades, formState.family_data.father_diseases);
                formState.family_data.father_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.padre.causa_defuncion, formState.family_data.father_cause_of_death);
        
                formState.family_data.mother_living= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.vive, formState.family_data.mother_living);
                formState.family_data.mother_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.enfermedades, formState.family_data.mother_diseases);
                formState.family_data.mother_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.madre.causa_defuncion, formState.family_data.mother_cause_of_death);
        
                formState.family_data.siblings_quantity= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.cantidad, formState.family_data.siblings_quantity);
                formState.family_data.siblings_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.enfermedades, formState.family_data.siblings_diseases);
                formState.family_data.siblings_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.hermanos.causa_defuncion, formState.family_data.siblings_cause_of_death);
        
                formState.family_data.sons_quantity= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.cantidad, formState.family_data.sons_quantity);
                formState.family_data.sons_diseases= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.enfermedades, formState.family_data.sons_diseases);
                formState.family_data.sons_cause_of_death= verifyValue(response.data.datos_familia.antecedentes_familiares.hijos.causa_defuncion, formState.family_data.sons_cause_of_death);
        
                formState.family_data.number_sicks= verifyValue(response.data.datos_familia.numero_de_enfermos, formState.family_data.number_sicks);
        
                formState.family_data.household_member_substance= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.consume_miembro_vivienda, formState.family_data.household_member_substance);
                
                formState.family_data.substance_alcohol= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.alcohol, formState.family_data.substance_alcohol);
                formState.family_data.substance_glue= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.resistol, formState.family_data.substance_glue);
                formState.family_data.substance_cocaine= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cocaina, formState.family_data.substance_cocaine);
                formState.family_data.substance_tobacco= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.tabaco, formState.family_data.substance_tobacco);
                formState.family_data.substance_marijuana= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.marihuana, formState.family_data.substance_marijuana);
                formState.family_data.substance_tablets= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.pastillas, formState.family_data.substance_tablets);
                formState.family_data.substance_metamphetamine= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cristal, formState.family_data.substance_metamphetamine);
                formState.family_data.substance_others= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.otros, formState.family_data.substance_others);
                
                formState.family_data.consuming_father= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_padre, formState.family_data.consuming_father);
                formState.family_data.consuming_mother= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_madre, formState.family_data.consuming_mother);
                formState.family_data.consuming_tutor= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tutor, formState.family_data.consuming_tutor);
                formState.family_data.consuming_son= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_hijo, formState.family_data.consuming_son);
                formState.family_data.consuming_spouse= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_cónyuge, formState.family_data.consuming_spouse);
                formState.family_data.consuming_uncle= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tío, formState.family_data.consuming_uncle);
                formState.family_data.consuming_grandparent= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_abuelo, formState.family_data.consuming_grandparent);
                formState.family_data.consuming_others= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_otro, formState.family_data.consuming_others);

                formState.family_data.consuming_frequency= verifyValue(response.data.datos_familia.consume_sustancias_toxicas.frecuencia_consumo, formState.family_data.consuming_frequency)

                formState.home_and_economy.place_type= verifyValue(response.data.casa_economia.vivienda.tipo_vivienda, formState.home_and_economy.place_type);
                formState.home_and_economy.place_services= verifyValue(response.data.casa_economia.vivienda.servicios_vivienda, formState.home_and_economy.place_services);
                formState.home_and_economy.place_material= verifyValue(response.data.casa_economia.vivienda.material_vivienda, formState.home_and_economy.place_material);
                
                formState.home_and_economy.place_kitchen= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.cocina, formState.home_and_economy.place_kitchen);
                formState.home_and_economy.place_lounge= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.sala, formState.home_and_economy.place_lounge);
                formState.home_and_economy.place_dining_room= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.comedor, formState.home_and_economy.place_dining_room);
                formState.home_and_economy.place_bedroom= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.recámara, formState.home_and_economy.place_bedroom);
                formState.home_and_economy.place_bedroom_quantity= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.cantidad_de_recámaras, formState.home_and_economy.place_bedroom_quantity);
                formState.home_and_economy.place_others= verifyValue(response.data.casa_economia.vivienda.distribucion_vivienda.otros_cuartos, formState.home_and_economy.place_others);
                
                formState.home_and_economy.place_person_per_room= verifyValue(response.data.casa_economia.vivienda.personas_por_cuarto_vivienda, formState.home_and_economy.place_person_per_room);
                formState.home_and_economy.place_location= verifyValue(response.data.casa_economia.vivienda.zona_vivienda, formState.home_and_economy.place_location);

                formState.home_and_economy.place_dust= verifyValue(response.data.casa_economia.vivienda.polvo, formState.home_and_economy.place_place_dust);
                formState.home_and_economy.place_wood_smoke= verifyValue(response.data.casa_economia.vivienda.humo_leña, formState.home_and_economy.place_wood_smoke);
                formState.home_and_economy.place_others_exposition= verifyValue(response.data.casa_economia.vivienda.otros, formState.home_and_economy.place_others_exposition);
            
                formState.home_and_economy.electrodomestics= verifyValue(response.data.casa_economia.bienes_hogar.electrodomesticos, formState.home_and_economy.electrodomestics);
                formState.home_and_economy.air_conditioner= verifyValue(response.data.casa_economia.bienes_hogar.refrigeracion, formState.home_and_economy.air_conditioner);
            
                formState.home_and_economy.transportation= verifyValue(response.data.casa_economia.transporte_familiar.transporte, formState.home_and_economy.transportation);
                formState.home_and_economy.car_brand= verifyValue(response.data.casa_economia.transporte_familiar.marca_auto, formState.home_and_economy.car_brand);
                formState.home_and_economy.car_model= verifyValue(response.data.casa_economia.transporte_familiar.modelo_auto, formState.home_and_economy.car_model);
            
                formState.home_and_economy.geographic_area= verifyValue(response.data.casa_economia.area_geografica, formState.home_and_economy.geographic_area);
            
                formState.home_and_economy.sick_members= verifyValue(response.data.casa_economia.familiares_enfermos, formState.home_and_economy.sick_members);
            
                formState.home_and_economy.outcome_electric_power= verifyValue(response.data.casa_economia.egresos.energia_electrica_egreso, formState.home_and_economy.outcome_electric_power);
                formState.home_and_economy.outcome_water= verifyValue(response.data.casa_economia.egresos.agua_egreso, formState.home_and_economy.outcome_water);
                formState.home_and_economy.outcome_gas= verifyValue(response.data.casa_economia.egresos.gas_egreso, formState.home_and_economy.outcome_gas);
                formState.home_and_economy.outcome_phone= verifyValue(response.data.casa_economia.egresos.telefono_egreso, formState.home_and_economy.outcome_phone);
                formState.home_and_economy.outcome_food= verifyValue(response.data.casa_economia.egresos.alimentos_egreso, formState.home_and_economy.outcome_food);
                formState.home_and_economy.outcome_rent= verifyValue(response.data.casa_economia.egresos.renta_egreso, formState.home_and_economy.outcome_rent);
                formState.home_and_economy.outcome_transportation= verifyValue(response.data.casa_economia.egresos.transporte_egreso, formState.home_and_economy.outcome_transportation);
                formState.home_and_economy.outcome_education= verifyValue(response.data.casa_economia.egresos.educacion_egreso, formState.home_and_economy.outcome_education);
                formState.home_and_economy.outcome_clothing= verifyValue(response.data.casa_economia.egresos.vestimenta_egreso, formState.home_and_economy.outcome_clothing);
                formState.home_and_economy.outcome_recreational= verifyValue(response.data.casa_economia.egresos.diversion_egreso, formState.home_and_economy.outcome_recreational);
                formState.home_and_economy.outcome_other= verifyValue(response.data.casa_economia.egresos.otros_egreso, formState.home_and_economy.outcome_other);

                formState.diet.perceived_quality= verifyValue(response.data.alimentacion.calidad_percibida, formState.diet.perceived_quality);
                formState.diet.meals_per_day= verifyValue(response.data.alimentacion.comidas_al_dia, formState.diet.meals_per_day);
                formState.diet.food_preparation= verifyValue(response.data.alimentacion.preparacion_alimentos, formState.diet.food_preparation);
                formState.diet.water_per_day= verifyValue(response.data.alimentacion.agua_al_dia, formState.diet.water_per_day);
                formState.diet.red_meat_week= verifyValue(response.data.alimentacion.carne_roja_semana, formState.diet.red_meat_week);
                formState.diet.red_meat_month= verifyValue(response.data.alimentacion.carne_roja_mes, formState.diet.red_meat_month);
                formState.diet.chicken_week= verifyValue(response.data.alimentacion.pollo_semana, formState.diet.chicken_week);
                formState.diet.chicken_month= verifyValue(response.data.alimentacion.pollo_mes, formState.diet.chicken_month);
                formState.diet.fish_week= verifyValue(response.data.alimentacion.pescado_semana, formState.diet.fish_week);
                formState.diet.fish_month= verifyValue(response.data.alimentacion.pescado_mes, formState.diet.fish_month);
                formState.diet.grain_week= verifyValue(response.data.alimentacion.granos_semana, formState.diet.grain_week);
                formState.diet.grain_month= verifyValue(response.data.alimentacion.granos_mes, formState.diet.grain_month);
                formState.diet.dairy_week= verifyValue(response.data.alimentacion.lacteos_semana, formState.diet.dairy_week);
                formState.diet.dairy_month= verifyValue(response.data.alimentacion.lacteos_mes, formState.diet.dairy_month);
                formState.diet.bread_week= verifyValue(response.data.alimentacion.pan_semana, formState.diet.bread_week);
                formState.diet.bread_month= verifyValue(response.data.alimentacion.pan_mes, formState.diet.bread_pasta_week);
                formState.diet.bread_pasta_week= verifyValue(response.data.alimentacion.bread_pasta_semana, formState.diet.bread_pasta_week);
                formState.diet.bread_pasta_month= verifyValue(response.data.alimentacion.bread_pasta_mes, formState.diet.bread_pasta_month);
                formState.diet.vegetables_fruits_week= verifyValue(response.data.alimentacion.verduras_frutas_semana, formState.diet.vegetables_fruits_week);
                formState.diet.vegetables_fruits_month= verifyValue(response.data.alimentacion.verduras_frutas_mes, formState.diet.vegetables_fruits_month);
                
                formState.hygiene_pass_physact.shower_frequency= verifyValue(response.data.higiene_act_fis_pasatiempo.frecuencia_duchas, formState.hygiene_pass_physact.shower_frequency);
                formState.hygiene_pass_physact.toothbrushing_frequency= verifyValue(response.data.higiene_act_fis_pasatiempo.frecuencia_lavar_dientes, formState.hygiene_pass_physact.toothbrushing_frequency);
                formState.hygiene_pass_physact.home_hygiene= verifyValue(response.data.higiene_act_fis_pasatiempo.higiene_hogar, formState.hygiene_pass_physact.home_hygiene);
                formState.hygiene_pass_physact.phys_activity= verifyValue(response.data.higiene_act_fis_pasatiempo.actividad_fisica, formState.hygiene_pass_physact.phys_activity);
                formState.hygiene_pass_physact.passtime= verifyValue(response.data.higiene_act_fis_pasatiempo.pasatiempo, formState.hygiene_pass_physact.passtime);

                formState.others.how_found_out= verifyValue(response.data.otros.como_se_entero, formState.others.how_found_out);
                formState.others.has_support_background= verifyValue(response.data.otros.antecedentes_apoyo.tiene_antecedente, formState.others.has_support_background);
                formState.others.notes_support_background= verifyValue(response.data.otros.antecedentes_apoyo.notas, formState.others.notes_support_background);
                formState.others.observations= verifyValue(response.data.otros.observations, formState.others.observations);
                formState.others.social_plan= verifyValue(response.data.otros.plan_social, formState.others.social_plan);

                formState.others.socioeconomic_class_1= verifyValue(response.data.otros.clase_socioeconomica_1, formState.others.socioeconomic_class_1);
                formState.others.socioeconomic_class_2= verifyValue(response.data.otros.clase_socioeconomica_2, formState.others.socioeconomic_class_2);
                formState.others.socioeconomic_class_3= verifyValue(response.data.otros.clase_socioeconomica_3, formState.others.socioeconomic_class_3);

                formState.others.social_worker= verifyValue(response.data.otros.trabajador_social, formState.others.social_worker);
                formState.others.animals= verifyValue(response.data.otros.animales, formState.others.animals);
                formState.others.vaccinated_animals= verifyValue(response.data.otros.animales_vacunados, formState.others.vaccinated_animals);
                formState.others.ticks_animals= verifyValue(response.data.otros.animales_garrapatas, formState.others.ticks_animals);
                formState.others.diseases_animals= verifyValue(response.data.otros.animales_enfermedades, formState.others.diseases_animals);
                formState.others.vaccination_card= verifyValue(response.data.otros.cartilla_vacunacion, formState.others.vaccination_card);

                formState.finished= true;
            }
            console.log(formState);
        })
    }

    useEffect(() => {
        if(formState.patient_data.folio){ getForm(); }
        getCitas();
    }, []);

    /// const jsonpaciente = {
    //                     "edad":"9",
    //                 }

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
                        <div className="patient-text">Nacimiento: {moment.unix(formState.general_info.birth_date/999.95).format("DD/MM/YYYY")} - Años: {formState.general_info.age}</div>
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

        <p>{message}</p>

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
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCN" value={formState.patient_data.birth_city} placeholder="Ciudad de Nacimiento" onChange={(e) => {
                                            updateFormState("patient_data", "birth_city",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                </div>
                                <div>Domicilio Permanente</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCDP" value={formState.patient_data.permanent_street}  placeholder="Calle" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_street",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNDP" value={formState.patient_data.permanent_num}  placeholder="Número" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_num",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColDP" value={formState.patient_data.permanent_suburb}  placeholder="Colonia" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_suburb",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalDP" value={formState.patient_data.permanent_locality}  placeholder="Localidad" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_locality",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunDP" value={formState.patient_data.permanent_municipality} placeholder="Municipio" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_municipality",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat" id="inputCPDP" value={formState.patient_data.permanent_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "permanent_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1DP" value={formState.patient_data.permanent_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2DP" value={formState.patient_data.permanent_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <br />
                                
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.email} placeholder="Correo Electrónico" onChange={(e) => {
                                        updateFormState("patient_data", "email",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.income} placeholder="Ingresos" onChange={(e) => {
                                        updateFormState("patient_data", "income",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.medical_service} placeholder="Servicio Médico" onChange={(e) => {
                                        updateFormState("patient_data", "medical_service",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.scholarship} placeholder="Escolaridad" onChange={(e) => {
                                        updateFormState("patient_data", "scholarship",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.ocupation} placeholder="Ocupación" onChange={(e) => {
                                        updateFormState("patient_data", "ocupation",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.religion} placeholder="Religión" onChange={(e) => {
                                        updateFormState("patient_data", "religion",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" value={formState.patient_data.civil_state} placeholder="Estado Civil" onChange={(e) => {
                                        updateFormState("patient_data", "civil_state",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">Realización Historial Clínico</div>
                                    <div className="form-group col-md-2">
                                        <input type="date" className="form-control form-pat" value={formState.patient_data.clinic_record_date} onChange={(e) => {
                                        updateFormState("patient_data", "clinic_record_date",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Domicilio Temporal</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalle" value={formState.patient_data.temp_street} placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "temp_street",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNum" value={formState.patient_data.temp_num} placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "temp_num",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCol" value={formState.patient_data.temp_suburb} placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "temp_suburb",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocal" value={formState.patient_data.temp_locality} placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "temp_locality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMun" value={formState.patient_data.temp_municipality} placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "temp_municipality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input className="form-control form-pat" id="inputCP" value={formState.patient_data.temp_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "temp_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputTel1" value={formState.patient_data.temp_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2" value={formState.patient_data.temp_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Familia Responsable</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNombreFR" value={formState.patient_data.responsable_name} placeholder="Nombre del Responsable" onChange={(e) => {
                                            updateFormState("patient_data", "responsable_name",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalleFR" value={formState.patient_data.responsable_street} placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_street",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNumFR" value={formState.patient_data.responsable_num} placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_num",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColFR" value={formState.patient_data.responsable_suburb} placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_suburb",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalFR" value={formState.patient_data.responsable_locality} placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_locality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunFR" value={formState.patient_data.responsable_municipality} placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_municipality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat" id="inputCPFR" value={formState.patient_data.responsable_zip_code} placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "responsable_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1FR" value={formState.patient_data.responsable_phone} placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2FR" value={formState.patient_data.responsable_phone2} placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div>Parentesco</div>
                                <div>
                                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" value={formState.patient_data.responsable_relationship} placeholder="Parentesco" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_relationship",e.target.value);
                                        console.log(formState);
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
                    <textarea className="form-control form-pat" rows="6"
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
                    <textarea className="form-control form-pat" rows="6"
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
                                    console.log(formState);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Selecciona aquí la hora para tu cita: </p>
                        <div className="form-group col-md-4" >
                                    
                                    <input style={{textAlign: "center"}} type="time" className="form-control form-pat" onChange={(e) => {
                                    updateFormState("patient_data", "appointments_time",e.target.value);
                                    console.log(formState);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Ingresa aquí la descripción de la cita: </p>
                    <div className="col-md-12 row">
                            
                            
                        
                            <textarea className="form-control col-md-6 form-pat" rows="4"
                                onChange={(e) => {updateFormState("patient_data", "appointment_description",e.target.value);console.log(formState);}} 
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
                        <button onClick={handelSubmitAppointment} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
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