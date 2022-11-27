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
        <label htmlFor="titulocap">Titulo del capitulo: </label>
        <input
          type="text"
          id="titulocap"
          name="titulocap"
          value={titulocap}
          onChange={(e) => setTitulocap(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="titulomat">Titulo del material: </label>
        <input
          type="text"
          id="titulomat"
          name="titulomat"
          value={titulomat}
          onChange={(e) => setTitulomat(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="DescripcionForo">Descripcion del foro: </label>
        <input
          type="text"
          id="DescripcionForo"
          name="DescripcionForo"
          value={DescripcionForo}
          onChange={(e) => setDescripcionForo(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="EnlaceMat">Enlace del material de estudio </label>
        <input
          type="text"
          id="EnlaceMat"
          name="EnlaceMat"
          value={EnlaceMat}
          onChange={(e) => setEnlaceMat(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="tituloforo">Titulo del foro </label>
        <input
          type="text"
          id="tituloforo"
          name="tituloforo"
          value={tituloforo}
          onChange={(e) => setTituloforo(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="DescripForo">Descripcion del foro</label>
        <input
          type="text"
          id="DescripForo"
          name="DescripForo"
          value={DescripForo}
          onChange={(e) => setDescripForo(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="EstadoForo">Estado del foro: </label>
        <select
          name="EstadoForo"
          onChange={(e) => setEstadoForo(e.target.value)}
        >
          <option value="Inactivo">Inactivo</option>
          <option value="Activo">Activo</option>
        </select>
        <br />
        <br />
        <h3>Ejemplo practico</h3>
        <br />
        <label htmlFor="TituloEjem">Titulo del ejemplo: </label>
        <input
          type="text"
          id="TituloEjem"
          name="TituloEjem"
          value={TituloEjem}
          onChange={(e) => setTituloEjem(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="DescripEjem">Descripcion del ejemplo:</label>
        <input
          type="text"
          id="DescripEjem"
          name="DescripEjem"
          value={DescripEjem}
          onChange={(e) => setDescripEjem(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="CodigoEjem">Codigo del ejemplo</label>
        <input
          type="text"
          id="CodigoEjem"
          name="CodigoEjem"
          value={CodigoEjem}
          onChange={(e) => setCodigoEjem(e.target.value)}
        />
      </form>
      <br />
      <br />
      <button id="botonNuevoCap" type="button">
        Publicar capitulo{" "}
      </button>
    </div>
  );
};
