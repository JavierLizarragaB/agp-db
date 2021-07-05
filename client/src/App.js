import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
//import UserPanel from './components/userpanel.component';
import Form from './components/form.component';
import UserProvider, { Example as UserCtxExample } from './context/UserProvider';
import Carrusel from './components/carrusel.component';
import PagInicio from './components/Inicio/inicio';
import DirectorioPaciente from './components/directorio.component';
import HistorialFormulario from './components/historial-formulario.component';
import ProtectedRoute from './constants/protectedRoutes';
import AdminProtectedRoute from './constants/adminProtectedRoutes';

import UserPanel2 from './components/userpanel2.component';

import FormContextProvider from './context/FormContext';
import CrearPaciente from './components/crearPaciente.component';

function App() {
  return (
          <Router>
            <UserProvider>
              <FormContextProvider>
                <div className="App">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/log-in" component={Login} />
                            
                            <AdminProtectedRoute path="/panel-usuarios" component={UserPanel2} />
                            <ProtectedRoute path="/datos-paciente" component={Form} />
                            <ProtectedRoute path="/directorio-paciente" component={DirectorioPaciente} />
                            <ProtectedRoute path="/historial-formulario" component={HistorialFormulario} />
                            <ProtectedRoute path="/carrusel" component={Carrusel} />
                            <ProtectedRoute path="/test/user-ctx" component={UserCtxExample} />
                            <ProtectedRoute path="/pag-inicio" component={PagInicio} />
                            <ProtectedRoute path="/crear-Paciente" component={CrearPaciente} />
                        </Switch>
                    </div>
                </div>
              </FormContextProvider>
            </UserProvider>
          </Router>
  );
}

export default App;
