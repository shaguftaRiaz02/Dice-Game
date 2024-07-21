/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = ({ onClick, text , className}) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>{text}</ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  background-color: gray;
  color: white;
  max-width: 220px;
  max-height: 44px;
  padding: 10px 35px;
  border-radius: 5px;
  gap: 2px;
  border: 1px solid gray;
  font-weight: 700;
  margin-left: 18cap;
  font-size: 18px;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 50px 15px #48abe0;
    transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  }
`;
