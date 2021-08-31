import React from 'react';

import './style.css';

export const TodoCounter = ({total, completed}) => {
    return (
        <>
            <h1>To do Machine App React <span>⚛️</span></h1>
            <p>Haz completado {completed} tareas de {total}.</p>
        </>
    )
}
