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

{/*className="d-block w-100 h-5"*/}

export const Carrusel = () => {
    return (
        <div className="my__carousel_main">
        <Carousel>
            
            <Carousel.Item interval={2000} >
                    <img
                    
                    
                    
                    src={agp}
                    width="900" height="400"
                    alt="First slide"
                    />
                <Carousel.Caption style={{color: "black", backgroundColor: "lightblue", padding: "1%"}}>
                    <h3 classname="title-carrusel">First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>    
            </Carousel.Item>
                
            <Carousel.Item interval={2000} >
                    <img
                    
                    
                    src={agp1}
                    width="900" height="400"
                    alt="Second slide"
                    />
                <Carousel.Caption style={{color: "black", backgroundColor: "lightblue", padding: "1%"}}>
                    <h3 classname="title-carrusel">Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
                
            <Carousel.Item interval={2000} >
                    <img
                    
                    
                    src={agp3}
                    width="900" height="400"
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{color: "black", backgroundColor: "lightblue", padding: "1%"}}>
                    <h3 classname="title-carrusel">Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Carrusel;
