import React from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import fbLogo from '../../Icon/fb.png';
import googleLogo from '../../Icon/google.png';
import './Login.css';

const LoginForm = (props) => {
    return (
        <div>
            <h2 className="text-center text-danger">{props.error}</h2>
            {/* <h2 className="text-center text-danger">{props.use.errorMassage}</h2> */}
            <div className="login-box mt-3">
               <h4 className="mb-3">Login</h4>
               <form onSubmit={props.singInUser}>
                  <TextField type="email" id="email" name="email" className="form-control mt-3" label="Gmail Account" onBlur={props.handleInputValue} />
                  <TextField type="password" id="pass" name="password" className="form-control mt-3 mb-4" label="password" onBlur={props.handleInputValue} />
                  <div className="mb-3">
                    <input type="checkbox" className="mr-2" />
                    <label className="mr-5">Remember me</label>
                    <NavLink className="text-warning text-decoration-none ml-5" to="/forgot">Forgot Password</NavLink>
                  </div>
                  <input type="submit" className="btn btn-warning btn-lg btn-block" value="Login" />
               </form>
               <h6 className="text-center mt-2">Don't have an account? <NavLink className="text-warning text-decoration-none" to="/registration">Registration</NavLink> </h6>
            </div>
            <h3 className="or">or</h3>
            <div className="other-login mt-2">
                <div className="g-login common-login d-flex m-auto" onClick={props.googleSignIn}>
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

export default LoginForm;