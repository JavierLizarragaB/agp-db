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

    state = {
        general_info: this.generalInfo,
        personal_background: this.personalBackground
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

    render(){
        const contextValue = {
            formState:this.state,
            updateGeneralInfo:this.updateGeneralInfo,
            updatePersonalBackground:this.updatePersonalBackground,
        }
        return(
            <FormContext.Provider value={contextValue}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}

export default FormContextProvider;