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
        var elements = document.getElementsByName(name);
        console.log(elements);

        // Uncheck all the rest
        for(var i = 0; i < elements.length; i++){
            if (elements[i].id === id) {
                if(elements[i].checked){
                    if (elements[i].value == "false"){
                        this.updateFormState(key,subkey,false);
                    } else {
                        this.updateFormState(key,subkey,elements[i].value);
                    }
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
        if(value != null){
            var elements = document.getElementsByName(name);
            console.log(elements);

            var i = 0;
            var flag = false;
            while(i < elements.length && !flag){
                console.log(elements[i].value);
                if(elements[i].value == String(value)){
                    elements[i].checked = true;
                    flag = true;
                }
                i++;
            }
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

    render(){
        const contextValue = {
            formState:this.state,
            updateFormState:this.updateFormState,
            resetFormState:this.resetFormState,
            setPatientFolio:this.setPatientFolio,
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