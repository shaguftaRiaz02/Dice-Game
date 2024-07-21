import { useState } from "react";
import FirstScreen from "./Components/FirstScreen";
import StartGame from "./Components/StartGame";
import "./App.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const toggleGameStart = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {gameStarted ? <StartGame toggle={toggleGameStart} /> : <FirstScreen toggle={toggleGameStart} />}
    </>
  );
};

export default App;
