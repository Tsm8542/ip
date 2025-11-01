import React from "react";

const PlayerCard = ({ player }) => (
  <div style={{
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    width: "200px",
    textAlign: "center"
  }}>
    <img src={player.photo} alt={player.name} style={{ width: "100%", borderRadius: "8px" }} />
    <h3>{player.name}</h3>
    <p>Team: {player.team}</p>
    <p>Position: {player.position}</p>
  </div>
);

export default PlayerCard;
