import styles from "./GuessLogItem.module.css";

function GuessLogItem({ round, guess }) {
  return (
    <li className={styles.logItem}>
      <span className={styles.logItemText}>#{round}</span>
      <span className={styles.logItemText}>Guess: {guess}</span>
    </li>
  );
}

export default GuessLogItem;
