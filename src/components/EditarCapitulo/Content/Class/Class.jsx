import React from "react";
import { useState } from "react";
import styles from "./Class.module.css";

export const Class = () => {
  const [titulocap, setTitulocap] = useState("");
  const [EnlaceMat, setEnlaceMat] = useState("");
  const [EstadoForo, setEstadoForo] = useState("");
  const [TituloEjem, setTituloEjem] = useState("");
  const [DescripEjem, setDescripEjem] = useState("");
  const [CodigoEjem, setCodigoEjem] = useState("");

  return (
    <div className={styles.Class}>
      <h1>Editar Capítulo</h1>
      <form>
        <label htmlFor="titulocap" className={styles.textform}>
          Nombre del capitulo:{" "}
        </label>
        <input
          type="text"
          id="titulocap"
          name="titulocap"
          placeholder="Ingrese nombre del capitulo"
          value={titulocap}
          onChange={(e) => setTitulocap(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="EnlaceMat" className={styles.textform}>
          Archivos:{" "}
        </label>
        <input
          type="text"
          id="EnlaceMat"
          name="EnlaceMat"
          placeholder="Ingrese el enlace del archivo"
          value={EnlaceMat}
          onChange={(e) => setEnlaceMat(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="EstadoForo" className={styles.textform}>
          Estado del foro:{" "}
        </label>
        <select
          name="EstadoForo"
          onChange={(e) => setEstadoForo(e.target.value)}
        >
          <option value="Inactivo">Inactivo</option>
          <option value="Activo">Activo</option>
          className={styles.box}
        </select>
        <br />
        <br />
        <p className={styles.texth3}>Ejemplo practico</p>
        <br />
        <label htmlFor="TituloEjem" className={styles.textform}>
          Titulo del ejemplo:{" "}
        </label>
        <input
          type="text"
          id="TituloEjem"
          name="TituloEjem"
          placeholder="Ingrese el titulo del ejemplo practico"
          value={TituloEjem}
          onChange={(e) => setTituloEjem(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="DescripEjem" className={styles.textform}>
          Descripcion del ejemplo:
        </label>
        <input
          type="text"
          id="DescripEjem"
          name="DescripEjem"
          value={DescripEjem}
          onChange={(e) => setDescripEjem(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="CodigoEjem" className={styles.textform}>
          Codigo del ejemplo:{" "}
        </label>
        <input
          type="text"
          id="CodigoEjem"
          name="CodigoEjem"
          value={CodigoEjem}
          onChange={(e) => setCodigoEjem(e.target.value)}
          className={styles.box}
        />
      </form>
      <br />
      <br />
      <button id="botonNuevoCap" type="button" className={styles.button}>
        Publicar capitulo{" "}
      </button>
    </div>
  );
};
