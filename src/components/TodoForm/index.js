import React from 'react';
import { TodoContext } from '../../TodoContext';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {

    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar una cebolla'
            />

            <div>
                <button 
                onClick={onCancel}
                type='button'>
                    Cancelar
                </button>

                <button 
                type='submit'>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };