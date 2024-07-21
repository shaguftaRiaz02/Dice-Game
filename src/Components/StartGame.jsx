/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import Button from "./Button";
// import BgVideo from "../../public/videos/Dice.mp4"


const StartGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const handleDiceRoll = (diceNumber) => {
    if (selectedNumber === null) {
      alert("Please select a number first");
      setError("You've not selected any number");
      return;
    }
    setError("");

    if (diceNumber === selectedNumber) {
      setTotalScore((prevScore) => prevScore + diceNumber);
    } else {
      setTotalScore((prevScore) => prevScore - 2);
    }

    setSelectedNumber(null);
  };

  const handleResetScore = () => {
    setTotalScore(0);
  };

  const handleToggleRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <>
    <BG>
      <TopContainer>
      {/* <VideoBackground autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground> */}
        <TotalScore score={totalScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
        />
      </TopContainer>
      <RoleDice onDiceRoll={handleDiceRoll} />
      <BtnContainer>
        <Button
          className="reset-btn"
          text="Reset Score"
          onClick={handleResetScore}
        />
        <Button
          className="rules-btn"
          text="Game Rules"
          onClick={handleToggleRules}
        />
      </BtnContainer>
      {showRules && (
        <RulesBox>
          <h2>Game Rules</h2>
          <p>Here are the rules of the game...</p>

          <p>
            <b>1) </b>Accumulate the highest score by guessing the dice roll
            outcome.
            <br />
            <b>2) </b>Select a number between 1 and 6.
            <br />
            <b>3) </b>Click &quot;Roll Dice&quot; to roll the dice.
            <br />
            <b>4) </b>Match: Earn points equal to the rolled number.
            <br />
            <b>5) </b>No match: Lose 2 points.
            <br />
            <b>6) </b>Must select a number before rolling.
            <br />
            <b>7) </b>Use &quot;Reset Score&quot; to reset your score to 0.
            <br />
            <b>8) </b>Use &quot;Game Rules&quot; to view the game rules.
            <br />
            <b>9) </b>Use &quot;Close&quot; to close the rules box.
            <br />
            <b>10) </b>Continue playing until you choose to stop.
            <br />
            <b>11) </b>The game is chance-based; no guaranteed strategy.
          </p>

          <Button text="Close" onClick={handleToggleRules} />
        </RulesBox>
      )}
      {/* {showRules ? (
        <RulesBox>
          <h2>Game Rules</h2>
          <p>Here are the rules of the game...</p>
          <Button text="Close" onClick={handleToggleRules} />
        </RulesBox>
      ) : null} */}
      </BG>
    </>
  );
};

export default StartGame;

const BG= styled.div`
  background-image: url("../../public/Images/shadows-8829579_1280.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`

const TopContainer = styled.div`
  display: flex;
  max-width: 1280px;
  max-height: 151px;
  justify-content: space-around;
  margin-top: 2rem;
`;

// const VideoBackground = styled.video`
//   position: absolute; /* Position the video absolutely within the container */
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* Make sure the video covers the entire container */
//   z-index: -1; /* Place the video behind the other content */
// `;

const BtnContainer = styled.div`
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 37.5cap;

  .reset-btn {
    background-color: white;
    color: black;
  }

  .rules-btn {
    margin-top: 1.5rem;
  }
`;

const RulesBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: white;
  color: black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    text-align: left;
  }
  b{
    color: gray;
  }
`;
