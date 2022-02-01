import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {deleteTodo, editTodo} from '../redux/actions'

function TodoItem({ todo }) {
    const [editable,setEditable] = useState(false);
    const [name, setName] = useState('');
    let dispatch = useDispatch();
    return(
    <div id="todoItem">
        <div  >
            <div >
                {editable ? <input type="text" id="todo-edit" placeholder={todo.name} 
                onChange={(e) => setName(e.target.value)}/>:<h4 id="todo-name">{todo.name}</h4>}
                
            </div>
            <button  onClick= {() => {
                dispatch(editTodo({
                    ...todo,
                    name: name
                }));

                if(editable){
                    setName(todo.name)
                }
                setEditable(!editable)}} id ="btn-edit">{editable ? 'Update': 'Edit'}</button>
            <button  id="btn-delete" onClick= {() => dispatch(deleteTodo(todo.id))} >Delete</button>
        </div>
    </div>
    );
}

export default TodoItem;
