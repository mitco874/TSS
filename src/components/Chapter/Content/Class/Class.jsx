import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import React, {
  useEffect,
  useState,
} from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export const Class = () => {

  const [chapters, setChapters] = useState({})

  const getCapitulos = async () => {
    const res = await fetch("142.93.203.113:3001/api/class/1");
    const newChapters = await res.json()

    setChapters(newChapters)
  }

  useEffect(() => {
    const newChapters = {
      "id_clase": 1,
      "nombre_clase": "simulacion de sistemas(1-2022)",
      "capitulos": [
        {
          "titulo_capitulo": "Tema 1. Introducción ",
          "titulo_material": "introduccion a la simulacion d",
          "descripcion_material": "se adjunta el material de introduccion a la  simulacion de sistemas",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 1",
          "descripcion_foro": "foro de retroalimentacion del tema \"introduccion a la simulacion de sistemas\""
        },
        {
          "titulo_capitulo": "Tema 2. Gereración de números rectangulares",
          "titulo_material": "Generacion de numeros rectangulares",
          "descripcion_material": "se adjunta el material de generacion de variables aleatorias",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 2",
          "descripcion_foro": "foro de retroalimentacion del tema \"introduccion a la simulacion de sistemas\""
        },
        {
          "titulo_capitulo": "Tema 3. Pruebas estadísticas para números pseudoaleatorios",
          "titulo_material": "Pruebas estadísticas para números pseudoaleatorios",
          "descripcion_material": "Se adjunta el material del capítulo pruebas estadísticas para números pseudoaleatorios",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 3",
          "descripcion_foro": "Espacio para retroalimentar los conceptos de pruebas de aleatoriedad en los generadores de números rectangulares"
        },
        { //id
          "titulo_capitulo": "Tema 4. Generación de variables aleatorias no-uniformes.",
          "titulo_material": "Generación de variables aleatorias no-uniformes.",
          "descripcion_material": "Se adjunta el material del capítulo generación de variables aleatorias no-uniformes.",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 4",
          "descripcion_foro": "Espacio para retroalimentar los conceptos de :"
          //info de la practica
        },
        {
          "titulo_capitulo": "Tema 5. Aplicaciones de simulación.",
          "titulo_material": "Aplicaciones de simulación",
          "descripcion_material": "Se adjunta el material del tema aplicaciones de simulación.",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 5",
          "descripcion_foro": "Espacio de retroalimentación de los conceptos estudiados y analizados en el tema 5."
        },
        {
          "titulo_capitulo": "Tema 6. Análisis de los resultados de simulación.",
          "titulo_material": "Análisis de los resultados de simulación.",
          "descripcion_material": "Se adjunta el material del tema análisis de los resultados de simulación.",
          "estado_foro": 0,
          "titulo_foro": "Foro del tema 6",
          "descripcion_foro": "Espacio de retroalimentación de los conceptos estudiados y analizados en el tema 6."
        }
      ]
    }
    setChapters(newChapters)
  }, []);

  const { id_clase, nombre_clase, capitulos } = chapters

  return (
    <div >
      <h1>{nombre_clase}</h1>
      {typeof nombre_clase === 'undefined' ? (<p>cargando</p>) : mapCapitulos(capitulos)}
    </div>

  );
};
const contenidoTema = ['c1', 'c2', 'c3'];
{
  contenidoTema.map((t) => (
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{`${t}`}</h5>
    </div>
  ))
}
const mapCapitulos = (capitulos) => (capitulos.map((cap, index) => (
  <div  >
  <div >
    <div class="d-flex w-100 justify-content-between" >
      <h5 class="mb-1">{`${cap.titulo_capitulo}`}</h5>
    </div>

    <Dropdown.Menu show 
      as={ButtonGroup}
      title={cap.titulo_material}
      variant="dark"
      id="dropdown-basic"
      className='text-light '>
      <Dropdown.Header className='text-light'> <b>{`${cap.titulo_material}`} </b></Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item disabled className='text-light  mb-3'>{`${cap.descripcion_material}`}</Dropdown.Item>
        <Link to={`/capitulos/${index+1}`} className='rounded bg-primary text-light text-decoration-none p-1 mx-3' background-color='dark'>Revisar</Link>

      <Dropdown.Divider />

      <Dropdown.Header className='text-light'> <b>{`${cap.titulo_foro}`} </b></Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item disabled className='text-light  mb-3'>{`${cap.descripcion_foro}`}</Dropdown.Item>
        <Link to="/" className='rounded bg-primary text-light text-decoration-none p-1 mx-3' background-color='dark'>Revisar</Link>
      <Dropdown.Divider />

      <Dropdown.Header className='text-light '> <b> Practica {`${cap.titulo_material}`} </b></Dropdown.Header>
      <Dropdown.Divider />
        <Link to={`/practicas/${index+1}`} className='rounded bg-primary text-light text-decoration-none p-1 mx-3 ' background-color='dark'>Revisar</Link>

    </Dropdown.Menu>
  </div>
  </div> 
)));

