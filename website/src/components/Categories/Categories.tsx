import { FC } from "react";
import { generateUUID } from "../../helper";
import styles from "./Categories.module.scss";

interface CategoriesProps {
  title: string;
  layout: number;
}

const Categories: FC<CategoriesProps> = ({ title, layout }) => (
  <div className={styles.Categories}>
    <h1 className={styles.Categories__Title}>{title}</h1>
    <div className={styles.Categories__List}>
      {layout === 1 &&
        [1, 2, 3, 4, 5].map((x) => (
          <div className={styles.Categories__List__Item} key={generateUUID()}>
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100"
              alt=""
            />
            <div className={styles.Categories__List__Item__Content}>
              <h6 className={styles.Categories__List__Item__Content__Title}>
                Design
              </h6>
              <p className={styles.Categories__List__Item__Content__Count}>
                12211 Course
              </p>
            </div>
          </div>
        ))}

      {layout === 2 &&
        [1, 2, 3, 4, 5].map((item) => (
          <p className={styles.Categories__List__Item_2} key={generateUUID()}>
            Front End Web Development
          </p>
        ))}
    </div>
  </div>
);

export default Categories;
