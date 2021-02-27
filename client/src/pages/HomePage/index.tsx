import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const HomePage: React.FC = () => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.PATIENT}>Prueba de GET y POST ;-3</Link>
            </li>
        </ul>
    );
};

export default HomePage;
