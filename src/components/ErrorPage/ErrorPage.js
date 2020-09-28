import React from 'react';
import NavbarComponent from '../NavBar/NavbarComponent';

const ErrorPage = () => {
    return (
        <div>
            <NavbarComponent />
            <h1 className="text-center text-danger">404!</h1>
            <h1 className="text-center">page not found</h1>
        </div>
    );
};

export default ErrorPage;