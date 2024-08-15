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

  const updateFeedback = (feedbackType) => {
    setState((state) => ({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    }));
  };
  return (
    <>
      <Description />
      <Options
        onGoodClick={() => updateFeedback("good")}
        onNeutralClick={() => updateFeedback("neutral")}
        onBadClick={() => updateFeedback("bad")}
      />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
