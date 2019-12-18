import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", { name, age, email })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

        <input
          type="text"
          name="age"
          value={age}
          placeholder="Age"
          onChange={e => setAge(e.target.value)}
        />

        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;
