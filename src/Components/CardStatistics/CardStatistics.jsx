import styles from "./CardStatistics.module.css";

export const CardStatistics = ({ label, percentage, color }) => {
  return (
    <li style={{"--color": color}} className={styles.listItem}>
      {console.log(color)}
      <p>{label}</p>
      <p>{percentage}%</p>
    </li>
  );
};
