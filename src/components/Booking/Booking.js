import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeDestination from '../../fakeDestination';
import NavbarComponent from '../NavBar/NavbarComponent';
import BookingForm from './BookingForm';

const Booking = () => {
    const {hotelId} = useParams();
    const destination = fakeDestination.find(des => des.id === Number(hotelId));
    const {name} = destination; 

    const [bookingInfo, setBookingInfo] = useState({
        origin: '',
        destination: '',
        from: '',
        to: '',
        isForm: false
    });
    
    const handleForm = (e) => {
        let isFormValid = true;
       if(e.target.name === 'origin'){
           const checkOriginInput = e.target.value.length !== 0;
           isFormValid = checkOriginInput;
       }
       if(e.target.name === 'destination'){
           const checkDestination = e.target.value.length !== 0;
           isFormValid = checkDestination;
       }
       if(e.target.name === 'from'){
        const checkFrom = e.target.value.length !== 0;
        isFormValid = checkFrom;
       }
        if(e.target.name === 'to'){
            const checkTo = e.target.value.length !== 0;
            isFormValid = checkTo;
        }
        if(isFormValid){
          const newBooking = {...bookingInfo};
          newBooking[e.target.name] = e.target.value;
          newBooking.isForm = true;
          setBookingInfo(newBooking);
        }
    }

    return (
        <div className="header-area">
            <div className="header">
                <NavbarComponent />
                <Container>
                    <Row>
                        <Col md={7} className="mt-5">
                            <h1>{destination.name}</h1>
                            <h5>{destination.description}</h5>
                        </Col>
                        <Col md={5}>
                            <BookingForm hotelId={hotelId} bookingInfo={bookingInfo} handleForm={handleForm} name={name} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Booking;