import React from 'react'

export const TodoItem = (props) => {
    return (
        <li>
           <span>📝</span> 
           <p>{props.text}</p>
           <span>❌</span>
        </li>
    )
}
