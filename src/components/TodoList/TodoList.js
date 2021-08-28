import React from 'react';

import './style.css';

export const TodoList = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
       
    )
}
