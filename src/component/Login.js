import React, { Component } from 'react';
import firebase from './../config/firebase';
import './style.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(e) {
        e.preventDefault(e);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            console.log(user);
        }).catch((e) => {
            console.log(e);
        })
    }

    signup(e) {
        e.preventDefault(e);
        console.log(this.state)
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            console.log(user);
        }).catch((user) => {
            console.log(user);
        })
    }
    render() {
        return (
            <div className="container">
                <div className="input-fields">
                    <h6>Email: <input type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        ></input></h6>
                    <h6>Password: <input type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        ></input> </h6>

                </div>
                
                    <button className="waves-effect waves-light btn" onClick={this.login}>Login</button>
                
                
                    <button className="waves-effect waves-light btn" onClick={this.signup}>Sign Up</button>
                

            </div>
        )
    }
}

export default Login;