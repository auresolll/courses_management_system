import React, { FC } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  classList?: string;
}

const Container: FC<ContainerProps> = ({ children, classList }) => (
  <div className={classList}>{children}</div>
);

export default Container;
