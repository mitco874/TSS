import React from "react";
import styles from "./Class.module.css";

export const Class = () => {
  return (
    <div className={styles.Class}>
      <p>Capítulo 1</p>
      <iframe
        src="https://firebasestorage.googleapis.com/v0/b/tss2022.appspot.com/o/Cap1.Simulacion%20-%20Un%20enfoque%20Practico%20-%20Raul%20Coss%20Bu.pdf?alt=media&token=d1708525-142a-4a6a-be7a-de8609440981"
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
