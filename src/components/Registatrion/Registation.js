import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import NavbarComponent from '../NavBar/NavbarComponent';
import { emailPassSingIn, handleFacebookSingIn, handleGoogleSingIn, intFirebase } from '../UserManagment/UserMAnagment';
import RegistrationForm from './RegistrationForm';

const Registration = () => {
    const [user, setUser] = useContext(UserContext);
    intFirebase();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    //google signIn
    const googleSignIn = () => {
       handleGoogleSingIn()
       .then(res => {
        commonCode(res);
       })
       .catch(err => {
           setUser({
               errorMassage: err.massage
           })
       })
    };

    //faceBook signIn
    const facebookSignIn = () => {
        handleFacebookSingIn()
        .then(res => {
            commonCode(res);
        })
        .catch(err => {
            setUser({
                errorMassage: err.massage
            })
        })
    }
    
    //gmail and password login
    const [error, setError] = useState('');
    const [pass, setPass] = useState('');
    const handleInputValue = (e) => {
        let isFormValid = true;
        if(e.target.name === "name"){
            const fNameCheck = e.target.value.length > 0;
            fNameCheck ? isFormValid = fNameCheck :
            setError("Please enter your first name")
        };

           if(e.target.name === "email"){
               const checkEmailLength = e.target.value.length > 0;
               const checkEmail = /\S+@\S+\.\S+/.test(e.target.value);
               checkEmailLength && checkEmail ? isFormValid = checkEmailLength && checkEmail :
               setError("Please enter your right email address")
        };

        if(e.target.name === "password"){
            const passCheck = e.target.value.length > 6;
            if(passCheck){
                isFormValid = passCheck
                setPass(e.target.value)
            }
            else{
                setError("Please enter your password or up 6 character")
            }
        }

        if(e.target.name === "cPassword"){
            if(e.target.value.length < 6){
                setError("Please enter your confrim password")
            }
            else if(e.target.value !== pass){
                setError("password and confrim password not match")
            }
            else{
                isFormValid = true;
            }
        }
        

        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const newUserSignIn = (e) =>  {
        if(user.email && user.password){
           emailPassSingIn(user)
           .then(res => {
               commonCode(res);
           })
           .catch(err => {
               setUser({errorMassage: err.massage})
           })
        }
        e.preventDefault();    
    }

    const commonCode = (res) => {
        const {displayName, email} = res.user;
            const newUser = {
                isSingIn: true,
                name: displayName,
                email: email,
                password: '',
                errorMassage: '',
                successMassage: true
            }
            setUser(newUser);
            history.replace(from);
    }

    return (
        <>
        <h4>{user.displayName}</h4>
          <NavbarComponent />
          <RegistrationForm user={user} error={error} handleInputValue={handleInputValue} newUserSignIn={newUserSignIn} facebookSignIn={facebookSignIn} googleSignIn={googleSignIn} />
        </>
    );
};

export default Registration;