import { FC } from "react";
import styles from "./Course_Info.module.scss";

interface CourseInfoProps {}

const CourseInfo: FC<CourseInfoProps> = () => (
  <section className={styles.CourseInfo}>
    <h1 className={styles.CourseInfo__Heading}>
      Developing Back-End Apps with Node.js and Express
    </h1>
    <p className={styles.CourseInfo__Heading__Sub}>by IBM</p>
    <div className={styles.CourseInfo__Desc}>
      <p className={styles.CourseInfo__Desc__Title}>About this Course</p>
      <div dangerouslySetInnerHTML={{ __html: paraText }} />
    </div>

    <table>
      <tbody>
        <tr>
          <td className={styles.CourseInfo__Table__Row}>
            <i className="ri-shield-check-line"></i>
            <span className={styles.CourseInfo__Table__Primary}>Level</span>
          </td>
          <td>Intermediate</td>
        </tr>
        <tr>
          <td className={styles.CourseInfo__Table__Row}>
            <i className="ri-timer-line"></i>
            <span className={styles.CourseInfo__Table__Primary}>
              Commitment
            </span>
          </td>
          <td>4 weeks of study, approximately 8 hours total</td>
        </tr>
        <tr>
          <td className={styles.CourseInfo__Table__Row}>
            <i className="ri-message-2-line"></i>
            <span className={styles.CourseInfo__Table__Primary}>Language</span>
          </td>
          <td>English Volunteer to translate subtitles for this course</td>
        </tr>
        <tr>
          <td className={styles.CourseInfo__Table__Row}>
            <i className="ri-question-answer-line"></i>
            <span className={styles.CourseInfo__Table__Primary}>
              How To Pass
            </span>
          </td>
          <td>Pass all graded assignments to complete the course.</td>
        </tr>
      </tbody>
    </table>
  </section>
);

const paraText = `

<p>In a recent Stack Overflow survey, Node.js was used by about 50% of the developers who answered the survey, making it the most used server-side technology. Express ranked as the fourth most popular web technology overall, making it the most popular server-side web framework.</p>

<p>In this course, you will focus on Node.js and Express. Specifically, you will</p>

<p>- develop applications using asynchronous callbacks and promises</p>

<p>- create REST APIs and perform CRUD operations</p>

<p>- implement authentication and session management</p>

<p>Throughout the course, you will complete numerous hands-on labs to gain practical experience. At the end of the course, you will demonstrate your Node skills with a final project to build your portfolio.</p>

<p>This course will help you succeed as a back-end or full-stack developer. It suits those in IT looking to step up in their careers or new graduates seeking to establish their server-side skills. This course suits those who need to manage cloud-centric projects.</p>

<p>Note: This course requires knowledge of JavaScript and Git.</p>
`;
export default CourseInfo;
