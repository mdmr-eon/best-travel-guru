import React from 'react';
import Slider from '../Slider/Slider';
import './Home.css';
import NavbarComponent from '../NavBar/NavbarComponent';

const Home = () => {
    return (
        <div className="header-area">
            <div className="header">
                <NavbarComponent></NavbarComponent>
                <Slider></Slider>     
            </div>
        </div>
    );
};

export default Home;