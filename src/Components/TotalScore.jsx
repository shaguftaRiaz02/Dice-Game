/* eslint-disable react/prop-types */

import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  );
};

export default TotalScore;

const Score = styled.div`
  max-width: 135px;
  max-height: 151px;
  text-align: center;
  margin-left: 2rem;

  h1 {
    font-size: 100px;
    line-height: 1px;
  }

  p {
    font-size: 24px;
    line-height: 1px;
  }
`;
