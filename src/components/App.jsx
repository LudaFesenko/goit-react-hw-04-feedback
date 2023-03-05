import { useState } from 'react';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const options = [
  { type: 'good', label: 'Good' },
  { type: 'neutral', label: 'Neutral' },
  { type: 'bad', label: 'Bad' },
];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good': {
        setGood(prevState => prevState + 1);
        break;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);
        break;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);
        break;
      }
    }
  };
  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100) || 0;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
