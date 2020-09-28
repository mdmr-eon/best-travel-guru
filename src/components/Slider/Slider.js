import React, { useEffect, useState } from 'react';
import fakeDestination from '../../fakeDestination';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const [hotels, setHotels] = useState([]);
    useEffect( () => {
        const fakeData = fakeDestination
        setHotels(fakeData);
    }, [])

    return (
        <Container className="mt-5">
            <Carousel >
                {hotels.map(hotel => 
                <Carousel.Item key={hotel.id}>
                    <Row>
                        <Col md={8}>
                            <div className="mt-5">
                                <h1>{hotel.name}</h1>
                                <h5 className="mt-3">{hotel.description}</h5>
                                <NavLink to={"/booking/" + hotel.id}>
                                    <Button className="mt-2" variant="warning">
                                    <b>
                                        Booking 
                                        <FontAwesomeIcon
                                        className="pt-1"
                                         icon={faLongArrowAltRight} 
                                         />
                                    </b>
                                    </Button>
                                </NavLink>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="slider-image">
                                <img 
                                src={hotel.image} 
                                width="100%"
                                height="100%"
                                alt="slide" 
                                />
                                <Carousel.Caption>
                                    <h3>{hotel.name}</h3>
                                </Carousel.Caption>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
                    )}
            </Carousel>
        </Container>
    );
};

export default Slider;