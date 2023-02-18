import React from 'react';
import PropTypes from 'prop-types';

import { Item, ItemCount } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Item>Good: {good}</Item>
    <Item>Neutral: {neutral}</Item>
    <Item>Bad: {bad}</Item>
    <ItemCount>Total: {total}</ItemCount>
    <ItemCount>Positive feedback: {positivePercentage}%</ItemCount>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
