import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateUUID } from "../../../helper";
import ListVideos from "../../ListVideos/ListVideos.lazy";
import Video from "../../Video/Video.lazy";

import styles from "./Lectures.module.scss";

interface LecturesProps {}

const Lectures: FC<LecturesProps> = () => {
  const { lectures } = useParams();
  const [video, setVideo] = useState({
    id: generateUUID(),
    url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    name: "Course Introduction: Welcome to Developing Back-End Apps with Node.js & Express",
  });

  useEffect(() => {
    if (!lectures) {
      return;
    }

    setVideo({
      ...video,
      id: lectures,
    });
  }, [lectures]);

  return (
    <div className={styles.Lectures}>
      <div className={styles.Lectures__Warper__Video}>
        <Video video={video} />
      </div>
      <div className={styles.Lectures__Warper__Videos}>
        {lectures && <ListVideos lectures={lectures} />}
      </div>
    </div>
  );
};

export default Lectures;
