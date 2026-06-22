export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr key={0}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el) => {
          return (
            <tr key={el.id}>
              <th>{el.type}</th>
              <th>{el.amount}</th>
              <th>{el.currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
