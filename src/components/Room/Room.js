import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeDestination from '../../fakeDestination';
import fakeHotel from '../../fakeHotel';
import NavbarComponent from '../NavBar/NavbarComponent';
import icon from '../../Icon/star_1_.png';
import './Room.css';

const Room = () => {
    const {roomId} = useParams();
    const destination = fakeDestination.find(des => des.id === Number(roomId));
    const rooms = fakeHotel.filter(hotels => hotels.location === destination.name);
    
    let location = '';
    if(destination.id === 1){
        location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.338525793387!2d91.9788030149392!3d21.41593498578983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96118ced5b5%3A0xfeac4d792191e35e!2sCox&#39;s%20Bazar%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1600440200222!5m2!1sen!2sbd";
    }
    if(destination.id === 2){
        location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.1454005112237!2d91.73258501495782!3d24.306562884318147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a13562799a3%3A0x1096b17d20528e29!2sSreemangal%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1600439165258!5m2!1sen!2sbd";
    }
    if(destination.id === 3){
        location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4705225174057!2d89.73017481492685!3d22.673521685130996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fff6641e167db3%3A0xbda324d3268417b5!2sSundarbans%20Resort!5e0!3m2!1sen!2sbd!4v1600439269052!5m2!1sen!2sbd";
    }
    
    return (
        <>
           <NavbarComponent />
           <h3 className="text-center font-weight-bold text-warning">{destination.name}</h3>
           <div className="final-booking-area mt-5">
               <Container fluid>
                    <Row>
                        <Col md={6}>
                            {rooms.map(room => 
                            <div className="room d-flex mt-2" key={room.id}>
                               <img className="room-img" src={room.image} alt="roomsPic" />
                               <div className="details mt-2 ml-3">
                                    <h4 className="mb-1 text-warning">{room.name}</h4>
                                    <p className="mb-1">{room.roomDes}</p>
                                    <p className="mb-1">{room.description}</p>
                                   <div className="d-flex">
                                      <img src={icon} height="20px" alt="icon" />  
                                      <p className="font-weight-bold ml-2">{`${room.rating}/(${room.review})`}</p>
                                   </div>
                               </div>
                            </div>
                            )}
                        </Col>
                        <Col md={6}>
                            <iframe src={location} width="100%" height="550" style={{border: "none", borderRadius: "10px"}} />
                        </Col>
                    </Row>
               </Container>
           </div>
        </>
    );
};

export default Room;