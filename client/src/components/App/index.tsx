import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Test from '../Test';

const ROUTES = {
    LANDING: '/',
    TEST: '/test',
};

function App() {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.TEST} component={Test} />
            </Switch>
        </Router>
    );
}

export default App;
