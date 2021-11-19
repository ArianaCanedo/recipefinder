import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SignupForm() {
    const[newUser, setNewUser] = useState({
        username: "",
        password:"",
        email:"",
    })

    const addNewUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/jason",
                },
                body: JSON.stringify(newUser),
            });
            setNewUser({
                username: "",
                password: "",
                email: "",
            });
        }catch (err) {
            console.log(err);
        }
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        setNewUser((state)=>({...setNewUser, [name]: value}));
    }

    return (
        <div>
            <div><Link to="/">Home</Link></div>

        <div className="container d-flex">
            <form onSubmit={(e) => addNewUser(e)}>
                <div>
                    <fieldset>
                        <legend>Login</legend>
                        <div className="form-row">
                            <div className="col-6">
                                <label>Username</label>
                                <input name="username" type="text " value={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                            <label>Password</label>
                                <input name="password" type="password" value={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                            <label>Email Adress</label>
                                <input name="email" type="email" value={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                            </div>
                            
                        </div>
                    </fieldset>
                </div>

            </form>
        </div>
        
        </div>
    )
}
