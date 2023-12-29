import { AiOutlinePlus } from "react-icons/ai"

function TodosHead({icon,title,onAddTodo}) {
  return (
    <div className="container container_todosHead">
      <div className="todosHead">
        <span>{icon}</span>
        <h2>{title}</h2>
        <button onClick={onAddTodo}><AiOutlinePlus /></button>
      </div>
    </div>
  )
}

export default TodosHead