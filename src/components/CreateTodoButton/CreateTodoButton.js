import React from 'react';

import './style.css';

export const CreateTodoButton = (props) => {
    const onClickButton = (msg) => {
        alert(msg);
      };
      
      return (
        <button
          className="CreateTodoButton"
          onClick={() => onClickButton('Aquí se debería abrir el modal')}
        >
          +
        </button>
      );
}