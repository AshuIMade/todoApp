import { useState, useEffect } from 'react'
import SectionHead from '../../components/SectionHead'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'        
import Card from '../../ui/Card'
import './Signin.css'
/**components / Spinner'*/


function Signin() {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    console.log(isSuccess)
    console.log(user)

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  
  return (
    <section className='signin'>
      <div className="container signin_container">
        <SectionHead icon={<FaSignInAlt />} title="Sign In" className="signin_head" />
        <p>Sign In and Manage Your Life</p>
        <Card className="signin_loading">
          {isLoading ?
            <Spinner /> :
            <section className='form'>
              <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={password}
                  placeholder='Enter password'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>
                  Sign In
                </button>
              </div>
              </form>
            </section>
          }
        </Card>
      </div>
    </section>
  )
  
  /*if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      { isLoading ?
        <Spinner /> :
        <>
        <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and Add Todo List</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>          
      </>
      }
    </>
  )*/
}

export default Signin