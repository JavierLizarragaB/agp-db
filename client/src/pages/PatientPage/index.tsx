import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface PatientFormData {
    folio: string;
    first_name: string;
    second_name?: string;
    paternal_lastname: string;
    maternal_lastname: string;
}

const REQ_FIELD_MSG = 'Campo requerido';

const PatientPage: React.FC = () => {
    useEffect(() => {
        axios.post('/patient');
    }, []);

    const handleSubmit = useCallback((values: PatientFormData) => {
        alert(JSON.stringify(values, null, 4));
    }, []);

    return (
        <div>
            <Formik
                initialValues={
                    {
                        folio: '',
                        first_name: '',
                        second_name: '',
                        paternal_lastname: '',
                        maternal_lastname: '',
                    } as PatientFormData
                }
                validationSchema={Yup.object({
                    folio: Yup.string().required(REQ_FIELD_MSG),
                    first_name: Yup.string().required(REQ_FIELD_MSG),
                    second_name: Yup.string(),
                    paternal_lastname: Yup.string().required(REQ_FIELD_MSG),
                    maternal_lastname: Yup.string().required(REQ_FIELD_MSG),
                })}
                onSubmit={handleSubmit}
            >
                {({ isValid, errors, touched }) => (
                    <Form>
                        <label htmlFor="first_name">Primer nombre</label>
                        <br />
                        <Field id="first_name" name="first_name" type="text" placeholder="Primer nombre" />
                        {errors.first_name && touched.first_name && <div>{errors.first_name}</div>}
                        <br />

                        <label htmlFor="second_name">Segundo nombre</label>
                        <br />
                        <Field id="second_name" name="second_name" type="text" placeholder="Segundo nombre" />
                        {errors.second_name && touched.second_name && <div>{errors.second_name}</div>}
                        <br />

                        <label htmlFor="paternal_lastnane">Apellido paterno</label>
                        <br />
                        <Field
                            id="paternal_lastname"
                            name="paternal_lastname"
                            type="text"
                            placeholder="Apellido materno"
                        />
                        {errors.paternal_lastname && touched.paternal_lastname && <div>{errors.paternal_lastname}</div>}
                        <br />

                        <label htmlFor="maternal_lastnane">Apellido materno</label>
                        <br />
                        <Field
                            id="maternal_lastname"
                            name="maternal_lastname"
                            type="text"
                            placeholder="Apellido paterno"
                        />
                        {errors.maternal_lastname && touched.maternal_lastname && <div>{errors.maternal_lastname}</div>}
                        <br />

                        <label htmlFor="folio">Folio</label>
                        <br />
                        <Field id="folio" name="folio" type="text" placeholder="Folio" />
                        {errors.folio && touched.folio && <div>{errors.folio}</div>}
                        <br />

                        <button type="submit" disabled={!isValid}>
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PatientPage;
