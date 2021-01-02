import React, { FunctionComponent } from 'react';

import Navigation from '../Navigation';

const Layout: FunctionComponent = (props) => {
    return (
        <React.Fragment>
            <Navigation />
            {props.children}
        </React.Fragment>
    );
};

export default Layout;