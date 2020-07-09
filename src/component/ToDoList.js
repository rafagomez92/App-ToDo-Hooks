import React from 'react';

const ToDoList = ({ todos, deleteTodo }) => (                      
    <ul className="list-group mt-4 mb-4">
        {todos.map((todo, index) => (
        <li className="list-group-item" key={index.toString()}>
                    <div className="row">
                        <div className="col">                                                    
                            <p className="text-left">
                                {todo}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="text-right">
                                <button className="btn btn-dark" onClick={() => {deleteTodo(index);}}>                                    
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
            </li>
        ))}        
    </ul>          
)


export default ToDoList;