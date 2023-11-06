export default function ToDoItem({
  text,
  isCompleted,
  _id,
  changeStatusHandler
}) {

  const onClickHandler = () => {
    changeStatusHandler(_id)
  }
    return(
                <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
                  <td>{text}</td>
                  <td>{isCompleted?'Completed':"Not completed"}</td>
                  <td className="todo-action">
                    <button onClick={onClickHandler} className="btn todo-btn">Change status</button>
                  </td>
                </tr>
    )
}