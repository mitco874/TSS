import React from 'react';
import Content from './Content/Content';
import styles from './Main.module.css';
import SideBar from './SideBar/SideBar';

const MainDos = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default MainDos;