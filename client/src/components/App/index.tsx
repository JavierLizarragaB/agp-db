import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';

import Test from '../Test';

const ROUTES = {
    LANDING: '/',
    TEST: '/test',
};

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={ROUTES.TEST} component={Test} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
