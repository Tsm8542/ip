import React from "react";
import PlayerList from "./components/PlayerList";

const App = () => {
  const favouritePlayers = [
    {
      id: 1,
      name: "Lionel Messi",
      team: "Inter Miami",
      position: "Forward",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      team: "Al Nassr",
      position: "Forward",
      photo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
    },
    {
      id: 3,
      name: "Virat Kohli",
      team: "RCB",
      position: "Batsman",
      photo: "https://im.rediff.com/cricket/2022/sep/08vk.gif"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>MyCard - Favourite Players</h1>
      <PlayerList players={favouritePlayers} />
    </div>
  );
};

export default App;
