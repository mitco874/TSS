import React from 'react';
import styles from './Class.module.css'
import { useNavigate } from 'react-router-dom';


export const Class = () => {
  const navigate = useNavigate();
  return (
    <div className='border w-50  rounded shadow  bg-body' onClick={() => navigate("/capitulos")}>
        <div className='border h-75'>
          <img className='h-100 w-100' src="https://img.freepik.com/vector-gratis/fondo-tecnologia-digital-alambre-malla-red_1017-27428.jpg?w=2000" alt="class-background-image" />
        </div>
        <p className='text-center mt-1'>Clase 1-2022</p>
    </div>
  )
}

