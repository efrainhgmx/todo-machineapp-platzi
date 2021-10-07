import React from 'react';
import { TodoContext } from '../../TodoContext';

import './style.css';

export const TodoCounter = () => {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return (
        <>
            <h1>To do Machine App React <span>⚛️</span></h1>
            <p>Haz completado {completedTodos} tareas de {totalTodos}.</p>
        </>
    )
}
