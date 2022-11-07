import React from "react";
import styles from "./Class.module.css";
import { PDFReader } from "reactjs-pdf-reader";

export const Class = () => {
  return (
    <div className={styles.Class}>
      <p>Capítulo 5</p>
      <iframe
        src="https://firebasestorage.googleapis.com/v0/b/tss2022.appspot.com/o/Cap5-Simulacion%20-%20Un%20enfoque%20Practico%20-%20Raul%20Coss%20Bu.pdf?alt=media&token=9fbffbf9-6dce-4c7f-8675-84ed00ba486e"
        width="100%"
        height="700vh"
        id="cap1"
        title="intro"
      ></iframe>
      {/* <PDFReader
        url={"https://arxiv.org/pdf/quant-ph/0410100.pdf"}
        scale="0.9"
        width="10vh"
      /> */}
    </div>
  );
};
