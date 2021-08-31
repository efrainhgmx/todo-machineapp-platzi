import React from 'react';

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