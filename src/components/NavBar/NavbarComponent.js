import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Icon/Logo.png';
import { handleSingOut } from '../UserManagment/UserMAnagment';
import './NavbarComponent.css';

const NavbarComponent = (props) => {
    const [user, setUser] = useContext(UserContext);
    const style = {
        color: "#f9a51a"
    }

    //sign out
    const singOut = () => {
        handleSingOut()
        .then(res => {
          setUser({});
        })
        .catch(err => {
            setUser({
                errorMassage: err.massage
            })
        })
    }
    return (
        <Container>
            <Navbar expand="lg">
                <NavLink to="/home">
                <img
                    src={logo}
                    width="110px"
                    height="50"
                    className="d-inline-block align-top mr-4"
                    alt="Travel guru logo"
                    />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="m-auto">
                        <NavLink activeStyle={style} to="/home">Home</NavLink>
                        <NavLink activeStyle={style} to="/news">News</NavLink>
                        <NavLink activeStyle={style} to="/destination">Destination</NavLink>
                        <NavLink activeStyle={style} to="/blog">Blog</NavLink>
                        <NavLink activeStyle={style} to="/contract">Contract</NavLink>
                    </Nav>
                    <h5 className="mr-3">{user.isSingIn === true ? user.name : ''}</h5>
                    {user.isSingIn === true ? 
                     <Button variant="warning" onClick={singOut}>Log out</Button>:
                     <NavLink to="/login"><Button variant="warning">login</Button></NavLink>
                    }
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavbarComponent;