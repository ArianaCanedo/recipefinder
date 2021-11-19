import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {

    const[user, setUser] = useState({
        username: "",
        password: "",
    })

    const logUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/jason",
                },
                body: JSON.stringify(user),
            });
            setUser({
                username: "",
                password: "",
            });

        }catch (err) {
            console.log(err);
        }
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        setUser((state)=>({...setUser, [name]: value}));
    }

    return (
        <div>
            <div><Link to="/">Home</Link></div>

        <div className="container">
            <form onSubmit={(e) => logUser(e)}>
                <div>
                    <fieldset>
                        <legend>Login</legend>
                        <div className="form-row">
                            <div className="col">
                                <label>Username</label>
                                <input name="username" type="text " value={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
                            </div>
                            <div>
                            <label>Password</label>
                                <input name="password" type="password" value={(e)=>handleChange(e)} className="form-control shadow p-3 mb-5 bg-body rounded"/>
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
