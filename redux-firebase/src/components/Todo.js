import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../store/actions/Action';



const Todo = () => {

    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.TodoReducer.list)

    return (

        <>
            <h1>Todo App with React-Redux</h1>

            <div>
                <input type="text" name="" placeholder="Add Todo Task ✍️" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={() => dispatch(addTodo, setInputData(''))}>Add Task</button>
            </div>


            <div className="showitems">
                {list.map((elem) => {
                    return (
                        <div key={elem.id}>
                            <h4>{elem.items}</h4>
                            <button onClick={() => dispatch(deleteTodo(elem.id), setInputData(""))}>Delete</button>
                            <button>Update</button>
                        </div>

                    )
                }
                )}

            </div>


        </>
    )
}

export default Todo;