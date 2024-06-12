import { useState } from "react";
import "./ToDoList.css";

const ToDoList = ({ pageTite }) => {
    const [toDoList, setToDoList] = useState([])
    const [inputValue, setInputValue] = useState()
    const onInputChange = (event) => {
        console.log(event);
    }

    return (
        <div>
            <div className="header">
                <h1>{pageTite}</h1>
            </div>
            <div className="inputContainer">
                <label for="taskText" className="inputLabel">Digite a sua tarefa: </label>
                <input
                    id="taskText"
                    name="taskText"
                    className="input"
                    onChange={onInputChange} />
                <button className="addButton">+</button>
            </div>
        </div>
    );
}

export default ToDoList;