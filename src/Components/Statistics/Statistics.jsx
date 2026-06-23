import styles from "./Statistics.module.css";
import { CardStatistics } from "../CardStatistics/CardStatistics";

export const Statistics = ({ title, stats }) => {
  const itemsBackColor = ['red', 'blue', 'green', 'pink'];
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.percentsList}>
        {/* {console.log(Object.entries(stats))} */}
        {stats.map((el, index) => {
          return (
            <CardStatistics key={el.id} label={el.label} percentage={el.percentage} color={itemsBackColor[index]}/>
            // <li className={styles.qwert} key={el.id}>
            //   <p>{el.label}</p>
            //   <p>{el.percentage}%</p>
            // </li>
          );
        })}
      </ul>
    </div>
  );
};
