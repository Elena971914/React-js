import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";

export default function Table() {
  const [toDoList, setToDos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
    .then((response) =>response.json())
    .then(data => {
      setToDos(Object.values(data))
    })
    .catch((error)=> console.log(error));
  }, []);

  const changeStatusHandler = (id) => {
    setToDos(toDoArray => toDoArray.map(todo => todo._id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
  }

  return (
    <main className="main">
      <section className="todo-list-container">
        <h1>Todo List</h1>
        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>
        <div className="table-wrapper">
          {/* <!-- Loading spinner - show the load spinner when fetching the data from the server-->
            <div className="loading-container">
              <div className="loading-spinner">
                <span className="loading-spinner-text">Loading</span>
              </div>
            </div>
     */}
          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>

              {toDoList.map(row => (
                <ToDoItem 
                key={row._id} 
                _id={row._id} 
                text={row.text}
                isCompleted={row.isCompleted}
                changeStatusHandler={changeStatusHandler}/>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
