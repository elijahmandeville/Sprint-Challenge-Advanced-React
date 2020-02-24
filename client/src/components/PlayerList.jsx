import React from "react";
import PlayerCard from "./PlayerCard";

function PlayerList(props) {
  console.log(props);
  return (
    <div className="player-list">
      {props.players.map(item => {
        return <PlayerCard key={item.id} player={item} />;
      })}
    </div>
  );
}

export default PlayerList;
