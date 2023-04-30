import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TableRow even={index % 2 === 0} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
