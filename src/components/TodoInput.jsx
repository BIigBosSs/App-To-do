import React, {useState} from 'react';
import {addTodo} from '../redux/actions'
import {useDispatch} from 'react-redux';


function TodoInput() {
    let [inputName, setName] = useState();
    let dispatch = useDispatch();
    return (
    <div>
        <div>
            <input id="todo-input" onChange={(e) => setName(e.target.value)} value={inputName }   type="text"  placeholder="Next reminder" required/>
            <button  id="btn-add" onClick= {() =>{ 
            dispatch(addTodo({
                id: Date.now(),
                name: inputName,
            }))
            setName('');
            }} className="btn btn-primary mx-2">Add</button>
        </div>
    </div>
    );
}

export default TodoInput;
