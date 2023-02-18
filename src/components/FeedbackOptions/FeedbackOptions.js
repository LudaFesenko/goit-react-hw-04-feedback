import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(({ type, label }) => (
      <Button
        className="button"
        key={type}
        type="button"
        onClick={() => onLeaveFeedback(type)}
      >
        {label}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackOptions;
