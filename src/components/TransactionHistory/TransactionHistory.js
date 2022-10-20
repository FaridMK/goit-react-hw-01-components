import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table key={items.id} className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(e => {
          return (
            <tbody key={e.id}>
              <tr>
                <td>Invoice</td>
                <td>{e.amount}</td>
                <td>{e.currency}</td>
              </tr>
              <tr>
                <td>Withdrawal</td>
                <td>{e.amount}</td>
                <td>{e.currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
};
