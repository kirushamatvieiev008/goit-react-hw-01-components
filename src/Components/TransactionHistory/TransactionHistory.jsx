import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className={styles.rowHead} key={0}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((el, index) => {
          return (
            <tr className={index % 2 === 0? styles.duo : styles.uno} key={el.id}>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
