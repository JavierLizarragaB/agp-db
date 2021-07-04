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
import axios from "axios";


function Form() {
    //para citas
    const [citas, setCitas] = useState([]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        formState.patient_folio = 2;
        console.log(formState);
        axios.post("./api/forms", {
            formState
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

    const getForm = () => {
        axios.get("./api/forms/edit").then((response) => {

            formState.patient_data.birth_state= response.data.datos_paciente.entidad_nacimiento ? response.data.datos_paciente.entidad_nacimiento : null;
            formState.patient_data.birth_city= response.data.datos_paciente.ciudad_nacimiento;
    
            formState.patient_data.permanent_street= response.data.datos_paciente.direccion_permanente.calle;
            formState.patient_data.permanent_num= response.data.datos_paciente.direccion_permanente.num; 
            formState.patient_data.permanent_suburb= response.data.datos_paciente.direccion_permanente.colonia;
            formState.patient_data.permanent_locality= response.data.datos_paciente.direccion_permanente.localidad;
            formState.patient_data.permanent_municipality= response.data.datos_paciente.direccion_permanente.municipio;
            formState.patient_data.permanent_zip_code= response.data.datos_paciente.direccion_permanente.cp;
            formState.patient_data.permanent_phone= response.data.datos_paciente.direccion_permanente.tel;
            formState.patient_data.permanent_phone2= response.data.datos_paciente.direccion_permanente.tel2;
    
            formState.patient_data.email= response.data.datos_paciente.correo;
            formState.patient_data.income= response.data.datos_paciente.ingreso;
            formState.patient_data.medical_service= response.data.datos_paciente.servicio_medico;
            formState.patient_data.scholarship= response.data.datos_paciente.escolaridad;
            formState.patient_data.ocupation= response.data.datos_paciente.ocupacion;
            formState.patient_data.religion= response.data.datos_paciente.religion;
            formState.patient_data.civil_state= response.data.datos_paciente.estado_civil;
    
            formState.patient_data.clinic_record_date= typeof response.data.datos_paciente.realizacion_historial_clinico != "undefined" ? moment.unix(response.data.datos_paciente.realizacion_historial_clinico.$date/999.95).format("yyyy-MM-DD"): formState.patient_data.clinic_record_date;
    
            formState.patient_data.temp_street= response.data.datos_paciente.direccion_temporal.calle;
            formState.patient_data.temp_num= response.data.datos_paciente.direccion_temporal.num;
            formState.patient_data.temp_suburb= response.data.datos_paciente.direccion_temporal.colonia;
            formState.patient_data.temp_locality= response.data.datos_paciente.direccion_temporal.localidad;
            formState.patient_data.temp_municipality= response.data.datos_paciente.direccion_temporal.municipio;
            formState.patient_data.temp_zip_code= response.data.datos_paciente.direccion_temporal.cp;
            formState.patient_data.temp_phone= response.data.datos_paciente.direccion_temporal.tel;
            formState.patient_data.temp_phone2= response.data.datos_paciente.direccion_temporal.tel2;

            //responsable_name= response.data.datos_paciente.familiar_responsable.nombre_responsable;
    
            formState.patient_data.responsable_street= response.data.datos_paciente.familiar_responsable.direccion_responsable.calle;
            formState.patient_data.responsable_num= response.data.datos_paciente.familiar_responsable.direccion_responsable.num;
            formState.patient_data.responsable_suburb= response.data.datos_paciente.familiar_responsable.direccion_responsable.colonia;
            formState.patient_data.responsable_locality= response.data.datos_paciente.familiar_responsable.direccion_responsable.localidad;
            formState.patient_data.responsable_municipality= response.data.datos_paciente.familiar_responsable.direccion_responsable.municipio;
            formState.patient_data.responsable_zip_code= response.data.datos_paciente.familiar_responsable.direccion_responsable.cp;
            formState.patient_data.responsable_phone= response.data.datos_paciente.familiar_responsable.direccion_responsable.tel;
            formState.patient_data.responsable_phone2= response.data.datos_paciente.familiar_responsable.direccion_responsable.tel2;
    
            formState.patient_data.responsable_relationship= response.data.datos_paciente.familiar_responsable.parentesco_responsable;
    
            formState.patient_data.chronic_degenerative_diseases= response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_cronicodegenerativas;
            formState.patient_data.infectious_contagious_diseases= response.data.datos_paciente.antecedentes_personales_patologicos.enfermedades_infectocontagiosas;

            formState.patient_data.surgeries= response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.tiene_antecedente;
            formState.patient_data.surgeries_notes= response.data.datos_paciente.antecedentes_personales_patologicos.cirugias.notas;
            
            formState.patient_data.jail= response.data.datos_paciente.antecedentes_personales_patologicos.carcel.tiene_antecedente;
            formState.patient_data.jail_notes= response.data.datos_paciente.antecedentes_personales_patologicos.carcel.notas;
            
            formState.patient_data.blood_transfusions= response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.tiene_antecedente;
            formState.patient_data.blood_transfusions_notes= response.data.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.notas;
            
            formState.patient_data.allergies= response.data.datos_paciente.antecedentes_personales_patologicos.alergias.tiene_antecedente;
            formState.patient_data.allergies_notes= response.data.datos_paciente.antecedentes_personales_patologicos.alergias.notas;
            
            
            formState.patient_data.trauma= response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.tiene_antecedente;
            formState.patient_data.trauma_notes= response.data.datos_paciente.antecedentes_personales_patologicos.traumatismos.notas;

            formState.patient_data.alcoholism_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.consumo;
            formState.patient_data.alcoholism_starting_age= response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.edad_inicio;
            formState.patient_data.alcoholism_quantity= response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.cantidad;
            formState.patient_data.alcoholism_frequency= response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.frecuencia;
            formState.patient_data.alcoholism_last_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.alcoholismo.ultimo_consumo;

            formState.patient_data.smoking_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.consumo;
            formState.patient_data.smoking_starting_age= response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.edad_inicio;
            formState.patient_data.smoking_quantity= response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.cantidad;
            formState.patient_data.smoking_frequency= response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.frecuencia;
            formState.patient_data.smoking_last_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.tabaquismo.ultimo_consumo;

            formState.patient_data.drug_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.consumo;
            formState.patient_data.drug_starting_age= response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.edad_inicio;
            formState.patient_data.drug_quantity= response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.cantidad;
            formState.patient_data.drug_frequency= response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.frecuencia;
            formState.patient_data.drug_last_consumption= response.data.datos_paciente.antecedentes_personales_patologicos.toxicomanias.ultimo_consumo;
    
            formState.patient_data.male_start_sexual_life= response.data.datos_paciente.en_caso_de_ser_hombre.inicio_vida_sexual;
            formState.patient_data.male_sexual_partners= response.data.datos_paciente.en_caso_de_ser_hombre.parejas_sexuales;
            formState.patient_data.male_std= response.data.datos_paciente.en_caso_de_ser_hombre.ets;
            formState.patient_data.male_contraceptive_methods= response.data.datos_paciente.en_caso_de_ser_hombre.metodos_anticonceptivos;
    
            formState.patient_data.female_menarche= response.data.datos_paciente.en_caso_de_ser_mujer.menarca;
            formState.patient_data.female_menarche_age= response.data.datos_paciente.en_caso_de_ser_mujer.edad_menarca;
            formState.patient_data.female_rhythm= response.data.datos_paciente.en_caso_de_ser_mujer.ritmo_menarca;
            formState.patient_data.female_start_sexual_life= response.data.datos_paciente.en_caso_de_ser_mujer.inicio_vida_sexual;
            formState.patient_data.female_high_risk_partners= response.data.datos_paciente.en_caso_de_ser_mujer.parejas_alto_riesgo;
            formState.patient_data.female_sexual_partners= response.data.datos_paciente.en_caso_de_ser_mujer.parejas_sexuales;

            formState.patient_data.female_std= response.data.datos_paciente.en_caso_de_ser_mujer.ets.tiene_antecedente;
            formState.patient_data.female_std_notes= response.data.datos_paciente.en_caso_de_ser_mujer.ets.notas;
            
            formState.patient_data.female_gestations= response.data.datos_paciente.en_caso_de_ser_mujer.gestas;
            formState.patient_data.female_deliveries= response.data.datos_paciente.en_caso_de_ser_mujer.partos;
            formState.patient_data.female_cesarean_births= response.data.datos_paciente.en_caso_de_ser_mujer.cesareas;
            formState.patient_data.female_abortions= response.data.datos_paciente.en_caso_de_ser_mujer.abortos;

            formState.patient_data.female_date_last_delivery= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto.$date/999.95).format("yyyy-MM-DD") : formState.patient_data.female_date_last_delivery;
            
            formState.patient_data.female_age_first_pregnancy= response.data.datos_paciente.en_caso_de_ser_mujer.edad_primer_embarazo;
            formState.patient_data.female_family_planning_methods= response.data.datos_paciente.en_caso_de_ser_mujer.metodos_planificacion_familiar;

            formState.patient_data.female_date_last_menstruation= typeof response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla.$date/999.95).format("MM/DD/YYYY") : formState.patient_data.female_date_last_menstruation;


            formState.patient_data.female_menopause= response.data.datos_paciente.en_caso_de_ser_mujer.menopausia;
            formState.patient_data.female_hormonal_therapy= response.data.datos_paciente.en_caso_de_ser_mujer.terapia_remplazo_hormonal;
            formState.patient_data.female_breastfeeding= response.data.datos_paciente.en_caso_de_ser_mujer.lactancia_materna;

            formState.patient_data.female_last_pap_smear= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha.$date/999.95).format("MM/DD/YYYY") : formState.patient_data.female_last_pap_smear;

            formState.patient_data.female_last_pap_smear_result= response.data.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.resultado;
            
            formState.patient_data.female_last_hybrid_test= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha.$date/999.95).format("MM/DD/YYYY") : formState.patient_data.female_last_hybrid_test;
            formState.patient_data.female_last_hybrid_test_result= response.data.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.resultado;
            
            formState.patient_data.female_last_mammography= typeof response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha != "undefined" ? moment.unix(response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha.$date/999.95).format("MM/DD/YYYY") : formState.patient_data.female_last_mammography;
            formState.patient_data.female_last_mammography_result= response.data.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.resultado;
    
    
            /*Cambios coloracion*/
            formState.patient_data.skin_paleness= response.data.datos_paciente.aparatos_y_sistemas.piel.palidez;
            formState.patient_data.skin_icterus= response.data.datos_paciente.aparatos_y_sistemas.piel.ictericia;
            formState.patient_data.skin_cyanosis= response.data.datos_paciente.aparatos_y_sistemas.piel.cianosis;
    
            formState.patient_data.skin_eruptions= response.data.datos_paciente.aparatos_y_sistemas.piel.erupciones;
            formState.patient_data.skin_spots= response.data.datos_paciente.aparatos_y_sistemas.piel.manchas;
            formState.patient_data.skin_pruritus= response.data.datos_paciente.aparatos_y_sistemas.piel.prurito;
            formState.patient_data.skin_dryness= response.data.datos_paciente.aparatos_y_sistemas.piel.sequedad;
            formState.patient_data.skin_volume_increase= response.data.datos_paciente.aparatos_y_sistemas.piel.aumento_volumen;
            formState.patient_data.skin_nails_hair= response.data.datos_paciente.aparatos_y_sistemas.piel.unas_pelo;
            formState.patient_data.skin_nodules= response.data.datos_paciente.aparatos_y_sistemas.piel.nodulos;
            formState.patient_data.skin_observations= response.data.datos_paciente.aparatos_y_sistemas.piel.observaciones;
    
            /*Cambios vision*/
            formState.patient_data.ophthalmic_diplopia= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.diplopia;
            formState.patient_data.ophthalmic_eye_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.dolor_ocular;
            formState.patient_data.ophthalmic_photophobia= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotofobia;
            formState.patient_data.ophthalmic_amaurosis= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.amaurosis;
            formState.patient_data.ophthalmic_photopsies= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotopsias;
            formState.patient_data.ophthalmic_myodesopsias= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miodesopsias;
            formState.patient_data.ophthalmic_scotomas= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.scotomas;
            formState.patient_data.ophthalmic_hemeralopia= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.hemeralopia;
            formState.patient_data.ophthalmic_nyctalopia= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.nictalopia;
    
            /*Uso de lentes*/
            formState.patient_data.ophthalmic_myopia= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miopia;
            formState.patient_data.ophthalmic_astigmatism= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.astigmatismo;
    
            formState.patient_data.ophthalmic_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.observaciones;
    
            /*Cambios en la audicion*/
            formState.patient_data.ent_otalgia= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.otalgia;
            formState.patient_data.ent_algiacusis= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.algiacusia;
            formState.patient_data.ent_presbycusis= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.presbiacusia;
            formState.patient_data.ent_anacusis= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.anacusia;
            formState.patient_data.ent_tinnitus= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.tinnitus;
            formState.patient_data.ent_ear_ringing= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.acufenos;
            formState.patient_data.ent_hearing_loss= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.hipoacusia;
    
            formState.patient_data.ent_ear_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_oido;
            formState.patient_data.ent_vertigo= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.vertigo;
            formState.patient_data.ent_fluid_leaking_ear= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_oido;
            formState.patient_data.ent_smelling_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.cambios_olfato;
            formState.patient_data.ent_fluid_leaking_nose= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_nariz;
            formState.patient_data.ent_nose_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_nariz;
            formState.patient_data.ent_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.observaciones;
    
            /*Dientes*/
            formState.patient_data.mouth_throat_cavities= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.caries;
            formState.patient_data.mouth_throat_dental_agenesis= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.agenesia_dental;
            formState.patient_data.mouth_throat_prothesis= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dientes_protesis;
    
            /*Encias */
            formState.patient_data.mouth_throat_gingivorrhea= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorrea;
            formState.patient_data.mouth_throat_gingivorrhagia= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorragia;
            formState.patient_data.mouth_throat_pain= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_dolor_encias;
            formState.patient_data.mouth_throat_gums_ulcerations= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_ulceras;
    
            /*Lengua*/
            formState.patient_data.mouth_throat_colorations= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_coloraciones;
            formState.patient_data.mouth_throat_size= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_tamaño;
            formState.patient_data.mouth_throat_plaque_presence= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_presencia_placa;
            formState.patient_data.mouth_throat_tongue_ulcerations= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_ulceras;
    
            /*Problemas de hablar*/
            formState.patient_data.mouth_throat_dysphonia= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.disfonia;
            formState.patient_data.mouth_throat_aphonia= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.afonia;
    
            formState.patient_data.mouth_throat_thirst= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.sed;
            formState.patient_data.mouth_throat_speaking_eating_pain= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.dolor_comer_hablar;
            formState.patient_data.mouth_throat_bad_breath= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.mal_aliento;
            formState.patient_data.mouth_throat_excess_salivation= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.exceso_salivacion;
            formState.patient_data.mouth_throat_observations= response.data.datos_paciente.aparatos_y_sistemas.boca_garganta.observaciones;
    
            formState.patient_data.digestive_apettite_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.cambio_apetito;
            formState.patient_data.digestive_sickness_vomit= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.nauseas_vomito;
            formState.patient_data.digestive_abdominal_distention= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.distension_abdominal;
    
            /*Esofago*/
            formState.patient_data.digestive_abdominal_gastralgia= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.gastralgia;
            formState.patient_data.digestive_abdominal_acidity= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acidez;
            formState.patient_data.digestive_abdominal_postrandial_fullness= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.llenura_postprandial;
    
            /*Cambios de evacuacion*/
            formState.patient_data.digestive_abdominal_tenesmus= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.tenesmo;
            formState.patient_data.digestive_abdominal_bids= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.pujos;
            formState.patient_data.digestive_abdominal_encopresis= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.encopresis;
            formState.patient_data.digestive_abdominal_anal_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_anal;
            formState.patient_data.digestive_abdominal_constipation= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.constipacion;
            formState.patient_data.digestive_abdominal_rectal_bleeding= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.rectorragia;
            formState.patient_data.digestive_abdominal_hematochezia= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.hematoquecia;
    
            /*Higado y vias biliares*/
            formState.patient_data.digestive_abdominal_jaundice= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ictericia;
            formState.patient_data.digestive_abdominal_pruritus= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.prurito;
            formState.patient_data.digestive_abdominal_fever= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ulcerations;
            formState.patient_data.digestive_abdominal_ascites= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ascitis;
            formState.patient_data.digestive_abdominal_biliary_colic= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_biliar;
            formState.patient_data.digestive_abdominal_hepatic_colic= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_epatitico;
            formState.patient_data.digestive_abdominal_acholia= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acolia;
    
            /*Pancreas*/
            formState.patient_data.digestive_abdominal_steatorrhea= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.esteatorrea;
            formState.patient_data.digestive_abdominal_diarrhea= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.diarrea;
            formState.patient_data.digestive_abdominal_hypersalivation= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.sialorrea;
            formState.patient_data.digestive_abdominal_abdominal_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_abdomen;
            formState.patient_data.digestive_abdominal_back_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_espalda;
    
            formState.patient_data.digestive_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_digestivo.observaciones;
    
            formState.patient_data.respiratory_cough= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.tos;
            formState.patient_data.respiratory_chest_pain= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.dolor_toracico;
            formState.patient_data.respiratory_hemoptysis= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.hemoptisis;
            formState.patient_data.respiratory_vomiting_cough= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.vomica;
            formState.patient_data.respiratory_cyanosis= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cianosis;
            formState.patient_data.respiratory_fatigue= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.fatiga;
            formState.patient_data.respiratory_breathing_problems= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.problemas_respirar;
            formState.patient_data.respiratory_breathing_changes= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cambios_respiracion;
            formState.patient_data.respiratory_observations= response.data.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.observaciones;
    
            formState.patient_data.cardiovascular_dyspnoea= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.disnea;
            formState.patient_data.cardiovascular_orthopnea= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.ortopnea;
            formState.patient_data.cardiovascular_lipothymia= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.lipotimia;
            formState.patient_data.cardiovascular_syncope= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.sincope;
            formState.patient_data.cardiovascular_edema= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.edema;
            formState.patient_data.cardiovascular_cyanosis= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.cianosis;
            formState.patient_data.cardiovascular_chest_pain= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.color_toracico;
            formState.patient_data.cardiovascular_palpitations= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.palpitaciones;
            formState.patient_data.cardiovascular_observations= response.data.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.observaciones;
    
            formState.patient_data.genitourinary_urinating_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_miccionar;
            formState.patient_data.genitourinary_urinating_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dolor_miccionar;
            formState.patient_data.genitourinary_urinating_difficulty = response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dificultad_miccionar;
            formState.patient_data.genitourinary_jet_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_chorro;
            formState.patient_data.genitourinary_menstruation_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_menstruacion;
            formState.patient_data.genitourinary_dyspareunia= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dispareunia;
            formState.patient_data.genitourinary_libido_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_libido;
            formState.patient_data.genitourinary_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.observaciones;
    
            formState.patient_data.musculoskeletal_muscle_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_muscular;
            formState.patient_data.musculoskeletal_joint_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_articular;
            formState.patient_data.musculoskeletal_joint_stiffness= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.rigidez_articular;
            formState.patient_data.musculoskeletal_nodules= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.nodulos;
            formState.patient_data.musculoskeletal_bone_pain= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_osea;
            formState.patient_data.musculoskeletal_ambulation_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.cambios_deambulacion;
            formState.patient_data.musculoskeletal_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.observaciones;
    
            formState.patient_data.hematological_weakness= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.debilidad;
            formState.patient_data.hematological_color_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.cambios_coloracion;
            formState.patient_data.hematological_bleeding= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hemorragias;
            formState.patient_data.hematological_petechiae= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.petequias;
            formState.patient_data.hematological_ecchymosis= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.equimosis;
            formState.patient_data.hematological_bruises= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hematomas;
            formState.patient_data.hematological_lymphadenopathy= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.adenopatias;
            formState.patient_data.hematological_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_hematologico.observaciones;
        
            formState.patient_data.nervous_headache= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cefalea;
            formState.patient_data.nervous_seizures= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.convulsiones;
            formState.patient_data.nervous_memory_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_memoria;
            formState.patient_data.nervous_sphincters_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_esfinteres;
            formState.patient_data.nervous_loss_of_feeling= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_sensacion;
            formState.patient_data.nervous_loss_of_movement= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_movimiento;
            formState.patient_data.nervous_loss_of_balance= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_equilibrio;
            formState.patient_data.nervous_language_disorders= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.trastornos_lenguaje;
            formState.patient_data.nervous_gait_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_marcha;
            formState.patient_data.nervous_tremors= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.temblores;
            formState.patient_data.nervous_paralysis= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paralisis;
            formState.patient_data.nervous_parasthesia= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.parestesias;
            formState.patient_data.nervous_paresis= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paresias;
            formState.patient_data.nervous_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_nervioso.observaciones;
        
            formState.patient_data.psychic_distress= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.angustia;
            formState.patient_data.psychic_depression= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.depresion;
            formState.patient_data.psychic_interest_changes= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.cambios_interes;
            formState.patient_data.psychic_guilt= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.culpa;
            formState.patient_data.psychic_suicidal_thoughts= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.ideas_suicidas;
            formState.patient_data.psychic_hallucinations= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.alucinaciones;
            formState.patient_data.psychic_delirium= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.delirio;
            formState.patient_data.psychic_observations= response.data.datos_paciente.aparatos_y_sistemas.sistema_psiquico.observaciones;
        
            formState.patient_data.physical_observations= response.data.datos_paciente.aparatos_y_sistemas.observaciones_exploracion_fisica;
        
            formState.patient_data.follow_up_treatment_changes= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.tiene_antecedente;
            formState.patient_data.follow_up_treatment_changes_notes= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.notas;
            formState.patient_data.follow_up_actual_symptoms= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.sintomas_actuales;
            formState.patient_data.follow_up_last_medication_efects= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.efectos_ultima_administracion_medicamentos;
            formState.patient_data.follow_up_psychology_follow_up= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.seguimiento_psicologico;
            formState.patient_data.follow_up_actual_diagnostic= response.data.datos_paciente.aparatos_y_sistemas.seguimiento.diagnostico_actual;

            formState.family_data.first_member_name= response.data.datos_familia.estructura_familiar.primer_nombre_familiar;
            formState.family_data.first_member_age= response.data.datos_familia.estructura_familiar.primera_edad_familiar;
            formState.family_data.first_member_relationship= response.data.datos_familia.estructura_familiar.primer_parentesco_familiar;
            formState.family_data.first_member_civil_state= response.data.datos_familia.estructura_familiar.primer_estado_civil_familiar;
            formState.family_data.first_member_ocupation= response.data.datos_familia.estructura_familiar.primer_ocupacion_familiar;
            formState.family_data.first_member_income= response.data.datos_familia.estructura_familiar.primer_ingreso_familiar;
    
            formState.family_data.second_member_name= response.data.datos_familia.estructura_familiar.segundo_nombre_familiar;
            formState.family_data.second_member_age= response.data.datos_familia.estructura_familiar.segunda_edad_familiar;
            formState.family_data.second_member_relationship= response.data.datos_familia.estructura_familiar.segundo_parentesco_familiar;
            formState.family_data.second_member_civil_state= response.data.datos_familia.estructura_familiar.segundo_estado_civil_familiar;
            formState.family_data.second_member_ocupation= response.data.datos_familia.estructura_familiar.segundo_ocupacion_familiar;
            formState.family_data.second_member_income= response.data.datos_familia.estructura_familiar.segundo_ingreso_familiar;
    
            formState.family_data.third_member_name= response.data.datos_familia.estructura_familiar.tercer_nombre_familiar;
            formState.family_data.third_member_age= response.data.datos_familia.estructura_familiar.tercera_edad_familiar;
            formState.family_data.third_member_relationship= response.data.datos_familia.estructura_familiar.tercer_parentesco_familiar;
            formState.family_data.third_member_civil_state= response.data.datos_familia.estructura_familiar.tercer_estado_civil_familiar;
            formState.family_data.third_member_ocupation= response.data.datos_familia.estructura_familiar.tercer_ocupacion_familiar;
            formState.family_data.third_member_income= response.data.datos_familia.estructura_familiar.tercer_ingreso_familiar;
    
            formState.family_data.fourth_member_name= response.data.datos_familia.estructura_familiar.cuarto_nombre_familiar;
            formState.family_data.fourth_member_age= response.data.datos_familia.estructura_familiar.cuarta_edad_familiar;
            formState.family_data.fourth_member_relationship= response.data.datos_familia.estructura_familiar.cuarto_parentesco_familiar;
            formState.family_data.fourth_member_civil_state= response.data.datos_familia.estructura_familiar.cuarto_estado_civil_familiar;
            formState.family_data.fourth_member_ocupation= response.data.datos_familia.estructura_familiar.cuarto_ocupacion_familiar;
            formState.family_data.fourth_member_income= response.data.datos_familia.estructura_familiar.cuarto_ingreso_familiar;
    
            formState.family_data.fifth_member_name= response.data.datos_familia.estructura_familiar.quinto_nombre_familiar;
            formState.family_data.fifth_member_age= response.data.datos_familia.estructura_familiar.quinta_edad_familiar;
            formState.family_data.fifth_member_relationship= response.data.datos_familia.estructura_familiar.quinto_parentesco_familiar;
            formState.family_data.fifth_member_civil_state= response.data.datos_familia.estructura_familiar.quinto_estado_civil_familiar;
            formState.family_data.fifth_member_ocupation= response.data.datos_familia.estructura_familiar.quinto_ocupacion_familiar;
            formState.family_data.fifth_member_income= response.data.datos_familia.estructura_familiar.quinto_ingreso_familiar;
    
            formState.family_data.sixth_member_name= response.data.datos_familia.estructura_familiar.sexto_nombre_familiar;
            formState.family_data.sixth_member_age= response.data.datos_familia.estructura_familiar.sexta_edad_familiar;
            formState.family_data.sixth_member_relationship= response.data.datos_familia.estructura_familiar.sexto_parentesco_familiar;
            formState.family_data.sixth_member_civil_state= response.data.datos_familia.estructura_familiar.sexto_estado_civil_familiar;
            formState.family_data.sixth_member_ocupation= response.data.datos_familia.estructura_familiar.sexto_ocupacion_familiar;
            formState.family_data.sixth_member_income= response.data.datos_familia.estructura_familiar.sexto_ingreso_familiar;
    
            formState.family_data.seventh_member_name= response.data.datos_familia.estructura_familiar.séptimo_nombre_familiar;
            formState.family_data.seventh_member_age= response.data.datos_familia.estructura_familiar.séptima_edad_familiar;
            formState.family_data.seventh_member_relationship= response.data.datos_familia.estructura_familiar.séptimo_parentesco_familiar;
            formState.family_data.seventh_member_civil_state= response.data.datos_familia.estructura_familiar.séptimo_estado_civil_familiar;
            formState.family_data.seventh_member_ocupation= response.data.datos_familia.estructura_familiar.séptimo_ocupacion_familiar;
            formState.family_data.seventh_member_income= response.data.datos_familia.estructura_familiar.séptimo_ingreso_familiar;
    
            formState.family_data.paternal_grandfather_living= response.data.datos_familia.antecedentes_familiares.abuelo_paterno.vive;
            formState.family_data.paternal_grandfather_diseases= response.data.datos_familia.antecedentes_familiares.abuelo_paterno.enfermedades;
            formState.family_data.paternal_grandfather_cause_of_death= response.data.datos_familia.antecedentes_familiares.abuelo_paterno.causa_defuncion;
    
            formState.family_data.paternal_grandmother_living= response.data.datos_familia.antecedentes_familiares.abuela_paterna.vive;
            formState.family_data.paternal_grandmother_diseases= response.data.datos_familia.antecedentes_familiares.abuela_paterna.enfermedades;
            formState.family_data.paternal_grandmother_cause_of_death= response.data.datos_familia.antecedentes_familiares.abuela_paterna.causa_defuncion;
    
            formState.family_data.maternal_grandfather_living= response.data.datos_familia.antecedentes_familiares.abuelo_materno.vive;
            formState.family_data.maternal_grandfather_diseases= response.data.datos_familia.antecedentes_familiares.abuelo_materno.enfermedades;
            formState.family_data.maternal_grandfather_cause_of_death= response.data.datos_familia.antecedentes_familiares.abuelo_materno.causa_defuncion;
    
            formState.family_data.maternal_grandmother_living= response.data.datos_familia.antecedentes_familiares.abuela_materna.vive;
            formState.family_data.maternal_grandmother_diseases= response.data.datos_familia.antecedentes_familiares.abuela_materna.enfermedades;
            formState.family_data.maternal_grandmother_cause_of_death= response.data.datos_familia.antecedentes_familiares.abuela_materna.causa_defuncion;
    
            formState.family_data.father_living= response.data.datos_familia.antecedentes_familiares.padre.vive;
            formState.family_data.father_diseases= response.data.datos_familia.antecedentes_familiares.padre.enfermedades;
            formState.family_data.father_cause_of_death= response.data.datos_familia.antecedentes_familiares.padre.causa_defuncion;
    
            formState.family_data.mother_living= response.data.datos_familia.antecedentes_familiares.madre.vive;
            formState.family_data.mother_diseases= response.data.datos_familia.antecedentes_familiares.madre.enfermedades;
            formState.family_data.mother_cause_of_death= response.data.datos_familia.antecedentes_familiares.madre.causa_defuncion;
    
            formState.family_data.siblings_quantity= response.data.datos_familia.antecedentes_familiares.hermanos.cantidad;
            formState.family_data.siblings_diseases= response.data.datos_familia.antecedentes_familiares.hermanos.enfermedades;
            formState.family_data.siblings_cause_of_death= response.data.datos_familia.antecedentes_familiares.hermanos.causa_defuncion;
    
            formState.family_data.sons_quantity= response.data.datos_familia.antecedentes_familiares.hijos.cantidad;
            formState.family_data.sons_diseases= response.data.datos_familia.antecedentes_familiares.hijos.enfermedades;
            formState.family_data.sons_cause_of_death= response.data.datos_familia.antecedentes_familiares.hijos.causa_defuncion;
    
            formState.family_data.number_sicks= response.data.datos_familia.numero_de_enfermos;
    
            formState.family_data.household_member_substance= response.data.datos_familia.consume_sustancias_toxicas.consume_miembro_vivienda;
            
            formState.family_data.substance_alcohol= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.alcohol;
            formState.family_data.substance_glue= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.resistol;
            formState.family_data.substance_cocaine= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cocaina;
            formState.family_data.substance_tobacco= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.tabaco;
            formState.family_data.substance_marijuana= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.marihuana;
            formState.family_data.substance_tablets= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.pastillas;
            formState.family_data.substance_metamphetamine= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.cristal;
            formState.family_data.substance_others= response.data.datos_familia.consume_sustancias_toxicas.sustancia_consumida.otros;
            
            formState.family_data.consuming_father= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_padre;
            formState.family_data.consuming_mother= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_madre;
            formState.family_data.consuming_tutor= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tutor;
            formState.family_data.consuming_son= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_hijo;
            formState.family_data.consuming_spouse= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_cónyuge;
            formState.family_data.consuming_uncle= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_tío;
            formState.family_data.consuming_grandparent= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_abuelo;
            formState.family_data.consuming_others= response.data.datos_familia.consume_sustancias_toxicas.miembro_consumidor.consume_otro;

            formState.family_data.consuming_frequency= response.data.datos_familia.consume_sustancias_toxicas.frecuencia_consumo

            formState.home_and_economy.place_type= response.data.casa_economia.vivienda.tipo_vivienda;
            formState.home_and_economy.place_services= response.data.casa_economia.vivienda.servicios_vivienda;
            formState.home_and_economy.place_material= response.data.casa_economia.vivienda.material_vivienda;
            
            formState.home_and_economy.place_kitchen= response.data.casa_economia.vivienda.distribucion_vivienda.cocina;
            formState.home_and_economy.place_lounge= response.data.casa_economia.vivienda.distribucion_vivienda.sala;
            formState.home_and_economy.place_dining_room= response.data.casa_economia.vivienda.distribucion_vivienda.comedor;
            formState.home_and_economy.place_bedroom= response.data.casa_economia.vivienda.distribucion_vivienda.recámara;
            formState.home_and_economy.place_bedroom_quantity= response.data.casa_economia.vivienda.distribucion_vivienda.cantidad_de_recámaras;
            formState.home_and_economy.place_others= response.data.casa_economia.vivienda.distribucion_vivienda.otros_cuartos;
            
            formState.home_and_economy.place_person_per_room= response.data.casa_economia.vivienda.personas_por_cuarto_vivienda;
            formState.home_and_economy.place_location= response.data.casa_economia.vivienda.zona_vivienda;

            formState.home_and_economy.place_dust= response.data.casa_economia.vivienda.polvo;
            formState.home_and_economy.place_wood_smoke= response.data.casa_economia.vivienda.humo_leña;
            formState.home_and_economy.place_others_exposition= response.data.casa_economia.vivienda.otros;
        
            formState.home_and_economy.electrodomestics= response.data.casa_economia.bienes_hogar.electrodomesticos;
            formState.home_and_economy.air_conditioner= response.data.casa_economia.bienes_hogar.refrigeracion;
        
            formState.home_and_economy.transportation= response.data.casa_economia.transporte_familiar.transporte;
            formState.home_and_economy.car_brand= response.data.casa_economia.transporte_familiar.marca_auto;
            formState.home_and_economy.car_model= response.data.casa_economia.transporte_familiar.modelo_auto;
        
            formState.home_and_economy.geographic_area= response.data.casa_economia.area_geografica;
        
            formState.home_and_economy.sick_members= response.data.casa_economia.familiares_enfermos;
        
            formState.home_and_economy.outcome_electric_power= response.data.casa_economia.egresos.energia_electrica_egreso;
            formState.home_and_economy.outcome_water= response.data.casa_economia.egresos.agua_egreso;
            formState.home_and_economy.outcome_gas= response.data.casa_economia.egresos.gas_egreso;
            formState.home_and_economy.outcome_phone= response.data.casa_economia.egresos.telefono_egreso;
            formState.home_and_economy.outcome_food= response.data.casa_economia.egresos.alimentos_egreso;
            formState.home_and_economy.outcome_rent= response.data.casa_economia.egresos.renta_egreso;
            formState.home_and_economy.outcome_transportation= response.data.casa_economia.egresos.transporte_egreso;
            formState.home_and_economy.outcome_education= response.data.casa_economia.egresos.educacion_egreso;
            formState.home_and_economy.outcome_clothing= response.data.casa_economia.egresos.vestimenta_egreso;
            formState.home_and_economy.outcome_recreational= response.data.casa_economia.egresos.diversion_egreso;
            formState.home_and_economy.outcome_other= response.data.casa_economia.egresos.otros_egreso

            formState.diet.perceived_quality= response.data.alimentacion.calidad_percibida;
            formState.diet.meals_per_day= response.data.alimentacion.comidas_al_dia;
            formState.diet.food_preparation= response.data.alimentacion.preparacion_alimentos;
            formState.diet.water_per_day= response.data.alimentacion.agua_al_dia;
            formState.diet.red_meat_week= response.data.alimentacion.carne_roja_semana;
            formState.diet.red_meat_month= response.data.alimentacion.carne_roja_mes;
            formState.diet.chicken_week= response.data.alimentacion.pollo_semana;
            formState.diet.chicken_month= response.data.alimentacion.pollo_mes;
            formState.diet.fish_week= response.data.alimentacion.pescado_semana;
            formState.diet.fish_month= response.data.alimentacion.pescado_mes;
            formState.diet.grain_week= response.data.alimentacion.granos_semana;
            formState.diet.grain_month= response.data.alimentacion.granos_mes;
            formState.diet.dairy_week= response.data.alimentacion.lacteos_semana;
            formState.diet.dairy_month= response.data.alimentacion.lacteos_mes;
            formState.diet.bread_week= response.data.alimentacion.pan_semana;
            formState.diet.bread_month= response.data.alimentacion.pan_mes;
            formState.diet.bread_pasta_week= response.data.alimentacion.bread_pasta_semana;
            formState.diet.bread_pasta_month= response.data.alimentacion.bread_pasta_mes;
            formState.diet.vegetables_fruits_week= response.data.alimentacion.verduras_frutas_semana;
            formState.diet.vegetables_fruits_month= response.data.alimentacion.verduras_frutas_mes;
            
            formState.hygiene_pass_physact.shower_frequency= response.data.higiene_act_fis_pasatiempo.frecuencia_duchas;
            formState.hygiene_pass_physact.toothbrushing_frequency= response.data.higiene_act_fis_pasatiempo.frecuencia_lavar_dientes;
            formState.hygiene_pass_physact.home_hygiene= response.data.higiene_act_fis_pasatiempo.higiene_hogar;
            formState.hygiene_pass_physact.phys_activity= response.data.higiene_act_fis_pasatiempo.actividad_fisica;
            formState.hygiene_pass_physact.passtime= response.data.higiene_act_fis_pasatiempo.pasatiempo;

            formState.others.how_found_out= response.data.otros.como_se_entero;
            formState.others.has_support_background= response.data.otros.antecedentes_apoyo.tiene_antecedente;
            formState.others.notes_support_background= response.data.otros.antecedentes_apoyo.notas;
            formState.others.observations= response.data.otros.observations;
            formState.others.social_plan= response.data.otros.plan_social;

            formState.others.socioeconomic_class_1= response.data.otros.clase_socioeconomica_1;
            formState.others.socioeconomic_class_2= response.data.otros.clase_socioeconomica_2;
            formState.others.socioeconomic_class_3= response.data.otros.clase_socioeconomica_3;

            formState.others.social_worker= response.data.otros.trabajador_social;
            formState.others.animals= response.data.otros.animales;
            formState.others.vaccinated_animals= response.data.otros.animales_vacunados;
            formState.others.ticks_animals= response.data.otros.animales_garrapatas;
            formState.others.diseases_animals= response.data.otros.animales_enfermedades;
            formState.others.vaccination_card= response.data.otros.cartilla_vacunacion;
            formState.finished= true;
            console.log(formState);
        })
    }
    
    
    const getCitas = () => {
        axios.get('./api/citas').then((response) => {
            setCitas(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getCitas();
        getForm();
    }, []);

    const jsonpaciente = {
                        "edad":"9",
                    }

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
                        <div className="patient-text">Nacimiento: {formState.general_info.birth_date} - Años: {jsonpaciente.edad}</div>
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
                    <button onClick={handleSubmit} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
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
                        <button onClick={handleSubmitStudies} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
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
                            <div className="horario col-md-4">
                                {/* <TablaHorario/> */}
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