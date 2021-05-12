import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../img/papanico.png';
import agp from '../img/agp.jpg';
import agp1 from '../img/agp1.jpg';
import agp2 from '../img/agp2.jpg';
import agp3 from '../img/agp3.jpg';
import Axios from 'axios';

import { Carousel } from 'react-bootstrap';

export const Carrusel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                    <img
                    className="d-block w-100 h-5"
                    src={agp}
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>    
            </Carousel.Item>
                
            <Carousel.Item>
                    <img
                    className="d-block w-100 h-5"
                    src={agp1}
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
                
            <Carousel.Item>
                    <img
                    className="d-block w-100 h-5"
                    src={agp3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carrusel;
