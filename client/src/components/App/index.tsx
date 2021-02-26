import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import * as ROUTES from '../../constants/routes';
import Layout from '../Layout';

import PatientPage from '../../pages/PatientPage';

// import Test from '../Test';

const Test: React.FC = () => {
    const [time, setTime] = useState('No ha llegado');
    const [col, setCol] = useState('black');

    useEffect(() => {
        axios.get('./api/time').then((res) => {
            // alert(JSON.stringify(res, null, 4));
            setTime(res.data.time);
        });
    }, []);

    return (
        <div style={{ background: col, fontWeight: 'bold', fontSize: 60 }}>
            {time}
            <button onClick={() => setTime(time + '@')}>+1</button>
            <input
                type="text"
                name="col"
                id="col"
                placeholder="black"
                value={col}
                onChange={(e) => setCol(e.target.value)}
            />
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path={ROUTES.PATIENT} component={PatientPage} />
                    <Route path={'/test'} component={() => <h4>Hello</h4>} />
                    <Route path={'/hora-paciente'} component={Test} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
