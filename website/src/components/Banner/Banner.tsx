import { FC } from "react";
import styles from "./Banner.module.scss";

interface BannerProps {}

/**
 * 1. Start get ID to Course and send to server get Information
 * when Click button Reading More.
 *
 * 2. Start get ID to Course and send to server get Information
 * and show to components. Use redux.
 */
const Banner: FC<BannerProps> = ({}) => (
  <div className={styles.Banner}>
    <div className={styles.Banner__Content}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png"
        alt="IBM"
        className={styles.Banner__Content__Image}
      />

      <h1>IBM Full Stack Software Developer Professional Certificate</h1>
      <span>25,516 already enrolled</span>
      <p>
        Kickstart your career in application development. Master Cloud Native
        and Full Stack Development using hands-on projects involving HTML,
        JavaScript, Node.js, Python, Django, Containers, Microservices and more.
        No prior experience required.
      </p>

      <div className={styles.Banner__Content__Button}>
        <button>Start Learn Course</button>
        <button>Reading More</button>
      </div>
    </div>
    <div className={styles.Banner__Warper__Image}>
      <img
        src="https://i.pinimg.com/564x/34/63/32/34633209c0ce0efa9fa1dab12df3ed2d.jpg"
        alt="Banner"
        loading="lazy"
        className={styles.Banner__Image}
      />
    </div>
  </div>
);

export default Banner;
