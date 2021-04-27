import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from "./components/login.component";
import UserPanel from "./components/userpanel.component";
import DatosPaciente from "./components/datospaciente.component";
import Inicio from "./components/Inicio/index";

function App() {
  return (<Router>
    <div className="App">

      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/log-in" component={Login} />
          <Route path="/user-panel" component={UserPanel} />
          <Route path="/datos-paciente" component={DatosPaciente} />
          <Route path="/inicio" component={Inicio} />
        </Switch>
      </div>
      
    </div></Router>
  );
}

export default App;