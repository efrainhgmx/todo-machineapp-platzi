import React from 'react';
import { TodoContext } from '../../TodoContext'; 
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from '../TodoList/TodoList.js';
import { TodoItem } from '../TodoItem/TodoItem.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton.js';

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter
      />
      <TodoSearch
      />

     <TodoContext.Consumer>
      {({
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
      }) => (
        <TodoList>
        { error && <p>Desesperate hubo un error!</p> }
        { loading && <p>Estamos cargando, no desesperes...</p> }
        { (!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p> }

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      )}
     </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };