import React, { Component } from "react";
import Login from "./../components/Login";



class LoginPage extends Component {
    render() {
        return (
            <div>
                <Login action={this.updateUser}/>
            </div>
           
        );
    }
}

export default LoginPage;