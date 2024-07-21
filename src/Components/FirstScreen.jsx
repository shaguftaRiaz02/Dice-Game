/* eslint-disable react/prop-types */
import styled, { createGlobalStyle } from "styled-components";
import DiceImage from "/Images/DiceImage.png";
import Button from "./Button"; // Ensure the import path is correct

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #444444;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Ensure toggle is defined as a prop in the function signature
const FirstScreen = ({ toggle }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <div className="Dice-Image">
          <img src={DiceImage} alt="Dice" />
        </div>
        <div className="text">
          <h1>Dice Game</h1>
          <Button onClick={toggle} text="Play Now" />
        </div>
      </Container>
    </>
  );
};

export default FirstScreen;

const Container = styled.div`
  max-width: 1182px;
  max-height: 522px;
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  margin-top: 6rem;

  .Dice-Image {
    max-width: 649px;
    max-height: 522px;
  }

  .text {
    h1 {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 72px;
      margin-bottom: 1px;
      text-transform: uppercase;
      color: white;
    }
  }
`;
