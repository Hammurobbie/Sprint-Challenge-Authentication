import React, { useState } from "react";
import axios from "axios";

const Register = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:3300/api/auth/register", creds)
      .then(res => {
        console.log(res);
        console.log(props);
        props.history.push("/");
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
      <h1>Register</h1>
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
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Register;
