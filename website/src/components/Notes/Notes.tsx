import { FC } from "react";
import styles from "./Notes.module.scss";

interface NotesProps {}

const Notes: FC<NotesProps> = () => (
  <div className={styles.Notes}>
    <h1 className={styles.Notes__Heading}>Notes</h1>
  </div>
);

export default Notes;
