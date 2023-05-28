import { FC } from "react";
import ReactDOMServer from "react-dom/server";
import { Tooltip } from "react-tooltip";
import { generateUUID } from "../../helper";
import styles from "./Grades.module.scss";
interface GradesProps {}

const Grades: FC<GradesProps> = () => (
  <div className={styles.Grades}>
    <h1 className={styles.Grades__Heading}>Grades</h1>

    <div className={styles.Grades__Warper}>
      <div className={styles.Grades__Warper__Heading}>
        <p className={styles.Grades__Warper__Heading__Row}>
          <span></span> <span>Item</span>
        </p>
        <p className={styles.Grades__Warper__Heading__Row}>
          <span></span> <span>Status</span>
        </p>
        <p className={styles.Grades__Warper__Heading__Row}>
          <span></span> <span>Due</span>
        </p>
        <p className={styles.Grades__Warper__Heading__Row}>
          <span></span> <span>Weight</span>
        </p>
        <p className={styles.Grades__Warper__Heading__Row}>
          <span></span> <span>Grade</span>
        </p>
      </div>
      <div className={styles.Grades__Warper__Content__Warper}>
        {[1, 2, 3, 4, 5].map(() => (
          <div className={styles.Grades__Warper__Content} key={generateUUID()}>
            <p className={styles.Grades__Warper__Heading__Row}>
              {IconLocked}
              <span className={styles.Grades__Warper__Content__Col}>
                <p className={styles.Grades__Warper__Content__Col__Primary}>
                  Graded Quiz
                </p>
                <span
                  className={styles.Grades__Warper__Content__Col__Secondary}
                >
                  Quiz
                </span>
              </span>
            </p>
            <p className={styles.Grades__Warper__Heading__Row}>
              {iconStatusExplanation}
              <span>Status</span>
            </p>
            <p className={styles.Grades__Warper__Heading__Row}>
              <span className={styles.Grades__Warper__Content__Col}>
                <p>May 21</p>
                <span>11:59 PM PDT</span>
              </span>
            </p>
            <p className={styles.Grades__Warper__Heading__Row}>
              <span>25%</span>
            </p>
            <p className={styles.Grades__Warper__Heading__Row}>
              <span>--</span>
            </p>
          </div>
        ))}
      </div>
    </div>
    <Tooltip id="my-tooltip" />
  </div>
);

export const IconLocked = (
  <svg
    aria-labelledby="cds-react-aria-6-title"
    fill="none"
    focusable="false"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    id="cds-react-aria-6"
    className="css-0"
  >
    <title id="cds-react-aria-6-title">Locked</title>
    <g clipPath="url(#cds-react-aria-6_0)" fill="currentColor">
      <path d="M13.45 13.45a1.45 1.45 0 10-2.18 1.26V16h1.46v-1.29a1.45 1.45 0 00.72-1.26z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zM.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.718a3.5 3.5 0 013.77 3.372v2.4a.5.5 0 01-1 0V7.1a2.5 2.5 0 00-2.725-2.382.5.5 0 01-.09 0A2.5 2.5 0 009.23 7.1v2.46a.5.5 0 01-1 0V7.09v-.02A3.5 3.5 0 0112 3.718z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.61 9.56a.5.5 0 01.5-.5h9.78a.5.5 0 01.5.5v8.56a.5.5 0 01-.5.5H7.11a.5.5 0 01-.5-.5V9.56zm1 .5v7.56h8.78v-7.56H7.61z"
      ></path>
    </g>
    <defs>
      <clipPath id="cds-react-aria-6_0">
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export const iconStatusExplanation = (
  <svg
    aria-labelledby="cds-react-aria-7-title"
    fill="none"
    focusable="false"
    height="24"
    role="tooltip"
    viewBox="0 0 24 24"
    width="24"
    id="cds-react-aria-7"
    className="css-0"
    data-tooltip-id="my-tooltip"
    data-tooltip-html={ReactDOMServer.renderToStaticMarkup(
      <div>
        Purchase a subscription to <br /> unlock this item
      </div>
    )}
  >
    <title id="cds-react-aria-7-title">Status explanation</title>
    <path
      d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 3.13a1.33 1.33 0 110 2.66 1.33 1.33 0 010-2.66zm2.64 14.45H9.38v-2H11v-5.87H9.38v-2H13v7.87h1.62l.02 2z"
      fill="currentColor"
    ></path>
  </svg>
);
export default Grades;
