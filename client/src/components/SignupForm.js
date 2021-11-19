import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function SignupForm() {
    const[newUser, setNewUser] = useState({
        username: "",
        password:"",
        email:"",
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {value, name} = event.target;
        setNewUser((state)=>({...state, [name]: value}));
    }

    const signup = async (e) => {
        e.preventDefault();

        axios("/users/register", {
            method: "POST",
            data: newUser,
            })
            .then((result) => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        };
    

    return (
        <div>
            <div><Link to="/">Home</Link></div>

        <div className="col-sm-6 offset-sm-3">
            <form onSubmit={(e) => signup(e)}>
                <div>
                    <fieldset>
                        <legend><h1>Sign Up</h1></legend>
                        <div className="form-row">
                            <div className="">
                                <label>Username</label>
                                <input name="username" type="text " value={newUser.username} onChange={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                            <label>Password</label>
                                <input name="password" type="password" value={newUser.password} onChange={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                            <label>Email Adress</label>
                                <input name="email" type="email" value={newUser.email} onChange={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                                <button type="submit" onClick={signup} className="btn btn-primary mt-2">Submit</button>
                            </div>
                            
                        </div>
                    </fieldset>
                </div>

            </form>
        </div>
        
        </div>
    )
}
