import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/todos/todoSlice'

function TodoForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    createdDate: '',
    startDate: '',
    endDate: ''
  })
  const { title, description, priority, status, createdDate, startDate, endDate } = formData;

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
      status,
      createdDate,
      startDate,
      endDate
      }
    dispatch(createTodo(todo))
    //setText('')
  }

  return (
    <section className='form'>
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
            Add Todo
          </button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm
