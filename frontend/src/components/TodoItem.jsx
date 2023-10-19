import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todos/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <h2>{todo.title}</h2>
      <h3>{todo.priority}</h3>
      <p>{todo.description}</p>
      <button onClick={() => dispatch(deleteTodo(todo.id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TodoItem
