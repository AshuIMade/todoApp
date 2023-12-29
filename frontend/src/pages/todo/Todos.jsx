import TodosHead from "../../components/TodosHead"
import Todo from "../../components/Todo"
import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from "react-icons/io"
import {FcAlarmClock} from "react-icons/fc"
import { useState } from "react"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos, reset } from '../../features/todos/todoSlice'
import "./Todos.css"
import TodoForm from "../../components/TodoForm"
import Spinner from "../../components/Spinner"


function Todos() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  )
   let [isAnswerShowing, setIsAnswerShowing] = useState(false)
  let [isFormShowing, setIsFormShowing] = useState(true)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTodos())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])
  
  const handleAddTodo = () => {
    console.log("Heloooooooooooooooooooooooooooooooooooo"+isFormShowing)
    if (isFormShowing)
      setIsFormShowing(false)
    else
      setIsFormShowing(true)
    console.log("Heloooooooooooooooooooooooooooooooooooo"+isFormShowing)

  }

  return (
    <section className="todos">
      <div className="container todos_container">
        <TodosHead icon={<FcAlarmClock />} title="Todos" onAddTodo={handleAddTodo} />
        {isLoading ? <Spinner /> :
          <div>
            {isFormShowing ?
              <div>                    
                {todos.length > 0 ? (                    
                  <div className="todos_wrapper">
                      {todos.map((todo) => (
                        <Todo key={todo.id} props={todo} onAddTodo={handleAddTodo}/>
                      ))}        
                    <div className="testimonials_btn-container">
                      <button className="testimonials_btn" ><IoIosArrowDropleftCircle /></button>
                      <button className="testimonials_btn" ><IoIosArrowDroprightCircle /></button>
                    </div>
                  </div>
                ) : (
                    <div className="todos_wrapper">
                      <h3>You have not set any todo list</h3>
                    </div>
                )}
              </div>
              //onAddTodo={handleAddTodo}
              :<TodoForm onAddTodo={handleAddTodo}/>
          }          
        </div>  
        }        
      </div>      
    </section>
  )
}

export default Todos