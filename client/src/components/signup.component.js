import React, { useState } from "react";
import Axios from 'axios';

export const Signin = () =>{

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passwrd, setPasswrd] = useState('')

    const [signinStatus, setSigninStatus] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('./api/admin-sign-in', {
                user,
                name,
                lastName,
                passwrd
        }).then((response) => {
            console.log(response);
        

        if(response.data.message){
            setSigninStatus(response.data.message)
        } else {
            setSigninStatus("Usuario creado: " + response.data)
        }
    });
    };
        return (
            <form>
                <h3>Register</h3>
                <label>{signinStatus}</label>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" onChange={(e) => {setLastName(e.target.value)}}  placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}} placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"  onChange={(e) => {setUser(e.target.value)}} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) => {setPasswrd(e.target.value)}} placeholder="Enter password" />
                </div>

                <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block">Register</button>

                
            </form>

            
        );
    }

    export default Signin;