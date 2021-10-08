import React from 'react';

import './style.css';

export const CreateTodoButton = (props) => {
    const onClickButton = (msg) => {
        props.setOpenModal(prevState => !prevState);
      };
      
      return (
        <button
          className="CreateTodoButton"
          onClick={onClickButton}
        >
          +
        </button>
      );
}