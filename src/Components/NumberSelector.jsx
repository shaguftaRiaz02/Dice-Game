// import { useState } from "react";
// import styled from "styled-components";

// const NumberSelector = () => {
//   const arrNumber = [1, 2, 3, 4, 5, 6];
//   const [selectedNumber, setSelectedNumber] = useState(null);

//   return (
//     <>
//       <SelectionArea>
//         <div className="flex">
//         {arrNumber.map((value, i) => (
//           <Box
//             isSelected={value === selectedNumber}
//             key={i}
//             onClick={() => setSelectedNumber(value)}
//           >
//             {value}
//           </Box>
//         ))}
//         </div>
//         <p>Select Number</p>
//       </SelectionArea>
//     </>
//   );
// };

// export default NumberSelector;

// const SelectionArea = styled.div`
// .flex{
//   display: flex;
//   gap: 24px;
//   margin-top: 2rem;
// }

// p{
//   font-size: 24px;
//   font-weight: 400;
//   margin-left: 23rem;

// }

// `;

// const Box = styled.button`
//   width: 72px;
//   height: 72px;
//   font-weight: 600;
//   font-size: 24px;
//   border: 2px solid gray;
//   display: grid;
//   place-items: center;
//   background-color: ${(props) => (props.isSelected ? "black" : "white")};
//   color: ${(props) => (props.isSelected ? "white" : "black")};
//   cursor: pointer;

//   &:hover {
//     background-color: lightgray;
//   }
// `;

/* eslint-disable react/prop-types */

import styled from "styled-components";

const NumberSelector = ({ error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <SelectionArea>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectionArea>
  );
};

export default NumberSelector;

const SelectionArea = styled.div`
  .error {
    color: red;
    font-size: 1cap;
  }
  .flex {
    display: flex;
    gap: 24px;
    margin-top: 2rem;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    margin-left: 23rem;
    color: ${(props) => (props.selectedNumber === null ? "red" : "black")};
  }
`;

const Box = styled.button`
  width: 72px;
  height: 72px;
  font-weight: 600;
  font-size: 24px;
  border: 2px solid gray;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
