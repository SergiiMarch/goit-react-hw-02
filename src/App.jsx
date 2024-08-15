import { useState } from "react";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import "./App.css";
import Notification from "./components/Notification/Notification";

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

  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options
        onGoodClick={() => updateFeedback("good")}
        onNeutralClick={() => updateFeedback("neutral")}
        onBadClick={() => updateFeedback("bad")}
      />

      {totalFeedback !== 0 ? (
        <Feedback good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
}

export default App;
