import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

const todos = [
    { id: 1, text: "Ir al cine por palomitas", completed: false},
    { id: 2, text: "Leer un libro", completed: false},
    { id: 3, text: "Estudiar un poco más spbre React", completed: false},
    
]

export const App = () => {
    return (
        <>
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                { todos.map( (todo) => (
                    <TodoItem 
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>
        </>
    )
}
