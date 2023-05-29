import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generateUUID } from "../../helper";
import styles from "./ListVideos.module.scss";

interface ListVideosProps {
  lectures: string;
}

const ListVideos: FC<ListVideosProps> = ({ lectures }) => {
  const [isActive, setIsActive] = useState(Number(lectures));
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.ListVideos}>
      <h3 className={styles.ListVideos__Heading}>Danh sách Videos</h3>

      <ul className={styles.ListVideos__Warper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <li
            className={`${styles.ListVideos__Warper__Item} ${
              isActive === item && styles.ListVideos__Warper__Item__Active
            }`}
            key={generateUUID()}
            onClick={() => {
              setIsActive(item);
              const PATH = `../${name}/lectures/${item}`;
              navigate(PATH);
            }}
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
