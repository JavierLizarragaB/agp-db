import React, { createContext,Component } from "react";

export const FormContext = createContext();

class FormContextProvider extends Component {
    constructor(){
        super();
    }

    patientData = {

        folio: null,

        birth_state: null,
        birth_city: null,

        /*permanent_address: permanent_address,*/
        permanent_street: null,
        permanent_num: null, 
        permanent_suburb: null,
        permanent_locality: null, 
        permanent_municipality: null,
        permanent_zip_code: null,
        permanent_phone: null,
        permanent_phone2: null,

        email: null,
        income: null,
        medical_service: null,
        scholarship: null,
        ocupation: null,
        religion: null,
        civil_state: null,

        clinic_record_date: null,

        /*temp_address: temp_address,*/
        temp_street: null,
        temp_num: null, 
        temp_suburb: null,
        temp_locality: null, 
        temp_municipality: null,
        temp_zip_code: null,
        temp_phone: null,
        temp_phone2: null,

        /*responsable_family_member: responsable_family_member,*/
        responsable_name: null,

        responsable_street: null,
        responsable_num: null, 
        responsable_suburb: null,
        responsable_locality: null, 
        responsable_municipality: null,
        responsable_zip_code: null,
        responsable_phone: null,
        responsable_phone2: null,

        responsable_relationship: null,

        /*personal_pathological_history: personalPathologicalHistory,*/
        chronic_degenerative_diseases: null,
        infectious_contagious_diseases: null,
        surgeries: null,
        surgeries_notes: null,
        jail: null,
        jail_notes: null,
        blood_transfusions: null,
        blood_transfusions_notes: null,
        allergies: null,
        allergies_notes: null,
        trauma: null,
        trauma_notes: null,
        alcoholism_consumption: null,
        alcoholism_starting_age: null,
        alcoholism_quantity: null,
        alcoholism_frequency: null,
        alcoholism_last_consumption: null,
        smoking_consumption: null,
        smoking_starting_age: null,
        smoking_quantity: null,
        smoking_frequency: null,
        smoking_last_consumption: null,
        drug_consumption: null,
        drug_starting_age: null,
        drug_quantity: null,
        drug_frequency: null,
        drug_last_consumption: null,

        /*male_sexual_health: male_sexual_health,*/
        male_start_sexual_life: null,
        male_sexual_partners: null,
        male_std: null,
        male_contraceptive_methods: null,

        /*female_sexual_health: female_sexual_health,*/
        female_menarche: false,
        female_menarche_age: null,
        female_rhythm: null,
        female_start_sexual_life: null,
        female_high_risk_partners: null,
        female_sexual_partners: null,
        female_std: null,
        female_std_notes: null,
        female_gestations: null,
        female_deliveries: null,
        female_cesarean_births: null,
        female_abortions: null,
        female_date_last_delivery: null,
        female_age_first_pregnancy: null,
        female_family_planning_methods: null,
        female_date_last_menstruation: null,
        female_menopause: null,
        female_hormonal_therapy: null,
        female_breastfeeding: null,
        female_last_pap_smear: null,
        female_last_pap_smear_result: null,
        female_last_hybrid_test: null,
        female_last_hybrid_test_result: null,
        female_last_mammography: null,
        female_last_mammography_result: null,

        /*apparatus_and_systems: apparatusAndSystems*/
        /*skin: skin,*/

        /*Cambios coloracion*/
        skin_paleness: false,
        skin_icterus: false,
        skin_cyanosis: false,

        skin_eruptions: false,
        skin_spots: false,
        skin_pruritus: false,
        skin_dryness: false,
        skin_volume_increase: false,
        skin_nails_hair: false,
        skin_nodules: false,
        skin_observations: null,

        /*ophthalmic_system: ophthalmic_system,*/
        /*Cambios vision*/
        ophthalmic_diplopia: false,
        ophthalmic_eye_pain: false,
        ophthalmic_photophobia: false,
        ophthalmic_amaurosis: false,
        ophthalmic_photopsies: false,
        ophthalmic_myodesopsias: false,
        ophthalmic_scotomas: false,
        ophthalmic_hemeralopia: false,
        ophthalmic_nyctalopia: false,

        /*Uso de lentes*/
        ophthalmic_myopia: false,
        ophthalmic_astigmatism: false,

        ophthalmic_observations: null,

        /*ent_system: ent_system,*/
        /*Cambios en la audicion*/
        ent_otalgia: false,
        ent_algiacusis: false,
        ent_presbycusis: false,
        ent_anacusis: false,
        ent_tinnitus: false,
        ent_ear_ringing: false,
        ent_hearing_loss: false,

        ent_ear_pain: false,
        ent_vertigo: false,
        ent_fluid_leaking_ear: false,
        ent_smelling_changes: false,
        ent_fluid_leaking_nose: false,
        ent_nose_pain: false,
        ent_observations: null,

        /*mouth_throat: mouth_throat,*/
        /*Dientes*/
        mouth_throat_cavities: false,
        mouth_throat_dental_agenesis: false,
        mouth_throat_prothesis: false,

        /*Encias */
        mouth_throat_gingivorrhea: false,
        mouth_throat_gingivorrhagia: false,
        mouth_throat_pain: false,
        mouth_throat_gums_ulcerations: false,

        /*Lengua*/
        mouth_throat_colorations: false,
        mouth_throat_size: false,
        mouth_throat_plaque_presence: false,
        mouth_throat_tongue_ulcerations: false,

        /*Problemas de hablar*/
        mouth_throat_dysphonia: false,
        mouth_throat_aphonia: false,

        mouth_throat_thirst: false,
        mouth_throat_speaking_eating_pain: false,
        mouth_throat_bad_breath: false,
        mouth_throat_excess_salivation: false,
        mouth_throat_observations: null,

        /*digestive_system: digestive_system,*/
        digestive_apettite_changes: false,
        digestive_sickness_vomit: false,
        digestive_abdominal_distention: false,

        /*Esofago*/
        digestive_abdominal_gastralgia: false,
        digestive_abdominal_acidity: false,
        digestive_abdominal_postrandial_fullness: false,

        /*Cambios de evacuacion*/
        digestive_abdominal_tenesmus: false,
        digestive_abdominal_bids: false,
        digestive_abdominal_encopresis: false,
        digestive_abdominal_anal_pain: false,
        digestive_abdominal_constipation: false,
        digestive_abdominal_rectal_bleeding: false,
        digestive_abdominal_hematochezia: false,

        /*Higado y vias biliares*/
        digestive_abdominal_jaundice: false,
        digestive_abdominal_pruritus: false,
        digestive_abdominal_fever: false,
        digestive_abdominal_ascites: false,
        digestive_abdominal_biliary_colic: false,
        digestive_abdominal_hepatic_colic: false,
        digestive_abdominal_acholia: false,

        /*Pancreas*/
        digestive_abdominal_steatorrhea: false,
        digestive_abdominal_diarrhea: false,
        digestive_abdominal_hypersalivation: false,
        digestive_abdominal_abdominal_pain: false,
        digestive_abdominal_back_pain: false,

        digestive_observations: null,

        /*respiratory_apparatus: respiratory_apparatus,*/
        respiratory_cough: false,
        respiratory_chest_pain: false,
        respiratory_hemoptysis: false,
        respiratory_vomiting_cough: false,
        respiratory_cyanosis: false,
        respiratory_fatigue: false,
        respiratory_breathing_problems: false,
        respiratory_breathing_changes: false,
        respiratory_observations: null,

        /*cardiovascular_apparatus: cardiovascular_apparatus,*/
        cardiovascular_dyspnoea: false,
        cardiovascular_orthopnea: false,
        cardiovascular_lipothymia: false,
        cardiovascular_syncope: false,
        cardiovascular_edema: false,
        cardiovascular_cyanosis: false,
        cardiovascular_chest_pain: false,
        cardiovascular_palpitations: false,
        cardiovascular_observations: null,

        /*genitourinary_system: genitourinary_system,*/
        genitourinary_urinating_changes: false,
        genitourinary_urinating_pain: false,
        genitourinary_urinating_difficulty: false,
        genitourinary_jet_changes: false,
        genitourinary_menstruation_changes: false,
        genitourinary_dyspareunia: false,
        genitourinary_libido_changes: false,
        genitourinary_observations: null,

        /*musculoskeletal_system: musculoskeletal_system,*/
        musculoskeletal_muscle_pain: false,
        musculoskeletal_joint_pain: false,
        musculoskeletal_joint_stiffness: false,
        musculoskeletal_nodules: false,
        musculoskeletal_bone_pain: false,
        musculoskeletal_ambulation_changes: false,
        musculoskeletal_observations: null,

        /*hematological_system: hematological_system,*/
        hematological_weakness: false,
        hematological_color_changes: false,
        hematological_bleeding: false,
        hematological_petechiae: false,
        hematological_ecchymosis: false,
        hematological_bruises: false,
        hematological_lymphadenopathy: false,
        hematological_observations: null,

        /*nervous_system: nervous_system,*/
        nervous_headache: false,
        nervous_seizures: false,
        nervous_memory_changes: false,
        nervous_sphincters_changes: false,
        nervous_loss_of_feeling: false,
        nervous_loss_of_movement: false,
        nervous_loss_of_balance: false,
        nervous_language_disorders: false,
        nervous_gait_changes: false,
        nervous_tremors: false,
        nervous_paralysis: false,
        nervous_parasthesia: false,
        nervous_paresis: false,
        nervous_observations: null,

        /*psychic_system: psychic_system,*/
        psychic_distress: false,
        psychic_depression: false,
        psychic_interest_changes: false,
        psychic_guilt: false,
        psychic_suicidal_thoughts: false,
        psychic_hallucinations: false,
        psychic_delirium: false,
        psychic_observations: null,

        physical_observations: null,

        /*follow_up: follow_up*/
        follow_up_treatment_changes: null,
        follow_up_treatment_changes_notes: null,
        follow_up_actual_symptoms: null,
        follow_up_last_medication_efects: null,
        follow_up_psychology_follow_up: null,
        follow_up_actual_diagnostic: null,

        studies: null,
        medicine: null,
        appointments: null,
        appointments_time: null,
        appointment_description: null,
    }

    generalInfo = {

        name: null,
        age: null,
        sex: null,
        birth_date: null,
        medical_dx: null,
        blood_type: null,
        emergency_contact_name: null,
        emergency_contact_num: null,
        shelter: null,
        companion: null,
        quimio: null

    }

    familyData = {
        first_member_name: null,
        first_member_age: null,
        first_member_relationship: null,
        first_member_civil_state: null,
        first_member_ocupation: null,
        first_member_income: null,

        second_member_name: null,
        second_member_age: null,
        second_member_relationship: null,
        second_member_civil_state: null,
        second_member_ocupation: null,
        second_member_income: null,

        third_member_name: null,
        third_member_age: null,
        third_member_relationship: null,
        third_member_civil_state: null,
        third_member_ocupation: null,
        third_member_income: null,

        fourth_member_name: null,
        fourth_member_age: null,
        fourth_member_relationship: null,
        fourth_member_civil_state: null,
        fourth_member_ocupation: null,
        fourth_member_income: null,

        fifth_member_name: null,
        fifth_member_age: null,
        fifth_member_relationship: null,
        fifth_member_civil_state: null,
        fifth_member_ocupation: null,
        fifth_member_income: null,

        sixth_member_name: null,
        sixth_member_age: null,
        sixth_member_relationship: null,
        sixth_member_civil_state: null,
        sixth_member_ocupation: null,
        sixth_member_income: null,

        seventh_member_name: null,
        seventh_member_age: null,
        seventh_member_relationship: null,
        seventh_member_civil_state: null,
        seventh_member_ocupation: null,
        seventh_member_income: null,

        paternal_grandfather_living: null,
        paternal_grandfather_diseases: null,
        paternal_grandfather_cause_of_death: null,

        paternal_grandmother_living: null,
        paternal_grandmother_diseases: null,
        paternal_grandmother_cause_of_death: null,

        maternal_grandfather_living: null,
        maternal_grandfather_diseases: null,
        maternal_grandfather_cause_of_death: null,

        maternal_grandmother_living: null,
        maternal_grandmother_diseases: null,
        maternal_grandmother_cause_of_death: null,

        father_living: null,
        father_diseases: null,
        father_cause_of_death: null,

        mother_living: null,
        mother_diseases: null,
        mother_cause_of_death: null,

        siblings_quantity: null,
        siblings_diseases: null,
        siblings_cause_of_death: null,

        sons_quantity: null,
        sons_diseases: null,
        sons_cause_of_death: null,

        number_sicks: null,

        household_member_substance: null,
        
        substance_alcohol: false,
        substance_glue: false,
        substance_cocaine: false,
        substance_tobacco: false,
        substance_marijuana: false,
        substance_tablets: false,
        substance_metamphetamine: false,
        substance_others: null,
        
        consuming_father: false,
        consuming_mother: false,
        consuming_tutor: false,
        consuming_son: false,
        consuming_spouse: false,
        consuming_uncle: false,
        consuming_grandparent: false,
        consuming_others: null,

        consuming_frequency: null
    }

    homeAndEconomy = {
        place_type: null,
        place_services: null,
        place_material: null,
        place_kitchen: null,
        place_lounge: null,
        place_dining_room: null,
        place_bedroom: null,
        place_bedroom_quantity: null,
        place_others: null,
        place_person_per_room: null,
        place_location: null,
        place_dust: false,
        place_wood_smoke: false,
        place_others_exposition: null,

        electrodomestics: null,
        air_conditioner: null,

        transportation: null,
        car_brand: null,
        car_model: null,

        geographic_area: null,

        outcome_electric_power: null,
        outcome_water: null,
        outcome_gas: null,
        outcome_phone: null,
        outcome_food: null,
        outcome_rent: null,
        outcome_transportation: null,
        outcome_education: null,
        outcome_clothing: null,
        outcome_recreational: null,
        outcome_other: null
    }    

    diet = {
        perceived_quality: null,
        meals_per_day: null,
        food_preparation: null,
        water_per_day: null,
        red_meat_week: null,
        red_meat_month: null,
        chicken_week: null,
        chicken_month: null,
        fish_week: null,
        fish_month: null,
        grain_week: null,
        grain_month: null,
        dairy_week:null,
        dairy_month: null,
        bread_week: null,
        bread_month: null,
        bread_pasta_week: null,
        bread_pasta_month: null,
        vegetables_fruits_week: null,
        vegetables_fruits_month: null,
    }

    hygienePassPhysAct = {
        shower_frequency: null,
        toothbrushing_frequency: null,
        home_hygiene: null,
        phys_activity: null,
        passtime: null,
    }

    others = {
        how_found_out: null,
        has_support_background: null,
        notes_support_background: null,
        observations: null,
        social_plan: null,

        socioeconomic_class_1: null,
        socioeconomic_class_2: null,
        socioeconomic_class_3: null,

        social_worker: null,

        animals: null,
        vaccinated_animals: false,
        ticks_animals: false,
        diseases_animals: false,
        vaccination_card: null,
    }

    state = {
        patient_folio: null,
        finished: false,
        general_info: this.generalInfo,
        patient_data: this.patientData,
        family_data: this.familyData,
        home_and_economy: this.homeAndEconomy,
        diet: this.diet,
        hygiene_pass_physact: this.hygienePassPhysAct,
        others: this.others
    }

    // Function to handle checkbox validation
    handleCheckboxGroup = (name,id,key,subkey) => {
        console.log("Calling cb handler for group:",name);
        var elements = document.getElementsByName(name);

        // Uncheck all the rest
        for(var i = 0; i < elements.length; i++){
            if (elements[i].id === id) {
                if(elements[i].checked){
                    this.updateFormState(key,subkey,elements[i].value);
                }
                else{
                    this.updateFormState(key,subkey,null);
                }
            }
            else{
                elements[i].checked = false;
            }
        }

    }

    handleBooleanCheckbox = (id,key,subkey) => {
        var element = document.getElementById(id);
        if(element.checked){
            this.updateFormState(key,subkey,true);
        }
        else{
            this.updateFormState(key,subkey,false);
        }
    }

    setCheckboxGroup = (name, value) => {
        if(typeof value != "undefined" && value != null){
            var elements = document.getElementsByName(name);
            console.log("Searching for value " + value + " in group " + name);

            var i = 0;
            var flag = false;
            while(i < elements.length && !flag){
                if(elements[i].value === String(value)){
                    elements[i].checked = true;
                    flag = true;
                    console.log("Found in element", i);
                }
                i++;
            }
        } else {
            console.log("No value to search in group", name);
        }
    }

    updateFormState = (key,subkey,value) => {
        this.setState({
            ...this.state,
            [key]: {
                ...this.state[key],
                [subkey]: value
            }
        })
    }

    setPatientFolio = (folio) => {
        this.setState({
            ...this.state,
            patient_folio: folio
        })
    }

    resetFormState = () => {
        this.state = {
            patient_folio: null,
            finished: false,
            general_info: this.generalInfo,
            patient_data: this.patientData,
            family_data: this.familyData,
            home_and_economy: this.homeAndEconomy,
            diet: this.diet,
            hygiene_pass_physact: this.hygienePassPhysAct,
            others: this.others
        }
    }

    setForm = (form) => {
        this.setState({
            ...this.state,
            patient_data: {
                ...this.state.patient_data,

                folio: form.patient_folio,
        
                birth_state: form.datos_paciente.entidad_nacimiento,
                birth_city: form.datos_paciente.ciudad_nacimiento,
        
                permanent_street: form.datos_paciente.direccion_permanente.calle,
                permanent_num: form.datos_paciente.direccion_permanente.num, 
                permanent_suburb: form.datos_paciente.direccion_permanente.colonia,
                permanent_locality: form.datos_paciente.direccion_permanente.localidad,
                permanent_municipality: form.datos_paciente.direccion_permanente.municipio,
                permanent_zip_code: form.datos_paciente.direccion_permanente.cp,
                permanent_phone: form.datos_paciente.direccion_permanente.tel,
                permanent_phone2: form.datos_paciente.direccion_permanente.tel2,
        
                email: form.datos_paciente.correo,
                income: form.datos_paciente.ingreso,
                medical_service: form.datos_paciente.servicio_medico,
                scholarship: form.datos_paciente.escolaridad,
                ocupation: form.datos_paciente.ocupacion,
                religion: form.datos_paciente.religion,
                civil_state: form.datos_paciente.estado_civil,
        
                clinic_record_date: form.datos_paciente.realizacion_historial_clinico,
        
                temp_street: form.datos_paciente.direccion_temporal.calle,
                temp_num: form.datos_paciente.direccion_temporal.num,
                temp_suburb: form.datos_paciente.direccion_temporal.colonia,
                temp_locality: form.datos_paciente.direccion_temporal.localidad,
                temp_municipality: form.datos_paciente.direccion_temporal.municipio,
                temp_zip_code: form.datos_paciente.direccion_temporal.cp,
                temp_phone: form.datos_paciente.direccion_temporal.tel,
                temp_phone2: form.datos_paciente.direccion_temporal.tel2,

                //responsable_name: form.datos_paciente.familiar_responsable.nombre_responsable,
        
                responsable_street: form.datos_paciente.familiar_responsable.direccion_responsable.calle,
                responsable_num: form.datos_paciente.familiar_responsable.direccion_responsable.num,
                responsable_suburb: form.datos_paciente.familiar_responsable.direccion_responsable.colonia,
                responsable_locality: form.datos_paciente.familiar_responsable.direccion_responsable.localidad,
                responsable_municipality: form.datos_paciente.familiar_responsable.direccion_responsable.municipio,
                responsable_zip_code: form.datos_paciente.familiar_responsable.direccion_responsable.cp,
                responsable_phone: form.datos_paciente.familiar_responsable.direccion_responsable.tel,
                responsable_phone2: form.datos_paciente.familiar_responsable.direccion_responsable.tel2,
        
                responsable_relationship: form.datos_paciente.familiar_responsable.parentesco_responsable,
        
                chronic_degenerative_diseases: form.datos_paciente.antecedentes_personales_patologicos.enfermedades_cronicodegenerativas,
                infectious_contagious_diseases: form.datos_paciente.antecedentes_personales_patologicos.enfermedades_infectocontagiosas,

                surgeries: form.datos_paciente.cirugias.antecedentes_personales_patologicos.tiene_antecedente,
                surgeries_notes: form.datos_paciente.cirugias.antecedentes_personales_patologicos.notas,
                
                jail: form.datos_paciente.antecedentes_personales_patologicos.carcel.tiene_antecedente,
                jail_notes: form.datos_paciente.antecedentes_personales_patologicos.carcel.notas,
                
                blood_transfusions: form.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.tiene_antecedente,
                blood_transfusions_notes: form.datos_paciente.antecedentes_personales_patologicos.transfusiones_sanguineas.notas,
                
                allergies: form.datos_paciente.antecedentes_personales_patologicos.alergias.tiene_antecedente,
                allergies_notes: form.datos_paciente.antecedentes_personales_patologicos.alergias.notas,
                
                
                trauma: form.datos_paciente.antecedentes_personales_patologicos.traumatismos.tiene_antecedente,
                trauma_notes: form.datos_paciente.antecedentes_personales_patologicos.traumatismos.notas,

                alcoholism_consumption: form.datos_paciente.antecedentes_personales_patologicos.alcoholismo.consumo,
                alcoholism_starting_age: form.datos_paciente.antecedentes_personales_patologicos.alcoholismo.edad_inicio,
                alcoholism_quantity: form.datos_paciente.antecedentes_personales_patologicos.alcoholismo.cantidad,
                alcoholism_frequency: form.datos_paciente.antecedentes_personales_patologicos.alcoholismo.frecuencia,
                alcoholism_last_consumption: form.datos_paciente.antecedentes_personales_patologicos.alcoholismo.ultimo_consumo,

                smoking_consumption: form.datos_paciente.antecedentes_personales_patologicos.tabaquismo.consumo,
                smoking_starting_age: form.datos_paciente.antecedentes_personales_patologicos.tabaquismo.edad_inicio,
                smoking_quantity: form.datos_paciente.antecedentes_personales_patologicos.tabaquismo.cantidad,
                smoking_frequency: form.datos_paciente.antecedentes_personales_patologicos.tabaquismo.frecuencia,
                smoking_last_consumption: form.datos_paciente.antecedentes_personales_patologicos.tabaquismo.ultimo_consumo,

                drug_consumption: form.datos_paciente.antecedentes_personales_patologicos.toxicomanias.consumo,
                drug_starting_age: form.datos_paciente.antecedentes_personales_patologicos.toxicomanias.edad_inicio,
                drug_quantity: form.datos_paciente.antecedentes_personales_patologicos.toxicomanias.cantidad,
                drug_frequency: form.datos_paciente.antecedentes_personales_patologicos.toxicomanias.frecuencia,
                drug_last_consumption: form.datos_paciente.antecedentes_personales_patologicos.toxicomanias.ultimo_consumo,
        
                male_start_sexual_life: form.datos_paciente.en_caso_de_ser_hombre.inicio_vida_sexual,
                male_sexual_partners: form.datos_paciente.en_caso_de_ser_hombre.parejas_sexuales,
                male_std: form.datos_paciente.en_caso_de_ser_hombre.ets,
                male_contraceptive_methods: form.datos_paciente.en_caso_de_ser_hombre.metodos_anticonceptivos,
        
                female_menarche: form.datos_paciente.en_caso_de_ser_mujer.menarca,
                female_menarche_age: form.datos_paciente.en_caso_de_ser_mujer.edad_menarca,
                female_rhythm: form.datos_paciente.en_caso_de_ser_mujer.ritmo_menarca,
                female_start_sexual_life: form.datos_paciente.en_caso_de_ser_mujer.inicio_vida_sexual,
                female_high_risk_partners: form.datos_paciente.en_caso_de_ser_mujer.parejas_alto_riesgo,
                female_sexual_partners: form.datos_paciente.en_caso_de_ser_mujer.parejas_sexuales,

                female_std: form.datos_paciente.en_caso_de_ser_mujer.ets.tiene_antecedente,
                female_std_notes: form.datos_paciente.en_caso_de_ser_mujer.ets.notas,
                
                female_gestations: form.datos_paciente.en_caso_de_ser_mujer.gestas,
                female_deliveries: form.datos_paciente.en_caso_de_ser_mujer.partos,
                female_cesarean_births: form.datos_paciente.en_caso_de_ser_mujer.cesareas,
                female_abortions: form.datos_paciente.en_caso_de_ser_mujer.abortos,
                female_date_last_delivery: form.datos_paciente.en_caso_de_ser_mujer.fecha_ultimo_parto,
                female_age_first_pregnancy: form.datos_paciente.en_caso_de_ser_mujer.edad_primer_embarazo,
                female_family_planning_methods: form.datos_paciente.en_caso_de_ser_mujer.metodos_planificacion_familiar,
                female_date_last_menstruation: form.datos_paciente.en_caso_de_ser_mujer.fecha_ultima_regla.$date,
                female_menopause: form.datos_paciente.en_caso_de_ser_mujer.menopausia,
                female_hormonal_therapy: form.datos_paciente.en_caso_de_ser_mujer.terapia_remplazo_hormonal,
                female_breastfeeding: form.datos_paciente.en_caso_de_ser_mujer.lactancia_materna,
                
                female_last_pap_smear: form.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.fecha.$date,
                female_last_pap_smear_result: form.datos_paciente.en_caso_de_ser_mujer.ultimo_papanicolaou.resultado,
                
                female_last_hybrid_test: form.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.fecha.$date,
                female_last_hybrid_test_result: form.datos_paciente.en_caso_de_ser_mujer.ultima_prueba_hibridos.resultado,
                
                female_last_mammography: form.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.fecha.$date,
                female_last_mammography_result: form.datos_paciente.en_caso_de_ser_mujer.ultima_mamografia.resultado,
        
        
                /*Cambios coloracion*/
                skin_paleness: form.datos_paciente.aparatos_y_sistemas.piel.palidez,
                skin_icterus: form.datos_paciente.aparatos_y_sistemas.piel.ictericia,
                skin_cyanosis: form.datos_paciente.aparatos_y_sistemas.piel.cianosis,
        
                skin_eruptions: form.datos_paciente.aparatos_y_sistemas.piel.erupciones,
                skin_spots: form.datos_paciente.aparatos_y_sistemas.piel.manchas,
                skin_pruritus: form.datos_paciente.aparatos_y_sistemas.piel.prurito,
                skin_dryness: form.datos_paciente.aparatos_y_sistemas.piel.sequedad,
                skin_volume_increase: form.datos_paciente.aparatos_y_sistemas.piel.aumento_volumen,
                skin_nails_hair: form.datos_paciente.aparatos_y_sistemas.piel.unas_pelo,
                skin_nodules: form.datos_paciente.aparatos_y_sistemas.piel.nodulos,
                skin_observations: form.datos_paciente.aparatos_y_sistemas.piel.observaciones,
        
                /*Cambios vision*/
                ophthalmic_diplopia: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.diplopia,
                ophthalmic_eye_pain: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.dolor_ocular,
                ophthalmic_photophobia: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotofobia,
                ophthalmic_amaurosis: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.amaurosis,
                ophthalmic_photopsies: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.fotopsias,
                ophthalmic_myodesopsias: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miodesopsias,
                ophthalmic_scotomas: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.scotomas,
                ophthalmic_hemeralopia: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.hemeralopia,
                ophthalmic_nyctalopia: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.nictalopia,
        
                /*Uso de lentes*/
                ophthalmic_myopia: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.miopia,
                ophthalmic_astigmatism: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.astigmatismo,
        
                ophthalmic_observations: form.datos_paciente.aparatos_y_sistemas.sistema_oftalmologico.observaciones,
        
                /*Cambios en la audicion*/
                ent_otalgia: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.otalgia,
                ent_algiacusis: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.algiacusia,
                ent_presbycusis: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.presbiacusia,
                ent_anacusis: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.anacusia,
                ent_tinnitus: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.tinnitus,
                ent_ear_ringing: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.acufenos,
                ent_hearing_loss: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.hipoacusia,
        
                ent_ear_pain: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_oido,
                ent_vertigo: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.vertigo,
                ent_fluid_leaking_ear: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_oido,
                ent_smelling_changes: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.cambios_olfato,
                ent_fluid_leaking_nose: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.salida_liquido_nariz,
                ent_nose_pain: form.datos_paciente.aparatos_y_sistemas.sistema_otorrinolaringologico.dolor_nariz,
        
                /*Dientes*/
                mouth_throat_cavities: form.datos_paciente.aparatos_y_sistemas.boca_garganta.caries,
                mouth_throat_dental_agenesis: form.datos_paciente.aparatos_y_sistemas.boca_garganta.agenesia_dental,
                mouth_throat_prothesis: form.datos_paciente.aparatos_y_sistemas.boca_garganta.dientes_protesis,
        
                /*Encias */
                mouth_throat_gingivorrhea: form.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorrea,
                mouth_throat_gingivorrhagia: form.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_gingivorragia,
                mouth_throat_pain: form.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_dolor_encias,
                mouth_throat_gums_ulcerations: form.datos_paciente.aparatos_y_sistemas.boca_garganta.encias_ulceras,
        
                /*Lengua*/
                mouth_throat_colorations: form.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_coloraciones,
                mouth_throat_size: form.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_tamaño,
                mouth_throat_plaque_presence: form.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_presencia_placa,
                mouth_throat_tongue_ulcerations: form.datos_paciente.aparatos_y_sistemas.boca_garganta.lengua_ulceras,
        
                /*Problemas de hablar*/
                mouth_throat_dysphonia: form.datos_paciente.aparatos_y_sistemas.boca_garganta.disfonia,
                mouth_throat_aphonia: form.datos_paciente.aparatos_y_sistemas.boca_garganta.afonia,
        
                mouth_throat_thirst: form.datos_paciente.aparatos_y_sistemas.boca_garganta.sed,
                mouth_throat_speaking_eating_pain: form.datos_paciente.aparatos_y_sistemas.boca_garganta.dolor_comer_hablar,
                mouth_throat_bad_breath: form.datos_paciente.aparatos_y_sistemas.boca_garganta.mal_aliento,
                mouth_throat_excess_salivation: form.datos_paciente.aparatos_y_sistemas.boca_garganta.exceso_salivacion,
                mouth_throat_observations: form.datos_paciente.aparatos_y_sistemas.boca_garganta.observaciones,
        
                digestive_apettite_changes: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.cambio_apetito,
                digestive_sickness_vomit: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.nauseas_vomito,
                digestive_abdominal_distention: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.distension_abdominal,
        
                /*Esofago*/
                digestive_abdominal_gastralgia: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.gastralgia,
                digestive_abdominal_acidity: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acidez,
                digestive_abdominal_postrandial_fullnes: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.llenura_postprandial,
        
                /*Cambios de evacuacion*/
                digestive_abdominal_tenesmus: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.tenesmo,
                digestive_abdominal_bids: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.pujos,
                digestive_abdominal_encopresis: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.encopresis,
                digestive_abdominal_anal_pain: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_anal,
                digestive_abdominal_constipation: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.constipacion,
                digestive_abdominal_rectal_bleeding: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.rectorragia,
                digestive_abdominal_hematochezia: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.hematoquecia,
        
                /*Higado y vias biliares*/
                digestive_abdominal_jaundice: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ictericia,
                digestive_abdominal_pruritus: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.prurito,
                digestive_abdominal_fever: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ulcerations,
                digestive_abdominal_ascites: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.ascitis,
                digestive_abdominal_biliary_colic: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_biliar,
                digestive_abdominal_hepatic_colic: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.colico_epatitico,
                digestive_abdominal_acholia: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.acolia,
        
                /*Pancreas*/
                digestive_abdominal_steatorrhea: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.esteatorrea,
                digestive_abdominal_diarrhea: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.diarrea,
                digestive_abdominal_hypersalivation: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.sialorrea,
                digestive_abdominal_abdominal_pain: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_abdomen,
                digestive_abdominal_back_pain: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.dolor_espalda,
        
                digestive_observations: form.datos_paciente.aparatos_y_sistemas.sistema_digestivo.observaciones,
        
                respiratory_cough: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.tos,
                respiratory_chest_pain: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.dolor_toracico,
                respiratory_hemoptysis: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.hemoptisis,
                respiratory_vomiting_cough: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.vomica,
                respiratory_cyanosis: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cianosis,
                respiratory_fatigue: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.fatiga,
                respiratory_breathing_problems: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.problemas_respirar,
                respiratory_breathing_changes: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.cambios_respiracion,
                respiratory_observations: form.datos_paciente.aparatos_y_sistemas.aparato_respiratorio.observaciones,
        
                cardiovascular_dyspnoea: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.disnea,
                cardiovascular_orthopnea: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.ortopnea,
                cardiovascular_lipothymia: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.lipotimia,
                cardiovascular_syncope: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular,
                cardiovascular_edema: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.edema,
                cardiovascular_cyanosis: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.cianosis,
                cardiovascular_chest_pain: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.color_toracico,
                cardiovascular_palpitations: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.palpitaciones,
                cardiovascular_observations: form.datos_paciente.aparatos_y_sistemas.aparato_cardiovascular.observaciones,
        
                genitourinary_urinating_changes: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_miccionar,
                genitourinary_urinating_pain: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dolor_miccionar,
                genitourinary_jet_changes: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_chorro,
                genitourinary_menstruation_changes: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_menstruacion,
                genitourinary_dyspareunia: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.dispareunia,
                genitourinary_libido_changes: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.cambios_libido,
                genitourinary_observations: form.datos_paciente.aparatos_y_sistemas.sistema_genitourinario.observaciones,
        
                musculoskeletal_muscle_pain: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_muscular,
                musculoskeletal_joint_pain: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_articular,
                musculoskeletal_joint_stiffness: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.rigidez_articular,
                musculoskeletal_nodules: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.nodulos,
                musculoskeletal_bone_pain: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.dolor_osea,
                musculoskeletal_ambulation_changes: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.cambios_deambulacion,
                musculoskeletal_observations: form.datos_paciente.aparatos_y_sistemas.sistema_musculo_esqueletico.observaciones,
        
                hematological_weakness: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.debilidad,
                hematological_color_changes: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.cambios_coloracion,
                hematological_bleeding: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hemorragias,
                hematological_petechiae: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.petequias,
                hematological_ecchymosis: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.equimosis,
                hematological_bruises: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.hematomas,
                hematological_lymphadenopathy: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.adenopatias,
                hematological_observations: form.datos_paciente.aparatos_y_sistemas.sistema_hematologico.observaciones,
        
                nervous_headache: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cefalea,
                nervous_seizures: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.convulsiones,
                nervous_memory_changes: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_memoria,
                nervous_sphincters_changes: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_esfinteres,
                nervous_loss_of_feeling: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_sensacion,
                nervous_loss_of_movement: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_movimiento,
                nervous_loss_of_balance: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.perdida_equilibrio,
                nervous_language_disorders: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.trastornos_lenguaje,
                nervous_gait_changes: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.cambios_marcha,
                nervous_tremors: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.temblores,
                nervous_paralysis: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paralisis,
                nervous_parasthesia: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.parestesias,
                nervous_paresis: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.paresias,
                nervous_observations: form.datos_paciente.aparatos_y_sistemas.sistema_nervioso.observaciones,
        
                psychic_distress: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.angustia,
                psychic_depression: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.depresion,
                psychic_interest_changes: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.cambios_interes,
                psychic_guilt: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.culpa,
                psychic_suicidal_thoughts: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.ideas_suicidas,
                psychic_hallucinations: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.alucinaciones,
                psychic_delirium: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.delirio,
                psychic_observations: form.datos_paciente.aparatos_y_sistemas.sistema_psiquico.observaciones,
        
                physical_observations: form.datos_paciente.aparatos_y_sistemas.observaciones_exploracion_fisica,
        
                follow_up_treatment_changes: form.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.tiene_antecedente,
                follow_up_treatment_changes_notes: form.datos_paciente.aparatos_y_sistemas.seguimiento.cambios_tratamiento.notas,
                follow_up_actual_symptoms: form.datos_paciente.aparatos_y_sistemas.seguimiento.sintomas_actuales.sintomas_actuales,
                follow_up_last_medication_efects: form.datos_paciente.aparatos_y_sistemas.seguimiento.efectos_ultima_administracion_medicamentos,
                follow_up_psychology_follow_up: form.datos_paciente.aparatos_y_sistemas.seguimiento.seguimiento_psicologico,
                follow_up_actual_diagnostic: form.datos_paciente.aparatos_y_sistemas.seguimiento.diagnostico_actual,
        
                studies: this.studies,
                medicine: this.medicine,
                appointments: this.appointments,
                appointments_time: this.appointments_time,
                appointment_description: this.appointment_description,
            },
        
            ["family_data"]: {
                ...this.state["family_data"],
                first_member_name: form.datos_familia.estructura_familiar.primer_nombre_familiar,
                first_member_age: form.datos_familia.estructura_familiar.primera_edad_familiar,
                first_member_relationship: form.datos_familia.estructura_familiar.primer_parentesco_familiar,
                first_member_civil_state: form.datos_familia.estructura_familiar.primer_estado_civil_familiar,
                first_member_ocupation: form.datos_familia.estructura_familiar.primer_ocupacion_familiar,
                first_member_income: form.datos_familia.estructura_familiar.primer_ingreso_familiar,
        
                second_member_name: form.datos_familia.estructura_familiar.segundo_nombre_familiar,
                second_member_age: form.datos_familia.estructura_familiar.segunda_edad_familiar,
                second_member_relationship: form.datos_familia.estructura_familiar.segundo_parentesco_familiar,
                second_member_civil_state: form.datos_familia.estructura_familiar.segundo_estado_civil_familiar,
                second_member_ocupation: form.datos_familia.estructura_familiar.segundo_ocupacion_familiar,
                second_member_income: form.datos_familia.estructura_familiar.segundo_ingreso_familiar,
        
                third_member_name: form.datos_familia.estructura_familiar.tercer_nombre_familiar,
                third_member_age: form.datos_familia.estructura_familiar.tercera_edad_familiar,
                third_member_relationship: form.datos_familia.estructura_familiar.tercer_parentesco_familiar,
                third_member_civil_state: form.datos_familia.estructura_familiar.tercer_estado_civil_familiar,
                third_member_ocupation: form.datos_familia.estructura_familiar.tercer_ocupacion_familiar,
                third_member_income: form.datos_familia.estructura_familiar.tercer_ingreso_familiar,
        
                fourth_member_name: form.datos_familia.estructura_familiar.cuarto_nombre_familiar,
                fourth_member_age: form.datos_familia.estructura_familiar.cuarta_edad_familiar,
                fourth_member_relationship: form.datos_familia.estructura_familiar.cuarto_parentesco_familiar,
                fourth_member_civil_state: form.datos_familia.estructura_familiar.cuarto_estado_civil_familiar,
                fourth_member_ocupation: form.datos_familia.estructura_familiar.cuarto_ocupacion_familiar,
                fourth_member_income: form.datos_familia.estructura_familiar.cuarto_ingreso_familiar,
        
                fifth_member_name: form.datos_familia.estructura_familiar.quinto_nombre_familiar,
                fifth_member_age: form.datos_familia.estructura_familiar.quinta_edad_familiar,
                fifth_member_relationship: form.datos_familia.estructura_familiar.quinto_parentesco_familiar,
                fifth_member_civil_state: form.datos_familia.estructura_familiar.quinto_estado_civil_familiar,
                fifth_member_ocupation: form.datos_familia.estructura_familiar.quinto_ocupacion_familiar,
                fifth_member_income: form.datos_familia.estructura_familiar.quinto_ingreso_familiar,
        
                sixth_member_name: form.datos_familia.estructura_familiar.sexto_nombre_familiar,
                sixth_member_age: form.datos_familia.estructura_familiar.sexta_edad_familiar,
                sixth_member_relationship: form.datos_familia.estructura_familiar.sexto_parentesco_familiar,
                sixth_member_civil_state: form.datos_familia.estructura_familiar.sexto_estado_civil_familiar,
                sixth_member_ocupation: form.datos_familia.estructura_familiar.sexto_ocupacion_familiar,
                sixth_member_income: form.datos_familia.estructura_familiar.sexto_ingreso_familiar,
        
                seventh_member_name: form.datos_familia.estructura_familiar.séptimo_nombre_familiar,
                seventh_member_age: form.datos_familia.estructura_familiar.séptima_edad_familiar,
                seventh_member_relationship: form.datos_familia.estructura_familiar.séptimo_parentesco_familiar,
                seventh_member_civil_state: form.datos_familia.estructura_familiar.séptimo_estado_civil_familiar,
                seventh_member_ocupation: form.datos_familia.estructura_familiar.séptimo_ocupacion_familiar,
                seventh_member_income: form.datos_familia.estructura_familiar.séptimo_ingreso_familiar,
        
                paternal_grandfather_living: form.datos_familia.antecedentes_familiares.abuelo_paterno.vive,
                paternal_grandfather_diseases: form.datos_familia.antecedentes_familiares.abuelo_paterno.enfermedades,
                paternal_grandfather_cause_of_death: form.datos_familia.antecedentes_familiares.abuelo_paterno.causa_defuncion,
        
                paternal_grandmother_living: form.datos_familia.antecedentes_familiares.abuela_paterna.vive,
                paternal_grandmother_diseases: form.datos_familia.antecedentes_familiares.abuela_paterna.enfermedades,
                paternal_grandmother_cause_of_death: form.datos_familia.antecedentes_familiares.abuela_paterna.causa_defuncion,
        
                maternal_grandfather_living: form.datos_familia.antecedentes_familiares.abuelo_materno.vive,
                maternal_grandfather_diseases: form.datos_familia.antecedentes_familiares.abuelo_materno.enfermedades,
                maternal_grandfather_cause_of_death: form.datos_familia.antecedentes_familiares.abuelo_materno.causa_defuncion,
        
                maternal_grandmother_living: form.datos_familia.antecedentes_familiares.abuela_materna.vive,
                maternal_grandmother_diseases: form.datos_familia.antecedentes_familiares.abuela_materna.enfermedades,
                maternal_grandmother_cause_of_death: form.datos_familia.antecedentes_familiares.abuela_materna.causa_defuncion,
        
                father_living: form.datos_familia.antecedentes_familiares.padre.vive,
                father_diseases: form.datos_familia.antecedentes_familiares.padre.enfermedades,
                father_cause_of_death: form.datos_familia.antecedentes_familiares.padre.causa_defuncion,
        
                mother_living: form.datos_familia.antecedentes_familiares.madre.vive,
                mother_diseases: form.datos_familia.antecedentes_familiares.madre.enfermedades,
                mother_cause_of_death: form.datos_familia.antecedentes_familiares.madre.causa_defuncion,
        
                siblings_quantity: form.datos_familia.antecedentes_familiares.hermanos,
                siblings_diseases: form.datos_familia.antecedentes_familiares.hermanos,
                siblings_cause_of_death: form.datos_familia.antecedentes_familiares.hermanos,
        
                sons_quantity: form.datos_familia.antecedentes_familiares.hijos.cantidad,
                sons_diseases: form.datos_familia.antecedentes_familiares.hijos.enfermedades,
                sons_cause_of_death: form.datos_familia.antecedentes_familiares.hijos.causa_defuncion,
        
                number_sicks: form.datos_familia.numero_de_enfermos,
        
                household_member_substance: form.datos_familia.consume_sustancias_toxicas.consume_miembro_vivienda,
                substance_consumed: form.datos_familia.consume_sustancias_toxicas.sustancia_consumida,
                consuming_member: form.datos_familia.consume_sustancias_toxicas.miembro_consumidor,
                consuming_frequency: form.datos_familia.consume_sustancias_toxicas.frecuencia_consumo
            },
        
            ["home_and_economy"]: {
                ...this.state["home_and_economy"],

                place_type: form.casa_economia.vivienda.tipo_vivienda,
                place_services: form.casa_economia.vivienda.servicios_vivienda,
                place_material: form.casa_economia.vivienda.material_vivienda,
                place_kitchen: form.casa_economia.vivienda.distribucion_vivienda.cocina,
                place_lounge: form.casa_economia.vivienda.distribucion_vivienda.sala,
                place_dining_room: form.casa_economia.vivienda.distribucion_vivienda.comedor,
                place_bedroom: form.casa_economia.vivienda.distribucion_vivienda.recamara,
                place_bedroom_quantity: form.casa_economia.vivienda.distribucion_vivienda.cantidad_de_recamaras,
                place_others: form.casa_economia.vivienda.distribucion_vivienda.otros_cuartos,
                place_person_per_room: form.casa_economia.vivienda.personas_por_cuarto_vivienda,
                place_location: form.casa_economia.vivienda.zona_vivienda,
                place_exposition: form.casa_economia.vivienda.exposicion_biomasas,
        
                electrodomestics: form.casa_economia.bienes_hogar.electrodomesticos,
                air_conditioner: form.casa_economia.bienes_hogar.refrigeracion,
        
                transportation: form.casa_economia.transporte_familiar.transporte,
                car_brand: form.casa_economia.transporte_familiar.marca_auto,
                car_model: form.casa_economia.transporte_familiar.modelo_auto,
        
                geographic_area: form.casa_economia.area_geografica,
        
                sick_members: form.casa_economia.familiares_enfermos,
        
                outcome_electric_power: form.casa_economia.egresos.energia_electrica_egreso,
                outcome_water: form.casa_economia.egresos.agua_egreso,
                outcome_gas: form.casa_economia.egresos.gas_egreso,
                outcome_phone: form.casa_economia.egresos.telefono_egreso,
                outcome_food: form.casa_economia.egresos.alimentos_egreso,
                outcome_rent: form.casa_economia.egresos.renta_egreso,
                outcome_transportation: form.casa_economia.egresos.transporte_egreso,
                outcome_education: form.casa_economia.egresos.educacion_egreso,
                outcome_clothing: form.casa_economia.egresos.vestimenta_egreso,
                outcome_recreational: form.casa_economia.egresos.diversion_egreso,
                outcome_other: form.casa_economia.egresos.otros_egreso
            },   
        
            ["diet"]: {
                ...this.state["diet"],

                perceived_quality: form.alimentacion.calidad_percibida,
                meals_per_day: form.alimentacion.comidas_al_dia,
                food_preparation: form.alimentacion.preparacion_alimentos,
                water_per_day: form.alimentacion.agua_al_dia,
                red_meat_week: form.alimentacion.carne_roja_semana,
                red_meat_month: form.alimentacion.carne_roja_mes,
                chicken_week: form.alimentacion.pollo_semana,
                chicken_month: form.alimentacion.pollo_mes,
                fish_week: form.alimentacion.pescado_semana,
                fish_month: form.alimentacion.pescado_mes,
                grain_week: form.alimentacion.granos_semana,
                grain_month: form.alimentacion.granos_mes,
                dairy_week: form.alimentacion.lacteos_semana,
                dairy_month: form.alimentacion.lacteos_mes,
                bread_week: form.alimentacion.pan_semana,
                bread_month: form.alimentacion.pan_mes,
                bread_pasta_week: form.alimentacion.bread_pasta_semana,
                bread_pasta_month: form.alimentacion.bread_pasta_mes,
                vegetables_fruits_week: form.alimentacion.verduras_frutas_semana,
                vegetables_fruits_month: form.alimentacion.verduras_frutas_mes,
            },
        
            ["hygiene_pass_physact"]: {
                ...this.state["hygiene_pass_physact"],

                shower_frequency: form.higiene_act_fis_pasatiempo.frecuencia_duchas,
                toothbrushing_frequency: form.higiene_act_fis_pasatiempo.frecuencia_lavar_dientes,
                home_hygiene: form.higiene_act_fis_pasatiempo.higiene_hogar,
                phys_activity: form.higiene_act_fis_pasatiempo.actividad_fisica,
                passtime: form.higiene_act_fis_pasatiempo.pasatiempo,
            },
        
            ["others"]: {
                ...this.state["others"],
                
                how_found_out: form.otros.como_se_entero,
                has_support_background: form.otros.antecedentes_apoyo.tiene_antecedente,
                notes_support_background: form.otros.antecedentes_apoyo.notas,
                observations: form.otros.observations,
                social_plan: form.otros.plan_social,
                socioeconomic_class: form.otros.clase_socioeconomica,
                social_worker: form.otros.trabajador_social,
                animals: form.otros.animales,
                vaccinated_animals: form.otros.animales_vacunados,
                ticks_animals: form.otros.animales_garrapatas,
                diseases_animals: form.otros.animales_enfermedades,
                vaccination_card: form.otros.cartilla_vacunacion,
            }
        })
    }

    render(){
        const contextValue = {
            formState:this.state,
            updateFormState:this.updateFormState,
            resetFormState:this.resetFormState,
            setPatientFolio:this.setPatientFolio,
            setForm:this.setForm,
            handleCheckboxGroup:this.handleCheckboxGroup,
            handleBooleanCheckbox:this.handleBooleanCheckbox,
            setCheckboxGroup:this.setCheckboxGroup
        }
        return(
            <FormContext.Provider value={contextValue}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default FormContextProvider;