import React from 'react';
import ToDo from './component/ToDo';
import ToDoList from './component/ToDoList';
import Header from './component/Header';
import useTodoState from './container/useTodoState';

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">            
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <ToDo saveTodo={(todoText) => {
                const trimmedText = todoText.trim();              
                  trimmedText.length && addTodo(trimmedText);
                }
              }
            />
            <ToDoList todos={todos} deleteTodo={deleteTodo} />
          </div>        
        </div>        
      </div>        
    </div>        
  );
}

export default App;
