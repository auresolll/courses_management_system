import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard, setOpenCardDetail } from "../../app/redux/features/cardSlice";
import { RootState } from "../../app/redux/store";
import { generateUUID } from "../../helper";
import styles from "./Card.module.scss";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.card.isOpenCardDetail);
  return (
    <div
      className={`${styles.Card} ${
        color ? styles.Card__Color__Black : styles.Card__Color__White
      } card-container`}
      onClick={() => {
        dispatch(
          setCard({
            id: generateUUID(),
            name: "The Data Science Course: Complete Data Science Bootcamp",
            star: 5,
          })
        );
        dispatch(setOpenCardDetail(true));
      }}
    >
      <img
        src="https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg"
        alt=""
      />

      <div className={styles.Card__Content}>
        <h4 className={styles.Card__Content__Title}>
          The Data Science Course: Complete Data Science Bootcamp
        </h4>
        <span className={styles.Card__Content__Instructor}>Dr. Angela Yu</span>

        <div className={styles.Card__Content__Rating}>
          <strong className={styles.Card__Content__Rating__Calculator}>
            4.7
          </strong>
          <span className={styles.Card__Content__Rating__Star}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </span>
          <span className={styles.Card__Content__Rating__Count}>
            (199,888 ratings)
          </span>
        </div>

        <div className={styles.Card__Content__Price}>
          <strong className={styles.Card__Content__Price__New}>
            258.000 VND
          </strong>
          <del className={styles.Card__Content__Price__Old}>611.000 VND</del>
        </div>

        <button>Bestseller</button>
      </div>
    </div>
  );
};

export default Card;
