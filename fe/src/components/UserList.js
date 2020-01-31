import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map(user => (
          <div>
            <h3>{user.username}</h3>
            <p>{user.password}</p>
            <p>{user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
