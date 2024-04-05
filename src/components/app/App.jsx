import { useState } from 'react';
import { useEffect } from "react";


import Description from "../description/Description";
import Options from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";
import Chart1 from "../chat/Chat";

import './App.css'

const App = () => {
  const [values, setValues] = useState(() => {
    const savedStats = window.localStorage.getItem("stats");
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    } else return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") setValues({ good: 0, neutral: 0, bad: 0 });
    else {
      setValues({
        ...values,
        [feedbackType]: values[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positivePerc = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options update={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <div className="feedback">
          <Feedback
            stats={values}
            totalFeedback={totalFeedback}
            positivePerc={positivePerc}
          />
          <Chart1
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={totalFeedback}
          />
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};


export default App
