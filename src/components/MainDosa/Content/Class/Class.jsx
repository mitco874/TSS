import React from "react";
import styles from "./Class.module.css";
import { PDFReader } from "reactjs-pdf-reader";

export const Class = () => {
  return (
    <div className={styles.Class}>
      <p>Clase 1-2023</p>
      <PDFReader
        url={"https://arxiv.org/pdf/quant-ph/0410100.pdf"}
        scale="1"
        width="1000px"
      />
    </div>
  );
};