//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  const addHomeTouchdown = e => {
    setHomeScore(homeScore + 7);
  }
  const addHomeFieldGoal = e => {
    setHomeScore(homeScore + 3);
  }
  const addAwayTouchdown = e => {
    setAwayScore(awayScore + 7);
  }
  const addAwayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  }

  const [homeName, setHomeName] = useState('Home');
  const [awayName, setAwayName] = useState('Away');

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 contentEditable='true' className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <Timer />
          <div className="away">
            <h2 contentEditable='true' className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={addHomeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={addHomeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addAwayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={addAwayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
