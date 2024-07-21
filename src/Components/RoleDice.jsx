/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ onDiceRoll }) => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);
    onDiceRoll(randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/Images/RoleDiceImages/dice_${currentDice}.png`}
          alt={`Dice showing ${currentDice}`}
        />
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;

  img {
    max-height: 250px;
    max-width: 250px;
    cursor: pointer;
  }
`;
