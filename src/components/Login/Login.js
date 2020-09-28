import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import NavbarComponent from '../NavBar/NavbarComponent';
import { handleFacebookSingIn, handleGoogleSingIn, intFirebase, signIn } from '../UserManagment/UserMAnagment';
import LoginForm from './LoginForm';

const Login = () => {
    intFirebase();
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
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


    const handleInputValue = (e) => {
        let isFormValid = true;

        if(e.target.name === "email"){
            const checkEmailLength = e.target.value.length > 0;
            const checkEmail = /\S+@\S+\.\S+/.test(e.target.value);
            checkEmailLength && checkEmail ? isFormValid = checkEmailLength && checkEmail :
            setError("Please enter your right email address")
       };

       if(e.target.name === "password"){
        const passCheck = e.target.value.length > 6;
       passCheck ?
            isFormValid = passCheck
            :
            setError("Please enter your password or up 6 character")
        }

        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    
    const singInUser = (e) =>  {
        e.preventDefault(); 
        if(user.email && user.password){
           signIn(user)
           .then(res => {
             commonCode(res);
           })
           .catch(err => {
               setUser({errorMassage: err.massage});
           })   
       }
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
        <div className="login-ara">
            <NavbarComponent />
            <LoginForm user={user} googleSignIn={googleSignIn} facebookSignIn={facebookSignIn} handleInputValue={handleInputValue} singInUser={singInUser} error={error} />
        </div>
    );
};

export default Login;