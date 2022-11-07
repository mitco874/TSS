import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{'background':'#333980' }}>   
      <ul className='list-group'>
        <li className='p-2 text-light mb-3' style={{'background':'#5A63C4'}}>
          <svg
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
            <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
            <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
            <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
            <path d="M12 2.25v19.5"></path>
            <path d="M21.75 12H2.25"></path>
          </svg>
          <NavLink className='text-decoration-none text-white' to="/clases">Clases</NavLink>

        </li>
        <li className='p-2 text-light d-flex' >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-card-text"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
          </svg> 
          <NavLink className='text-decoration-none text-white' to="/clases"> Mensajes</NavLink>
        </li>
         
      </ul>
    </div>
  );
};

export default SideBar;
