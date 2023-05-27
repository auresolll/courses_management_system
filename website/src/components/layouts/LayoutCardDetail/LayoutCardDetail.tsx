import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Nav from "../../Nav/Nav.lazy";
import styles from "./LayoutCardDetail.module.scss";

interface LayoutCardDetailProps {}

const LayoutCardDetail: FC<LayoutCardDetailProps> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.style.overflow = "auto";
  }, []);
  return (
    <div className={styles.LayoutCardDetail}>
      <Header layout={1} isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <main className={styles.LayoutCardDetail__Main}>
        <section className={styles.LayoutCardDetail__Main__Section}>
          <div className={styles.LayoutCardDetail__Main__Section__Nav}>
            <Nav
              layout={0}
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu}
            />
          </div>

          <div className={styles.LayoutCardDetail__Main__Section__Content}>
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LayoutCardDetail;
