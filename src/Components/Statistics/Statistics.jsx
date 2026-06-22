export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {/* {console.log(Object.entries(stats))} */}
        {stats.map((el) => {
          return (
            <li key={el.id}>
              <p>{el.label}</p>
              <p>{el.percentage}%</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
