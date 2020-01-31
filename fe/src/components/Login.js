import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/login", creds)
      .then(res => {
        console.log(res);
        console.log(props);
        props.history.push("/users");
      })
      .catch(err => console.log(err.message));
  };

  const handleChanges = e => {
    e.preventDefault();
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  console.log(creds);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          placeholder="Username"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="Password"
        ></input>
        <input onClick={handleSubmit} type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
