import React, { FC, useState } from "react";
import { Tooltip } from "react-tooltip";
import { generateUUID } from "../../helper";
import Card from "../Card/Card.lazy";
import styles from "./CardGallery.module.scss";

interface CardGalleryProps {
  children: React.ReactNode;
}
const FULL_WIDTH_CARD = 50;

const CardGallery: FC<CardGalleryProps> = ({ children }) => {
  const [isHiddenButton, setIsHiddenButton] = useState<boolean>(false);
  const next = (element: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!element.currentTarget.parentNode) {
      return;
    }
    const nodeWarper = element.currentTarget.parentNode.parentNode;
    const productContainers = nodeWarper?.querySelector(".card-container");
    if (!productContainers) {
      return;
    }
    let containerDimensions = productContainers?.getBoundingClientRect();
    if (!containerDimensions) {
      return;
    }
    let containerWidth = containerDimensions.width + FULL_WIDTH_CARD;
    productContainers.scrollLeft += containerWidth;
    setIsHiddenButton(true);
  };

  const previous = (element: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!element.currentTarget.parentNode) {
      return;
    }
    const nodeWarper = element.currentTarget.parentNode.parentNode;
    const productContainers = nodeWarper?.querySelector(".card-container");
    if (!productContainers) {
      return;
    }
    let containerDimensions = productContainers?.getBoundingClientRect();

    if (!containerDimensions) {
      return;
    }
    let containerWidth = containerDimensions.width + FULL_WIDTH_CARD;
    productContainers.scrollLeft -= containerWidth;
  };

  return (
    <div className={styles.CardGallery}>
      {children && <h1 className={styles.CardGallery__Heading}>{children}</h1>}
      <div className={styles.CardGallery__List_Warper}>
        <div className={styles.CardGallery__List_Warper__Button}>
          {isHiddenButton && (
            <i
              className={`ri-arrow-left-circle-line pre-btn ${styles.CardGallery__List_Warper__Button__Previous}`}
              onClick={previous}
            ></i>
          )}
          <i
            className={`ri-arrow-right-circle-line ${styles.CardGallery__List_Warper__Button__Next}`}
            onClick={(event) => next(event)}
          ></i>
        </div>
        <div className={`${styles.CardGallery__List} card-container`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Card key={generateUUID()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGallery;
