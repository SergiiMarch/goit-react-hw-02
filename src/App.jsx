import { useState } from "react";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = state;

  const handleGoodClick = () => setState({ ...state, good: good + 1 });
  const handleNeutralClick = () => setState({ ...state, neutral: neutral + 1 });
  const handleBadClick = () => setState({ ...state, bad: bad + 1 });
  return (
    <>
      <Description />
      <Options
        onGoodClick={handleGoodClick}
        onNeutralClick={handleNeutralClick}
        onBadClick={handleBadClick}
      />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
