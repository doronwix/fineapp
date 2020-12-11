import * as React from "react";
import styles from "./Grid.module.css";
import TextInput from "../../TextInput";

const Grid = (props) => {
  return (
    <div className={styles.container}>
      <header className={`${styles.cell} ${styles.cell1}`}>
        <TextInput type="text" id="symbolText" name="symbolText" />
      </header>
      <aside className={`${styles.cell} ${styles.cell2}`}>
        <div className={`${styles.cell} ${styles.cell2}`}>1</div>
        <div className={`${styles.cell} ${styles.cell2}`}>2</div>
        <div className={`${styles.cell} ${styles.cell2}`}>3</div>
        <div className={`${styles.cell} ${styles.cell2}`}>4</div>
      </aside>
      <main className={`${styles.cell} ${styles.cell3}`}>Main content</main>
      <aside className={`${styles.cell} ${styles.cell4}`}>Right sidebar</aside>
      <footer className={`${styles.cell} ${styles.cell5}`}>Footer</footer>
    </div>
  );
};
export default Grid;
