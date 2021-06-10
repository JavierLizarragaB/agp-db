import React, { createContext,Component } from "react";

export const FormContext = createContext();

class FormContextProvider extends Component {
    constructor(){
        super();
    }


    generalInfo = {
        birth_city: "",
        birth_state: "",

        street: "",
        number: "", 
        neighborhood: "",
        town: "", 
        municipality: "",
        postcode: "",
        phone: "",
        phone2: "",

        email: "",
        income: "",
        medical_service: "",
        scholarship: "",
        occupation: "",
        religion: "",
        civil_state: "",
        medical_background_date: "",

        temp_street: "",
        temp_number: "", 
        temp_neighborhood: "",
        temp_town: "", 
        temp_municipality: "",
        temp_postcode: "",
        temp_phone: "",
        temp_phone2: "",

        fam_street: "",
        fam_number: "", 
        fam_neighborhood: "",
        fam_town: "", 
        fam_municipality: "",
        fam_postcode: "",
        fam_phone: "",
        fam_phone2: "",
        fam_relationship: ""
    }

    personalBackground = {
        diseases_chronicdeg: ""
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
        personal_background: this.personalBackground,
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

    updatePersonalBackground = (key,value) => {
        this.setState({
            ...this.state,
            personal_background: {
                ...this.state.personal_background,
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
            updatePersonalBackground:this.updatePersonalBackground,
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