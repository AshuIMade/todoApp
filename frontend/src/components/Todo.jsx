/**{title,description,priority,status,createdDate,startDate,endDate} */

function Todo({ props,onAddTodo }) {
  console.log("title------"+props.title)
  return (
    <article className="todo">
      <div className="todo_title-edit">
        <h4>{props.title}</h4>
        <button onClick={onAddTodo} className="edit_todo">edit</button>
      </div>
      <div className="todo_description">
        <p>{props.description}</p>
        <p>{props.priority}</p>
        <p>{props.status}</p>
      </div>
      <div className="todo_dates-remove">
        <span>{props.startDate} - {props.endDate}</span>
        <button className="remove_todo">remove</button>
      </div>
    </article>
  )
}

export default Todo