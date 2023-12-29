import { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../features/todos/todoSlice'

//{onAddTodo}
function TodoForm({onAddTodo}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    createdDate: '',
    startDate: '',
    endDate: ''
  })
  const { title, description, priority,createdDate, startDate, endDate } = formData;

  //const { user } = useSelector((state) => state.auth)
  
    
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    

    const todo = {
      title,
      description,
      priority,
      status:"created",
      createdDate,
      startDate,
      endDate
    }
    console.log(todo.title+"&&&&&&&&&*******999999999"+todo.status+todo.createdDate)
    dispatch(createTodo(todo))
    onAddTodo();
    return () => {
      dispatch(onAddTodo())
    }
    //const makecall = () => onAddTodo;
    //onAddTodo()
    //setText('')
  }

  return (
    <section className='form form_todo'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Priority</label>
          <input
            type='text'
            name='priority'
            id='priority'
            value={priority}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Created Date</label>
          <input
            type='text'
            name='createdDate'
            id='createdDate'
            value={createdDate}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Start Date</label>
          <input
            type='text'
            name='startDate'
            id='startDate'
            value={startDate}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>End Date</label>
          <input
            type='text'
            name='endDate'
            id='endDate'
            value={endDate}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm
