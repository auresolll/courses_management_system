import { FC } from "react";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import styles from "./Video.module.scss";
//@ts-ignore
interface VideoProps {}

const Video: FC<VideoProps> = () => {
  return (
    <div className={styles.Video}>
      <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <ControlBar autoHide={false} className="my-class" />
      </Player>

      <h3 className={styles.Video__Heading}>
        [Official Audio] Một Ngày Khác - Young H ft B Ray X Roy P
      </h3>
      <div className={styles.Video__Transcript}></div>
    </div>
  );
};

export default Video;
