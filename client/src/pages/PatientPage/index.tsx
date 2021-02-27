import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as API_ROUTES from '../../constants/apiRoutes';

const PatientPage: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const fetchPatients = useCallback(() => {
        axios
            .get(API_ROUTES.GET_ALL_PATIENTS)
            .then((res) => setPatients(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchPatients();
    }, [fetchPatients]);

    const handleSubmitPatient = useCallback((values) => {
        axios
            .post(API_ROUTES.CREATE_PATIENT, values)
            .then((res) => fetchPatients())
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <p>
                Cuando actualicen esto recuerden actualizar los tipos en "client/src/serverTypes.d.ts". Díganle a
                backend que actualice también los modelos de paciente en "server/app/models.py". Favor de poner
                db_field=*nombre_en_español* a los campos. Para autenticar rutas:
            </p>
            <p>
                @Javi: Autenticación con JWT:{' '}
                <a href="https://www.youtube.com/watch?v=J5bIPtEbS0Q">https://www.youtube.com/watch?v=J5bIPtEbS0Q</a>
            </p>
            <p>Spooky Scary Skeletons</p>
            <PatientForm onSubmit={handleSubmitPatient} />
            <PatientsTable data={patients} />
        </div>
    );
};

const REQ_FIELD_MSG = 'Campo requerido';

const PatientForm: React.FC<{ onSubmit: (values: Patient) => void }> = ({ onSubmit: handleSubmitProp }) => {
    const handleSubmit = useCallback(
        (values: Patient) => {
            const { first_name, second_name, paternal_last_name, maternal_last_name, folio } = values;
            const postData: Patient = { first_name, paternal_last_name, maternal_last_name, folio };
            if (second_name) postData.second_name = second_name;

            handleSubmitProp(postData);
        },
        [handleSubmitProp],
    );

    return (
        <div>
            <Formik
                initialValues={
                    {
                        folio: '',
                        first_name: '',
                        second_name: '',
                        paternal_last_name: '',
                        maternal_last_name: '',
                    } as Patient
                }
                validationSchema={Yup.object({
                    folio: Yup.string().required(REQ_FIELD_MSG),
                    first_name: Yup.string().required(REQ_FIELD_MSG),
                    second_name: Yup.string(),
                    paternal_last_name: Yup.string().required(REQ_FIELD_MSG),
                    maternal_last_name: Yup.string().required(REQ_FIELD_MSG),
                })}
                onSubmit={handleSubmit}
            >
                {({ isValid, errors, touched }) => (
                    <Form>
                        <label htmlFor="first_name">Primer nombre*</label>
                        <br />
                        <Field id="first_name" name="first_name" type="text" placeholder="Primer nombre" />
                        {errors.first_name && touched.first_name && <div>{errors.first_name}</div>}
                        <br />

                        <label htmlFor="second_name">Segundo nombre</label>
                        <br />
                        <Field id="second_name" name="second_name" type="text" placeholder="Segundo nombre" />
                        {errors.second_name && touched.second_name && <div>{errors.second_name}</div>}
                        <br />

                        <label htmlFor="paternal_lastnane">Apellido paterno*</label>
                        <br />
                        <Field
                            id="paternal_last_name"
                            name="paternal_last_name"
                            type="text"
                            placeholder="Apellido materno"
                        />
                        {errors.paternal_last_name && touched.paternal_last_name && (
                            <div>{errors.paternal_last_name}</div>
                        )}
                        <br />

                        <label htmlFor="maternal_lastnane">Apellido materno*</label>
                        <br />
                        <Field
                            id="maternal_last_name"
                            name="maternal_last_name"
                            type="text"
                            placeholder="Apellido paterno"
                        />
                        {errors.maternal_last_name && touched.maternal_last_name && (
                            <div>{errors.maternal_last_name}</div>
                        )}
                        <br />

                        <label htmlFor="folio">Folio*</label>
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

const PatientsTable: React.FC<{ data: Patient[] }> = ({ data }) => (
    <ul>
        {data.map((p, i) => (
            <li key={i}>{JSON.stringify(p, null, 4)}</li>
        ))}
    </ul>
);

export default PatientPage;
