import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials((state) => ({ ...setCredentials, [name]: value }));
  };

  const login = async (e) => {
      e.preventDefault();
    try {
      console.log("IT GETS HERE");
      const { data } = await axios("/users/login", {
        method: "POST",
        data: credentials,
      });
      console.log("Here's the data: ", data);
     localStorage.setItem("token", data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const requestData = async () => {
    try {
      const { data } = await axios.post("/users/profile", {
        heardes: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div className="container">
        <form>
          <div>
            <fieldset>
              <legend>Login</legend>
              <div className="form-row">
                <div className="col">
                  <label>Username</label>
                  <input
                    name="username"
                    type="text "
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded"
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                    className="form-control shadow p-3 mb-5 bg-body rounded"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={(e)=>login(e)}
                  >
                    Log in
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
