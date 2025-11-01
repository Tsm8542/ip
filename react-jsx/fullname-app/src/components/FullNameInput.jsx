import React, { useState } from "react";

const FullNameInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <h2>
        Full Name: {firstName} {lastName}
      </h2>
    </div>
  );
};

export default FullNameInput;
