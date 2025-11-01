import React, { useState } from "react";

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      width: "180px",
      textAlign: "center"
    }}>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      {showDetails && <p>Email: {user.email}</p>}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
};

export default UserCard;
