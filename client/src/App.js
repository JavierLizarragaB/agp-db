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
                            <Route path="/user-panel" component={UserPanel} />
                            <Route path="/datos-paciente" component={Form} />
                            <Route path="/directorio-paciente" component={DirectorioPaciente} />
                            <Route path="/inicio" component={Inicio} />
                            <Route path="/carrusel" component={Carrusel} />
                            <Route path="/test/user-ctx" component={UserCtxExample} />
                            <Route path="/pag-inicio" component={PagInicio} />
                        </Switch>
                    </div>
                </div>
              </FormContextProvider>
            </UserProvider>
          </Router>
  );
}

export default App;
