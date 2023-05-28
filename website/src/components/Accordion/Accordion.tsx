import { FC, useState } from "react";
import styles from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.Accordion}>
      <div className={styles.Accordion__Item}>
        <div
          className={styles.Accordion__Title}
          onClick={() => setIsActive(!isActive)}
        >
          <div>{title}</div>
          {/* <div>{isActive ? "-" : "+"}</div> */}
        </div>
        <div
          className={`${styles.Accordion__Content} ${
            isActive && styles.Accordion__Content__Active
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
