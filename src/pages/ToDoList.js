import { useState } from "react";
import "./ToDoList.css";


const ListItem = ({ toDoItem }) => {
    return (
        <div>{toDoItem}</div>
    )
}

const ToDoList = ({ pageTite }) => {
    const [toDoList, setToDoList] = useState([])
    const [inputValue, setInputValue] = useState()
    console.log(inputValue);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onClickAddTask = () => {
        if (!inputValue) return;
        setToDoList([...toDoList, inputValue])
        setInputValue("")
    }

    return (
        <div>
            <div className="header">
                <h1>{pageTite}</h1>
            </div>
            <div className="inputContainer">
                <label htmlFor="taskText" className="inputLabel">Digite a sua tarefa: </label>
                <input
                    id="taskText"
                    name="taskText"
                    className="input"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button className="addButton" onClick={onClickAddTask}>+</button>
            </div>
            {toDoList.map(toDoItem => (<ListItem toDoItem={toDoItem} />))}
        </div>
    );
}

export default ToDoList;