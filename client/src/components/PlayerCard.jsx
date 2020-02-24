import React from "react";
import "../App.scss";

function PlayerCard(props) {
  return (
    <div className="player-card">
      <h1>{props.player.name}</h1>
      <p>Country: {props.player.country}</p>
    </div>
  );
}

export default PlayerCard;
