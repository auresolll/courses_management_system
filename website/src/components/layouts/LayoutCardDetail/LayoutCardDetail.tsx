import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Nav from "../../Nav/Nav.lazy";
import styles from "./LayoutCardDetail.module.scss";

interface LayoutCardDetailProps {}

const LayoutCardDetail: FC<LayoutCardDetailProps> = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.style.overflow = "auto";
  }, []);
  return (
    <div className={styles.LayoutCardDetail}>
      <Header layout={1} isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={styles.LayoutCardDetail__Main}>
        <section className={styles.LayoutCardDetail__Main__Section}>
          <div className={styles.LayoutCardDetail__Main__Section__Nav}>
            <Nav layout={0} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <div className={styles.LayoutCardDetail__Main__Section__Content}>
            {/* <Loading loadingLayout={0} style={"loading-on-sub-page"} /> */}
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LayoutCardDetail;
