import React from "react";
import styles from "./Content.module.css";
import { Class } from "./Class/Class";
const Content = () => {
  return (
    <div className={styles.childContent}>
      <Class />
    </div>
  );
};

export default Content;
