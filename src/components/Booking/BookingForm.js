import { TextField } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Booking.css';

const BookingForm = (props) => {
    const {isForm} = props.bookingInfo;
    return (
        <div className="booking-area mt-5">
            <form>

            <TextField type="text" className="form-control" onBlur={props.handleForm} label="Origin" name="origin" />
            <TextField type="email" defaultValue={props.name} className="form-control mt-4" label="Destination" onBlur={props.handleForm} name="destination" />
             <Row>
                 <Col md={6}>
                    <TextField
                        id="date"
                        label="From"
                        name="from"
                        className="form-control mt-5"
                        onBlur={props.handleForm}
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                 </Col>
                 <Col md={6}>
                    <TextField
                        id="date"
                        label="To"
                        name="to"
                        onBlur={props.handleForm}
                        className="form-control mt-5"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                 </Col>
             </Row>
             {isForm ? 
             <NavLink to={"/room/" + props.hotelId}><input type="submit" className="btn btn-warning btn-block font-weight-bold mt-4" value="Booking Now"/></NavLink>
            :
            <input type="submit" className="btn btn-warning btn-block font-weight-bold mt-4" value="Booking Now" disabled />
            }
            </form>
        </div>
    );
};

export default BookingForm;