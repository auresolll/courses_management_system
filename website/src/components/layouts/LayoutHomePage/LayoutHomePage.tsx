import { FC, useEffect, useState } from "react";
import { generateUUID } from "../../../helper";
import Banner from "../../Banner/Banner";
import CardGallery from "../../CardGallery/CardGallery.lazy";
import CardPreview from "../../CardPreview/CardPreview";
import Categories from "../../Categories/Categories.lazy";

import Header from "../../Header/Header";
import styles from "./LayoutHomePage.module.scss";

interface LayoutHomePageProps {}

const LayoutHomePage: FC<LayoutHomePageProps> = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersecting");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className={styles.LayoutHomePage}>
      <Header layout={0} isOpen={isOpen} setIsOpen={setIsOpen} />

      <section className={`${styles.LayoutHomePage__Image__Slider}`}>
        <div className={styles.LayoutHomePage__Image__Slider__Block}>
          <Banner />
        </div>
        <div className={styles.LayoutHomePage__Image__Slider__Block}>
          <Banner />
        </div>
        <div className={styles.LayoutHomePage__Image__Slider__Block}>
          <Banner />
        </div>
      </section>

      <section className="hidden" key={generateUUID()}>
        <Categories title={"Khám khá Khóa Học"} layout={1} />
      </section>

      <section className="hidden" key={generateUUID()}>
        <CardGallery children={"Khóa Học Miễn Phí"} />
      </section>

      <section className="hidden" key={generateUUID()}>
        <CardGallery children={"Đề xuất cho bạn"} />
      </section>

      <section className="hidden" key={generateUUID()}>
        <CardGallery children={"Khóa Học Nhiều Đánh Giá"} />
      </section>

      <section className="hidden" key={generateUUID()}>
        <CardGallery children={"Khóa Học Nhiều Người Học"} />
      </section>

      <section className="hidden" key={generateUUID()}>
        <Categories title="Các chủ đề được đề xuất cho bạn" layout={2} />
      </section>

      <CardPreview />
    </div>
  );
};
export default LayoutHomePage;
