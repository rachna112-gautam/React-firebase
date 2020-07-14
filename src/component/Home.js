import React, { Component } from "react";
import firebase from "../config/firebase";
import './style.css';
class Home extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {

        }
    }

    logout(e){
        firebase.auth().signOut()
    }
    render(){
        return(
            <div className="home-container">
            <h1>You are Logged In</h1>
            
                    <button className="waves-effect waves-light btn" onClick={this.logout}>Sign Up</button>
                
            </div>
        )
    }
}

export default Home;