import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function LoginForm () {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const auth = useAuth();

  const handleChange = (e) => {
    e.persist();
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const login = async () => {
    try {
      const { data } = await axios.post("/users/login", user);
      console.log(data.token)

      //store it locally
      localStorage.setItem("token", data.token);

      console.log(data.message, data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div className="col-sm-6 offset-sm-3">
        <form>
          <div>
            <fieldset>
              <legend>Login</legend>
              <div className="form-row">
                <div className="col">
                  <label htmlFor="InputUsername" className="form-label">Username</label>
                  <input
                    name="username"
                    type="text "
                    value={user.username}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded" id="InputUsername"/>
                </div>
                <div>
                  <label htmlFor="InputPassword" className="form-label">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded" id="InputPassword"/>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary m-2"
                    onClick={(e) => login(e)}>
                    Log in
                  </button>
                </div>
                <div>
                  {error && <div className="alert alert-danger mt-4">{error}</div>}
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
