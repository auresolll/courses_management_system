import { Dispatch, FC, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import { generateUUID } from "../../helper";
import styles from "./Nav.module.scss";

interface NavProps {
  layout: number;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}
interface LayoutCardDetailNavAccordionProps {}

const LayoutCardDetailNavAccordion: FC<
  LayoutCardDetailNavAccordionProps
> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className={styles.Nav__Accordion}>
      <div
        className={styles.Nav__Accordion__Warper}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <i className="ri-arrow-down-s-line"></i>
        <h5 className={styles.Nav__Accordion__Title}>Course Management</h5>
      </div>

      <ul
        className={`${styles.Nav__Accordion__Content}
      
      ${isOpenMenu && styles.Nav__Accordion__Content__Active} `}
      >
        {[1, 2, 3, 4, 5].map((item) => {
          const PATH = `module/${item}`;

          return (
            <NavLink
              to={PATH}
              className={({ isActive }) =>
                isActive
                  ? `${styles.Nav__Accordion__Content__Item} active__nav__link`
                  : `${styles.Nav__Accordion__Content__Item}`
              }
              key={generateUUID()}
            >
              <span></span>
              <span>Module {item}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

const TEXT_NAVIGATION = ["Grades", "Notes", "Discussion Forums", "Course Info"];
const Nav: FC<NavProps> = ({ layout, isOpenMenu, setIsOpenMenu }) => {
  const layoutMain = {
    0: (
      <nav className={`${styles.Nav} ${!isOpenMenu && styles.Nav__Active}`}>
        <i
          className={`ri-close-circle-fill ${styles.Nav__Close}`}
          onClick={() => setIsOpenMenu(false)}
        ></i>
        <h3 className={styles.Nav__Title}>
          IBM Full Stack Software Developer Professional Certificate
        </h3>
        <p className={styles.Nav__SubTitle}>IBM</p>

        <LayoutCardDetailNavAccordion />

        <ul className={styles.Nav__List}>
          {TEXT_NAVIGATION.map((text) => {
            const PATH = `${text}`.replaceAll(" ", "_").toLocaleLowerCase();
            return (
              <NavLink
                to={PATH}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.Nav__List__Item} active__nav__link`
                    : `${styles.Nav__List__Item}`
                }
                key={generateUUID()}
              >
                {text}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    ),
  };
  return layoutMain[layout];
};

export default Nav;
