import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => (
  <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UserList;
