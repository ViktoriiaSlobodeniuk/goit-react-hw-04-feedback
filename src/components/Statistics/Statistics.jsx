import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Info, List, Span } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const variableContent =
    total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <List>
        <Info>
          <Span>Good:</Span> {good}
        </Info>

        <Info>
          <Span>Neutral:</Span> {neutral}
        </Info>

        <Info>
          <Span>Bad:</Span> {bad}
        </Info>

        <Info>
          <Span>Total:</Span> {total}
        </Info>

        <Info>
          <Span>Positive feedback:</Span> {positivePercentage}%
        </Info>
      </List>
    );

  return <>{variableContent}</>;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
