import React from "react";
import styles from "./Main.module.css";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Header from "../Header/Header";

const MainDos = () => {
  return (
    <div className={styles.parent}>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default MainDos;
