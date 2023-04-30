import PropTypes from 'prop-types';
import { StatSection, Title, List, ListItem, Span } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Span>{label}</Span>
            <Span>{percentage}%</Span>
          </ListItem>
        ))}
      </List>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
