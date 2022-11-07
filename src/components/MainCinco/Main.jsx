import React from "react";
import styles from "./Main.module.css";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const MainCinco = () => {
  return (
    <div className={styles.parent}>
        <SideBar></SideBar>
      <div className={styles.main}>
        <Content />

      </div>
    </div>
  );
};

export default MainCinco;
