import { FC } from "react";
import ListVideos from "../../ListVideos/ListVideos.lazy";
import Video from "../../Video/Video.lazy";

import styles from "./Lectures.module.scss";

interface LecturesProps {}

const Lectures: FC<LecturesProps> = () => (
  <div className={styles.Lectures}>
    <div className={styles.Lectures__Warper__Video}>
      <Video />
    </div>
    <div className={styles.Lectures__Warper__Videos}>
      <ListVideos />
    </div>
  </div>
);

export default Lectures;
