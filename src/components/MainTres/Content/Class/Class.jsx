import React from "react";
import styles from "./Class.module.css";
import { PDFReader } from "reactjs-pdf-reader";

export const Class = () => {
  return (
    <div className={styles.Class}>
      <p>Capítulo 2</p>
      <iframe
        src="https://firebasestorage.googleapis.com/v0/b/tss2022.appspot.com/o/Cap2-Simulacion%20-%20Un%20enfoque%20Practico%20-%20Raul%20Coss%20Bu.pdf?alt=media&token=a9602c58-4c23-486b-bd67-3efbfe159a5a"
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
