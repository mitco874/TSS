import React from "react";
import { useState } from "react";
import styles from "./Class.module.css";

export const Class = () => {
  const [titulocap, setTitulocap] = useState("");
  const [titulomat, setTitulomat] = useState("");
  const [DescripcionForo, setDescripcionForo] = useState("");
  const [EnlaceMat, setEnlaceMat] = useState("");
  const [tituloforo, setTituloforo] = useState("");
  const [DescripForo, setDescripForo] = useState("");
  const [EstadoForo, setEstadoForo] = useState("");
  const [TituloEjem, setTituloEjem] = useState("");
  const [DescripEjem, setDescripEjem] = useState("");
  const [CodigoEjem, setCodigoEjem] = useState("");

  return (
    <div className={styles.Class}>
      <h1>Nuevo Capítulo</h1>
      <form>
        <label htmlFor="titulocap" className={styles.textform}>
          Titulo del capitulo:{" "}
        </label>
        <input
          type="text"
          id="titulocap"
          name="titulocap"
          class="box"
          placeholder="Ingrese el nombre del capitulo"
          value={titulocap}
          onChange={(e) => setTitulocap(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="titulomat" className={styles.textform}>
          Titulo del material:{" "}
        </label>
        <input
          type="text"
          id="titulomat"
          name="titulomat"
          placeholder="Ingrese el nombre del material"
          value={titulomat}
          onChange={(e) => setTitulomat(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="DescripcionForo" className={styles.textform}>
          Descripcion del foro:{" "}
        </label>
        <input
          type="text"
          id="DescripcionForo"
          name="DescripcionForo"
          value={DescripcionForo}
          onChange={(e) => setDescripcionForo(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="EnlaceMat" className={styles.textform}>
          Enlace del material de estudio:{" "}
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
        <label htmlFor="tituloforo" className={styles.textform}>
          Titulo del foro:{" "}
        </label>
        <input
          type="text"
          id="tituloforo"
          name="tituloforo"
          placeholder="Ingrese el titulo del foro para este capitulo"
          value={tituloforo}
          onChange={(e) => setTituloforo(e.target.value)}
          className={styles.box}
        />

        <br />
        <br />
        <label htmlFor="DescripForo" className={styles.textform}>
          Descripcion del foro:{" "}
        </label>
        <input
          type="text"
          id="DescripForo"
          name="DescripForo"
          value={DescripForo}
          onChange={(e) => setDescripForo(e.target.value)}
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
          placeholder="ingrese el titulo del ejemplo practico"
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
