import React, { Component } from 'react';
import './App.css';

class LoginForm extends Component {
    render () {
        return (
            <form action="login">
                 <div>Login</div>
                <label htmlFor="password"></label>
            </form>
        );
    }
}

export default LoginForm;