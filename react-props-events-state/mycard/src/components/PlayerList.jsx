import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ players }) => (
  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
    {players.map((player) => (
      <PlayerCard key={player.id} player={player} />
    ))}
  </div>
);

export default PlayerList;
