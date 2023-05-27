import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./Module.module.scss";

interface ModuleProps {}

const Module: FC<ModuleProps> = () => {
  const { module } = useParams();
  console.log("module :", module);
  return <div className={styles.Module}>Module Component</div>;
};

export default Module;
