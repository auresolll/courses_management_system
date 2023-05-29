import { FC } from "react";
import { ControlBar, Player } from "video-react";
import "video-react/dist/video-react.css"; // import css
import styles from "./Video.module.scss";
interface VideoProps {
  video: {
    id: string;
    url: string;
    name: string;
  };
}

const Video: FC<VideoProps> = ({ video }) => {
  return (
    <div className={styles.Video}>
      <Player autoPlay src={video.url}>
        <ControlBar autoHide={false} className="my-class" />
      </Player>

      <h3 className={styles.Video__Heading}>
        {video.id} {video.name}
      </h3>
      <div className={styles.Video__Transcript}></div>
    </div>
  );
};

export default Video;
