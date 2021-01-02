import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation: FunctionComponent = () => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.INDEX}>Inicio</Link>
            </li>
            <li>
                <Link to={ROUTES.DASHBOARD}>Tablero</Link>
            </li>
            <li>
                <Link to={ROUTES.LOGIN}>Iniciar sesión</Link>
            </li>
        </ul>
    );
};

export default Navigation;
