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

function App() {
    return (
        <Router>
            <UserProvider>
                <div className="App">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/log-in" component={Login} />
                            <Route path="/user-panel" component={UserPanel} />
                            <Route path="/patient-form" component={Form} />
                            <Route path="/datos-paciente" component={DatosPaciente} />
                            <Route path="/inicio" component={Inicio} />
                            <Route path="/test/user-ctx" component={UserCtxExample} />
                        </Switch>
                    </div>
                </div>
            </UserProvider>
        </Router>
    );
}

export default App;
