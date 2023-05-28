import React, { FC } from "react";
import styles from "./Loading.module.scss";

interface LoadingProps {
  loadingLayout: number;
  style: string;
}

const Loading: FC<LoadingProps> = ({ loadingLayout, style }) => {
  const renderLoading = (loadingLayout: number) => {
    switch (loadingLayout) {
      case 0:
        return (
          <div className={`${styles.Loading__Style__One} lds-ripple`}>
            <div></div>
            <div></div>
          </div>
        );
    }
  };
  return (
    <div className={`${styles.Loading} ${style && style}`}>
      {renderLoading(loadingLayout)}
    </div>
  );
};

export default Loading;
