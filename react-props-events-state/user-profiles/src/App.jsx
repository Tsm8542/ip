import React from "react";
import UserList from "./components/UserList";

const App = () => {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profiles</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
