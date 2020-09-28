import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const intFirebase = () => {
    firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSingIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
           .then(response => {
               return response;
           })
           .catch(error => {
               return error;
           })
}

export const handleFacebookSingIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    })
}

export const emailPassSingIn = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(response => {
        addName(user.name)
        return response;
    })
    .catch(error => {
        return error;
    })
}

const addName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
      })
}

export const signIn = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
        return res;
    })
    .catch(err => {
        console.log(err);
        return err;
    })
}

export const handleSingOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        return res;
    })
    .catch(err => {
        return err;
    })
}