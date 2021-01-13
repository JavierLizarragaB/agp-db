import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';

import Test from '../Test';

const ROUTES = {
    INDEX: '/',
    TEST: '/test',
};

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path={ROUTES.TEST} component={Test} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
