import React from "react";
import styles from "./Main.module.css";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";
const EditarCapitulo = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <SideBar></SideBar>
        <Content />
      </div>
    </div>
  );
};

export default EditarCapitulo;
