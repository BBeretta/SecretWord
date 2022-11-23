import React from "react";
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Click here to start the game!</p>
      <button onClick={startGame}>Play Game!</button>
    </div>
  );
};

export default StartScreen;
