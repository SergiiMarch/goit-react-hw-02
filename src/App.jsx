import { useState } from "react";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import css from "./App.module.css";
import Notification from "./components/Notification/Notification";
import { useEffect } from "react";

function App() {
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem("my-state");

    return savedState !== null
      ? JSON.parse(savedState)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("my-state", JSON.stringify(state));
  }, [state]);

  const { good, neutral, bad } = state;

  const updateFeedback = (feedbackType) => {
    setState((state) => ({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? `${Math.round((good / totalFeedback) * 100)}%` : "0%";

  return (
    <div className={css.container}>
      <Description />
      <Options
        onGoodClick={() => updateFeedback("good")}
        onNeutralClick={() => updateFeedback("neutral")}
        onBadClick={() => updateFeedback("bad")}
        onResetClick={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback !== 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}

export default App;
