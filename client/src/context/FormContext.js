import React, { createContext,Component } from "react";

export const FormContext = createContext();

class FormContextProvider extends Component {
    constructor(){
        super();
    }

    patientData = {

        birth_state: "",
        birth_city: "",

        /*permanent_address: permanent_address,*/
        permanent_street: "",
        permanent_num: "", 
        permanent_suburb: "",
        permanent_locality: "", 
        permanent_municipality: "",
        permanent_zip_code: "",
        permanent_phone: "",
        permanent_phone2: "",

        email: "",
        income: "",
        medical_service: "",
        scholarship: "",
        ocupation: "",
        religion: "",
        civil_state: "",

        clinic_record_date: "",

        /*temp_address: temp_address,*/
        temp_street: "",
        temp_num: "", 
        temp_suburb: "",
        temp_locality: "", 
        temp_municipality: "",
        temp_zip_code: "",
        temp_phone: "",
        temp_phone2: "",

        /*responsable_family_member: responsable_family_member,*/
        responsable_name: "",

        responsable_street: "",
        responsable_num: "", 
        responsable_suburb: "",
        responsable_locality: "", 
        responsable_municipality: "",
        responsable_zip_code: "",
        responsable_phone: "",
        responsable_phone2: "",

        responsable_relationship: "",

        /*personal_pathological_history: personalPathologicalHistory,*/
        chronic_degenerative_diseases: "",
        infectious_contagious_diseases: "",
        surgeries: "",
        surgeries_notes: "",
        jail: "",
        jail_notes: "",
        blood_transfusions: "",
        blood_transfusions_notes: "",
        allergies: "",
        allergies_notes: "",
        trauma: "",
        trauma_notes: "",
        alcoholism: "",
        alcoholism_notes: "",
        smoking: "",
        smoking_notes: "",
        drug_addictions: "",
        drug_addictions_notes: "",

        /*male_sexual_health: male_sexual_health,*/
        male_start_sexual_life: "",
        male_sexual_partners: "",
        male_std: "",
        male_contraceptive_methods: "",

        /*female_sexual_health: female_sexual_health,*/
        female_menarche: "",
        female_menarche_age: "",
        female_rhythm: "",
        female_start_sexual_life: "",
        female_high_risk_partners: "",
        female_sexual_partners: "",
        female_std: "",
        female_std_notes: "",
        female_gestations: "",
        female_deliveries: "",
        female_abortions: "",
        female_date_last_delivery: "",
        female_age_first_pregnancy: "",
        female_family_planning_methods: "",
        female_date_last_menstruation: "",
        female_menopause: "",
        female_hormonal_therapy: "",
        female_breastfeeding: "",
        female_last_pap_smear: "",
        female_last_pap_smear_result: "",
        female_last_hybrid_test: "",
        female_last_hybrid_test_resutl: "",
        female_last_mammography: "",
        female_last_mammography_result: "",

        /*apparatus_and_systems: apparatusAndSystems*/
        /*skin: skin,*/

        /*Cambios coloracion*/
        skin_paleness: "",
        skin_icterus: "",
        skin_cyanosis: "",

        skin_eruptions: "",
        skin_spots: "",
        skin_pruritus: "",
        skin_dryness: "",
        skin_volume_increase: "",
        skin_nails_hair: "",
        skin_nodules: "",
        skin_observations: "",

        /*ophthalmic_system: ophthalmic_system,*/
        /*Cambios vision*/
        ophthalmic_diplopia: "",
        ophthalmic_eye_pain: "",
        ophthalmic_photophobia: "",
        ophthalmic_amaurosis: "",
        ophthalmic_photopsies: "",
        ophthalmic_myodesopsias: "",
        ophthalmic_scotomas: "",
        ophthalmic_hemeralopia: "",
        ophthalmic_nyctalopia: "",

        /*Uso de lentes*/
        ophthalmic_myopia: "",
        astigmatism: "",

        ophthalmic_observations: "",

        /*ent_system: ent_system,*/
        /*Cambios en la audicion*/
        ent_otalgia: "",
        ent_algiacusis: "",
        ent_presbycusis: "",
        ent_anacusis: "",
        ent_tinnitus: "",
        ent_ear_ringing: "",
        ent_hearing_loss: "",

        ent_ear_pain: "",
        ent_vertigo: "",
        ent_fluid_leaking_ear: "",
        ent_smelling_changes: "",
        ent_fluid_leaking_nose: "",
        ent_nose_pain: "",

        /*mouth_throat: mouth_throat,*/
        /*Dientes*/
        mouth_throat_cavities: "",
        mouth_throat_dental_agenesis: "",
        mouth_throat_prothesis: "",

        /*Encias */
        mouth_throat_gingivorrhea: "",
        mouth_throat_gingivorrhagia: "",
        mouth_throat_pain: "",
        mouth_throat_ulcerations: "",

        /*Lengua*/
        mouth_throat_colorations: "",
        mouth_throat_size: "",
        mouth_throat_plaque_presence: "",
        mouth_throat_ulcerations: "",

        /*Problemas de hablar*/
        mouth_throat_dysphonia: "",
        mouth_throat_aphonia: "",

        mouth_throat_thirst: "",
        mouth_throat_speaking_eating_pain: "",
        mouth_throat_bad_breath: "",
        mouth_throat_excess_salivation: "",
        mouth_throat_observations: "",

        /*digestive_system: digestive_system,*/
        digestive_apettite_changes: "",
        digestive_sickness_vomit: "",
        digestive_abdominal_distention: "",

        /*Esofago*/
        digestive_abdominal_gastralgia: "",
        digestive_abdominal_acidity: "",
        digestive_abdominal_postrandial_fullnes: "",

        /*Cambios de evacuacion*/
        digestive_abdominal_enesmus: "",
        digestive_abdominal_bids: "",
        digestive_abdominal_encopresis: "",
        digestive_abdominal_anal_pain: "",
        digestive_abdominal_constipation: "",
        digestive_abdominal_rectal_bleeding: "",
        digestive_abdominal_hematochezia: "",

        /*Higado y vias biliares*/
        digestive_abdominal_jaundice: "",
        digestive_abdominal_pruritus: "",
        digestive_abdominal_fever: "",
        digestive_abdominal_ascites: "",
        digestive_abdominal_biliary_colic: "",
        digestive_abdominal_hepatic_colic: "",
        digestive_abdominal_acholia: "",

        /*Pancreas*/
        digestive_abdominal_steatorrhea: "",
        digestive_abdominal_diarrhea: "",
        digestive_abdominal_hypersalivation: "",
        digestive_abdominal_abdominal_pain: "",
        digestive_abdominal_back_pain: "",

        digestive_observations: "",

        /*respiratory_apparatus: respiratory_apparatus,*/
        respiratory_cough: "",
        respiratory_chest_pain: "",
        respiratory_hemoptysis: "",
        respiratory_vomiting_cough: "",
        respiratory_cyanosis: "",
        respiratory_fatigue: "",
        respiratory_breathing_problems: "",
        respiratory_breathing_changes: "",
        respiratory_observations: "",

        /*cardiovascular_apparatus: cardiovascular_apparatus,*/
        cardiovascular_dyspnoea: "",
        cardiovascular_orthopnea: "",
        cardiovascular_lipothymia: "",
        cardiovascular_syncope: "",
        cardiovascular_edema: "",
        cardiovascular_cyanosis: "",
        cardiovascular_chest_pain: "",
        cardiovascular_palpitations: "",
        cardiovascular_observations: "",

        /*genitourinary_system: genitourinary_system,*/
        genitourinary_urinating_changes: "",
        genitourinary_urinating_pain: "",
        genitourinary_jet_changes: "",
        genitourinary_menstruation_changes: "",
        genitourinary_dyspareunia: "",
        genitourinary_libido_changes: "",
        genitourinary_observations: "",

        /*musculoskeletal_system: musculoskeletal_system,*/
        musculoskeletal_muscle_pain: "",
        musculoskeletal_joint_pain: "",
        musculoskeletal_joint_stiffness: "",
        musculoskeletal_nodules: "",
        musculoskeletal_bone_pain: "",
        musculoskeletal_ambulation_changes: "",
        musculoskeletal_observations: "",

        /*hematological_system: hematological_system,*/
        hematological_weakness: "",
        hematological_color_changes: "",
        hematological_bleeding: "",
        hematological_petechiae: "",
        hematological_ecchymosis: "",
        hematological_bruises: "",
        hematological_lymphadenopathy: "",
        hematological_observations: "",

        /*nervous_system: nervous_system,*/
        nervous_headache: "",
        nervous_seizures: "",
        nervous_memory_changes: "",
        nervous_sphincters_changes: "",
        nervous_loss_of_feeling: "",
        nervous_loss_of_movement: "",
        nervous_loss_of_balance: "",
        nervous_language_disorders: "",
        nervous_gait_changes: "",
        nervous_tremors: "",
        nervous_paralysis: "",
        nervous_parasthesia: "",
        nervous_paresis: "",
        nervous_observations: "",

        /*psychic_system: psychic_system,*/
        psychic_distress: "",
        psychic_depression: "",
        psychic_interest_changes: "",
        psychic_guilt: "",
        psychic_suicidal_thoughts: "",
        psychic_hallucinations: "",
        psychic_delirium: "",
        psychic_observations: "",

        physical_observations: "",

        /*follow_up: follow_up*/
        follow_up_treatment_changes: "",
        follow_up_treatment_changes_notes: "",
        follow_up_actual_symptoms: "",
        follow_up_last_medication_efects: "",
        follow_up_psychology_follow_up: "",
        follow_up_actual_diagnostic: ""

    }

    generalInfo = {

        name: "",
        age: "",
        sex: "",
        civil_state: "",
        birth_date: ""

    }

    familyData = {
        family_member_name: "",
        family_member_age: "",
        family_member_relationship: "",
        family_member_civil_state: "",
        family_member_occupation: "",
        family_member_income: "",

        relationship: "",
        living: "",
        diseases: "",
        cause_of_death: "",

        number_sicks: "",

        household_member_substance: "",
        substaance_consumed: "",
        consuming_member: "",
        consuming_frequency: ""
    }

    homeAndEconomy = {
        place_type: "",
        place_services: "",
        place_material: "",
        place_distribution: "",
        place_person_per_room: "",
        place_location: "",
        place_exposition: "",

        electrodomestics: "",
        air_conditioner: "",

        transportation: "",
        car_brand: "",
        car_model: "",

        geographic_area: "",

        sick_members: "",

        outcome_electric_power: "",
        outcome_water: "",
        outcome_gas: "",
        outcome_phone: "",
        outcome_food: "",
        outcome_rent: "",
        outcome_transportation: "",
        outcome_education: "",
        outcome_clothing: "",
        outcome_recreational: "",
        outcome_other: ""
    }    

    diet = {
        perceived_quality: "",
        meals_per_day: "",
        food_preparation: "",
        water_per_day: "",
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
        shower_frequency: "",
        toothbrushing_frequency: "",
        home_hygiene: "",
        phys_activity: "",
        passtime: "",
    }

    others = {
        how_found_out: "",
        has_support_background: null,
        notes_support_background: "",
        observations: "",
        social_plan: "",
        socioeconomic_class: "",
        social_worker: "",
        animals: "",
        vaccinated_animals: null,
        ticks_animals: null,
        diseases_animals: null,
        vaccination_card: "",
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

    updateGeneralInfo = (key,value) => {
        this.setState({
            ...this.state,
            general_info: {
                ...this.state.general_info,
                [key]: value
            }
        })
    }

    updatePatientData = (key,value) => {
        this.setState({
            ...this.state,
            patient_data: {
                ...this.state.patient_data,
                [key]: value
            }
        })
    }

    updateFamilyData = (key, value) => {
        this.setState({
            ...this.state,
            family_data: {
                ...this.state.family_data,
                [key]: value
            }
        })
    }

    updateHomeAndEconomy = (key, value) => {
        this.setState({
            ...this.state,
            home_and_economy: {
                ...this.state.home_and_economy,
                [key]: value
            }
        })
    }

    updateDiet = (key,value) => {
        this.setState({
            ...this.state,
            diet: {
                ...this.state.diet,
                [key]: value
            }
        })
    }

    updateHygienePassPhysAct = (key,value) => {
        this.setState({
            ...this.state,
            hygiene_pass_physact: {
                ...this.state.hygiene_pass_physact,
                [key]: value
            }
        })
    }

    updateOthers = (key,value) => {
        this.setState({
            ...this.state,
            others: {
                ...this.state.others,
                [key]: value
            }
        })
    }

    render(){
        const contextValue = {
            formState:this.state,
            updateGeneralInfo:this.updateGeneralInfo,
            updatePatientData: this.updatePatientData,
            updateFamilyData: this.updateFamilyData,
            updateHomeAndEconomy: this.updateHomeAndEconomy,
            updateDiet:this.updateDiet,
            updateHygienePassPhysAct:this.updateHygienePassPhysAct,
            updateOthers:this.updateOthers
        }
        return(
            <FormContext.Provider value={contextValue}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default FormContextProvider;