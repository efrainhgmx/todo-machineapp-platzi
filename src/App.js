import React, { useState } from 'react';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';

const defaultTodos = [
    { id: 1, text: "Ir al cine por palomitas", completed: false},
    { id: 2, text: "Leer un libro", completed: false},
    { id: 3, text: "Estudiar un poco más spbre React", completed: false},
    
]

export const App = () => {
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = usaState("");

    const completedTodos = todos.filter( todo => !!todo.completed);
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchedTodos.length > 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <>
            <TodoCounter 
            total={totalTodos}
            completed={completedTodos}/>
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue} />
            <TodoList>
                { todos.map( (todo) => (
                    <TodoItem 
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>
            <CreateTodoButton/>
        </>
    )
}
