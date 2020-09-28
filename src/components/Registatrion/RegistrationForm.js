import React from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import fbLogo from '../../Icon/fb.png';
import googleLogo from '../../Icon/google.png';
import './RegistrationForm.css';

const RegistrationForm = (props) => {
    return (
        <div className="registration-ara">
            <h2 className="text-center text-danger">{props.error}</h2>
            <h2 className="text-center text-danger">{props.user.errorMassage}</h2>
            <div className="registration-box mt-3">
               <h4 className="mb-3">Create an account</h4>
               <form onSubmit={props.newUserSignIn}>
                  <TextField type="text" className="form-control" label="Name" name="name" onBlur={props.handleInputValue} />

                  <TextField type="email" className="form-control mt-3" label="Gmail Account" name="email" onBlur={props.handleInputValue} />

                  <TextField type="password" className="form-control mt-3" label="password" name="password" onBlur={props.handleInputValue} />

                  <TextField type="password" className="form-control mt-3 mb-4" label="Confrim password" name="cPassword" onBlur={props.handleInputValue} />

                  <input type="submit" className="btn btn-warning btn-lg btn-block" value="Create an account" />

               </form>
               <h6 className="text-center mt-2">Already have an account? <NavLink className="text-warning text-decoration-none" to="/login">Login</NavLink> </h6>
            </div>
            <h3 className="or">or</h3>
            <div className="other-login mt-2">
                <div className="g-login common-login d-flex m-auto " onClick={props.googleSignIn}>
                    <img src={googleLogo} className="mt-1 ml-3 mr-4" width="30px" height="30px" alt="logoImg" />
                    <h6 className="mt-2">continue with google</h6>
                </div>
                <br />
                <div className="f-login common-login d-flex m-auto" onClick={props.facebookSignIn}>
                    <img src={fbLogo} className="mt-1 ml-3 mr-4" width="30px" height="30px" alt="logoImg" />
                    <h6 className="mt-2">continue with facebook</h6>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;