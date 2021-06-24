import React, { createContext,Component } from "react";

export const FormContext = createContext();

class FormContextProvider extends Component {
    constructor(){
        super();
    }

    patientData = {

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
        female_menarche: null,
        female_menarche_age: null,
        female_rhythm: null,
        female_start_sexual_life: null,
        female_high_risk_partners: null,
        female_sexual_partners: null,
        female_std: null,
        female_std_notes: null,
        female_gestations: null,
        female_deliveries: null,
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
        skin_paleness: null,
        skin_icterus: null,
        skin_cyanosis: null,

        skin_eruptions: null,
        skin_spots: null,
        skin_pruritus: null,
        skin_dryness: null,
        skin_volume_increase: null,
        skin_nails_hair: null,
        skin_nodules: null,
        skin_observations: null,

        /*ophthalmic_system: ophthalmic_system,*/
        /*Cambios vision*/
        ophthalmic_diplopia: null,
        ophthalmic_eye_pain: null,
        ophthalmic_photophobia: null,
        ophthalmic_amaurosis: null,
        ophthalmic_photopsies: null,
        ophthalmic_myodesopsias: null,
        ophthalmic_scotomas: null,
        ophthalmic_hemeralopia: null,
        ophthalmic_nyctalopia: null,

        /*Uso de lentes*/
        ophthalmic_myopia: null,
        astigmatism: null,

        ophthalmic_observations: null,

        /*ent_system: ent_system,*/
        /*Cambios en la audicion*/
        ent_otalgia: null,
        ent_algiacusis: null,
        ent_presbycusis: null,
        ent_anacusis: null,
        ent_tinnitus: null,
        ent_ear_ringing: null,
        ent_hearing_loss: null,

        ent_ear_pain: null,
        ent_vertigo: null,
        ent_fluid_leaking_ear: null,
        ent_smelling_changes: null,
        ent_fluid_leaking_nose: null,
        ent_nose_pain: null,

        /*mouth_throat: mouth_throat,*/
        /*Dientes*/
        mouth_throat_cavities: null,
        mouth_throat_dental_agenesis: null,
        mouth_throat_prothesis: null,

        /*Encias */
        mouth_throat_gingivorrhea: null,
        mouth_throat_gingivorrhagia: null,
        mouth_throat_pain: null,
        mouth_throat_gums_ulcerations: null,

        /*Lengua*/
        mouth_throat_colorations: null,
        mouth_throat_size: null,
        mouth_throat_plaque_presence: null,
        mouth_throat_tongue_ulcerations: null,

        /*Problemas de hablar*/
        mouth_throat_dysphonia: null,
        mouth_throat_aphonia: null,

        mouth_throat_thirst: null,
        mouth_throat_speaking_eating_pain: null,
        mouth_throat_bad_breath: null,
        mouth_throat_excess_salivation: null,
        mouth_throat_observations: null,

        /*digestive_system: digestive_system,*/
        digestive_apettite_changes: null,
        digestive_sickness_vomit: null,
        digestive_abdominal_distention: null,

        /*Esofago*/
        digestive_abdominal_gastralgia: null,
        digestive_abdominal_acidity: null,
        digestive_abdominal_postrandial_fullnes: null,

        /*Cambios de evacuacion*/
        digestive_abdominal_enesmus: null,
        digestive_abdominal_bids: null,
        digestive_abdominal_encopresis: null,
        digestive_abdominal_anal_pain: null,
        digestive_abdominal_constipation: null,
        digestive_abdominal_rectal_bleeding: null,
        digestive_abdominal_hematochezia: null,

        /*Higado y vias biliares*/
        digestive_abdominal_jaundice: null,
        digestive_abdominal_pruritus: null,
        digestive_abdominal_fever: null,
        digestive_abdominal_ascites: null,
        digestive_abdominal_biliary_colic: null,
        digestive_abdominal_hepatic_colic: null,
        digestive_abdominal_acholia: null,

        /*Pancreas*/
        digestive_abdominal_steatorrhea: null,
        digestive_abdominal_diarrhea: null,
        digestive_abdominal_hypersalivation: null,
        digestive_abdominal_abdominal_pain: null,
        digestive_abdominal_back_pain: null,

        digestive_observations: null,

        /*respiratory_apparatus: respiratory_apparatus,*/
        respiratory_cough: null,
        respiratory_chest_pain: null,
        respiratory_hemoptysis: null,
        respiratory_vomiting_cough: null,
        respiratory_cyanosis: null,
        respiratory_fatigue: null,
        respiratory_breathing_problems: null,
        respiratory_breathing_changes: null,
        respiratory_observations: null,

        /*cardiovascular_apparatus: cardiovascular_apparatus,*/
        cardiovascular_dyspnoea: null,
        cardiovascular_orthopnea: null,
        cardiovascular_lipothymia: null,
        cardiovascular_syncope: null,
        cardiovascular_edema: null,
        cardiovascular_cyanosis: null,
        cardiovascular_chest_pain: null,
        cardiovascular_palpitations: null,
        cardiovascular_observations: null,

        /*genitourinary_system: genitourinary_system,*/
        genitourinary_urinating_changes: null,
        genitourinary_urinating_pain: null,
        genitourinary_jet_changes: null,
        genitourinary_menstruation_changes: null,
        genitourinary_dyspareunia: null,
        genitourinary_libido_changes: null,
        genitourinary_observations: null,

        /*musculoskeletal_system: musculoskeletal_system,*/
        musculoskeletal_muscle_pain: null,
        musculoskeletal_joint_pain: null,
        musculoskeletal_joint_stiffness: null,
        musculoskeletal_nodules: null,
        musculoskeletal_bone_pain: null,
        musculoskeletal_ambulation_changes: null,
        musculoskeletal_observations: null,

        /*hematological_system: hematological_system,*/
        hematological_weakness: null,
        hematological_color_changes: null,
        hematological_bleeding: null,
        hematological_petechiae: null,
        hematological_ecchymosis: null,
        hematological_bruises: null,
        hematological_lymphadenopathy: null,
        hematological_observations: null,

        /*nervous_system: nervous_system,*/
        nervous_headache: null,
        nervous_seizures: null,
        nervous_memory_changes: null,
        nervous_sphincters_changes: null,
        nervous_loss_of_feeling: null,
        nervous_loss_of_movement: null,
        nervous_loss_of_balance: null,
        nervous_language_disorders: null,
        nervous_gait_changes: null,
        nervous_tremors: null,
        nervous_paralysis: null,
        nervous_parasthesia: null,
        nervous_paresis: null,
        nervous_observations: null,

        /*psychic_system: psychic_system,*/
        psychic_distress: null,
        psychic_depression: null,
        psychic_interest_changes: null,
        psychic_guilt: null,
        psychic_suicidal_thoughts: null,
        psychic_hallucinations: null,
        psychic_delirium: null,
        psychic_observations: null,

        physical_observations: null,

        /*follow_up: follow_up*/
        follow_up_treatment_changes: null,
        follow_up_treatment_changes_notes: null,
        follow_up_actual_symptoms: null,
        follow_up_last_medication_efects: null,
        follow_up_psychology_follow_up: null,
        follow_up_actual_diagnostic: null

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

        paternal_grandfather_relationship: null,
        paternal_grandfather_living: null,
        paternal_grandfather_diseases: null,
        paternal_grandfather_cause_of_death: null,

        paternal_grandmother_relationship: null,
        paternal_grandmother_living: null,
        paternal_grandmother_diseases: null,
        paternal_grandmother_cause_of_death: null,

        maternal_grandfather_relationship: null,
        maternal_grandfather_living: null,
        maternal_grandfather_diseases: null,
        maternal_grandfather_cause_of_death: null,

        maternal_grandmother_relationship: null,
        maternal_grandmother_living: null,
        maternal_grandmother_diseases: null,
        maternal_grandmother_cause_of_death: null,

        father_relationship: null,
        father_living: null,
        father_diseases: null,
        father_cause_of_death: null,

        mother_relationship: null,
        mother_living: null,
        mother_diseases: null,
        mother_cause_of_death: null,

        siblings: null,
        siblings_quantity: null,
        siblings_relationship: null,
        siblings_living: null,
        siblings_diseases: null,
        siblings_cause_of_death: null,

        sons: null,
        sons_quantity: null,
        sons_relationship: null,
        sons_living: null,
        sons_diseases: null,
        sons_cause_of_death: null,

        number_sicks: null,

        household_member_substance: null,
        substance_consumed: null,
        consuming_member: null,
        consuming_frequency: null
    }

    homeAndEconomy = {
        place_type: null,
        place_services: null,
        place_material: null,
        place_distribution: null,
        place_person_per_room: null,
        place_location: null,
        place_exposition: null,

        electrodomestics: null,
        air_conditioner: null,

        transportation: null,
        car_brand: null,
        car_model: null,

        geographic_area: null,

        sick_members: null,

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
        socioeconomic_class: null,
        social_worker: null,
        animals: null,
        vaccinated_animals: false,
        ticks_animals: false,
        diseases_animals: false,
        vaccination_card: null,
    }

    state = {
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

    updateFormState = (key,subkey,value) => {
        this.setState({
            ...this.state,
            [key]: {
                ...this.state[key],
                [subkey]: value
            }
        })
    }

    render(){
        const contextValue = {
            formState:this.state,
            updateFormState:this.updateFormState,
            handleCheckboxGroup:this.handleCheckboxGroup,
            handleBooleanCheckbox:this.handleBooleanCheckbox
        }
        return(
            <FormContext.Provider value={contextValue}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default FormContextProvider;