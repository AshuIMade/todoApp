import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SectionHead from '../../components/SectionHead'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'
import Card from '../../ui/Card'
import './Signup.css'


function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email:'',
    password: '',
    password2:''
  });
  const { firstName, lastName, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <section className='signup'>
      <div className="container signup_container">
        <SectionHead icon={<FaUser/>} title="Sign Up"  className="signup_head" />
        <p>Create Your Account</p>
        <Card className="signup_loading">
          {isLoading ?
            <Spinner /> :
            <section className="form">
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    placeholder='Enter your first name'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    placeholder='Enter your last name'
                    onChange={onChange}
                  />
                </div>
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
                  <input
                    type='password'
                    className='form-control'
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder='Confirm password'
                    onChange={onChange}
                  />
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn btn-block'>
                    Sign Up
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
      <section className="heading">
        <h1>
          <FaUser/>Register
        </h1>
        <p>Create Account</p>        
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              value={firstName}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
           <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={lastName}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
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
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
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
    
  )*/
}

export default Signup
