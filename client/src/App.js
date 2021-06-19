import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import UserPanel from './components/userpanel.component';
import DatosPaciente from './components/datospaciente.component';
import Form from './components/form.component';
import Inicio from './components/Inicio/index';
import UserProvider, { Example as UserCtxExample } from './context/UserProvider';
import Carrusel from './components/carrusel.component';
import PagInicio from './components/Inicio/inicio';
import DirectorioPaciente from './components/directorio.component';
import ProtectedRoute from './constants/protectedRoutes';

import FormContextProvider from './context/FormContext';

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
                            <ProtectedRoute path="/user-panel" component={UserPanel} isAuth={true}/>
                            <ProtectedRoute path="/datos-paciente" component={Form} isAuth={true}/>
                            <ProtectedRoute path="/directorio-paciente" component={DirectorioPaciente} isAuth={true}/>
                            <ProtectedRoute path="/inicio" component={Inicio} isAuth={true}/>
                            <ProtectedRoute path="/carrusel" component={Carrusel} isAuth={true}/>
                            <ProtectedRoute path="/test/user-ctx" component={UserCtxExample} isAuth={true}/>
                            <ProtectedRoute path="/pag-inicio" component={PagInicio} isAuth={true}/>
                        </Switch>
                    </div>
                </div>
              </FormContextProvider>
            </UserProvider>
          </Router>
  );
}

export default App;
