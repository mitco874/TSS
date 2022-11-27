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
        <label htmlFor="titulocap">Nombre del capitulo: </label>
        <input
          type="text"
          id="titulocap"
          name="titulocap"
          value={titulocap}
          onChange={(e) => setTitulocap(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="EnlaceMat">Archivos: </label>
        <input
          type="text"
          id="EnlaceMat"
          name="EnlaceMat"
          value={EnlaceMat}
          onChange={(e) => setEnlaceMat(e.target.value)}
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
