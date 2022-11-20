import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableBody,
  TableRow,
  ColumnTitle,
  ColumnData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
	return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <ColumnData>{type}</ColumnData>
            <ColumnData>{amount}</ColumnData>
            <ColumnData>{currency}</ColumnData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
