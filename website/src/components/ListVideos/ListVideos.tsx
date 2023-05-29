import { FC, useState } from "react";
import styles from "./ListVideos.module.scss";

interface ListVideosProps {}

const ListVideos: FC<ListVideosProps> = () => {
  const [isActive, setIsActive] = useState(2);
  return (
    <div className={styles.ListVideos}>
      <h3 className={styles.ListVideos__Heading}>Danh sách Videos</h3>

      <ul className={styles.ListVideos__Warper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <li
            className={`${styles.ListVideos__Warper__Item} ${
              isActive === item && styles.ListVideos__Warper__Item__Active
            }`}
            onClick={() => setIsActive(item)}
          >
            <div>
              <p
                className={`${styles.ListVideos__Warper__Item__Circle} 
                ${item < 5 && styles.ListVideos__Warper__Item__HasLearn}`}
              ></p>
            </div>
            <div>
              <p className={styles.ListVideos__Warper__Item__Title}>
                <strong>{item}.</strong> Course Introduction: Welcome to
                Developing Back-End Apps with Node.js & Express
              </p>
              <small>7 phút</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListVideos;
