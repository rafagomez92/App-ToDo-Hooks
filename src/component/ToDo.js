import React from 'react';
import useInputState from '../container/useInputState';

const ToDo = ({ saveTodo }) => {
    const { value, reset, onChange } = useInputState('');

    return(                
            <form className="mt-4 form-inline justify-content-center" 
                onSubmit={(e) => {
                    e.preventDefault(); 
                    saveTodo(value);
                    reset();
                   }
                }
            >                            
                <div className="form-group mx-sm-1">                    
                    <input 
                        value={value} 
                        onChange={onChange} 
                        type="text" 
                        className="form-control" 
                        id="inputTask" 
                        placeholder="Ingresa la tarea" 
                    />
                </div>                
                <button 
                    type="submit" 
                    className="btn btn-dark"
                >
                    +
                </button>                
            </form>                        
    )
}

export default ToDo;