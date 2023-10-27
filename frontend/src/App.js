import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
//import Login from './pages/Login'
//import Register from './pages/Register'
import ListGroup  from './components/ListGroup'
import { useState } from 'react'
/**Building awsome lookin website*/
import Home from './pages/home/Home';
import About from './pages/about/About'
import Todo from './pages/todo/Todo'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'

function App() {
  const links = [
    {
      name: "Home",
      path:'/'
    },
    {
      name: "About",
      path:'/about'
    },
    {
      name: "Todo",
      path:'/todo'
    },
    {
      name: "Sign In",
      path:'/signin'
    },
    {
      name: "Sign Up",
      path:'/signup'
    }
  ];

  return (
    <div>
      <BrowserRouter>
        <Navbar links={links} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='todo' element={<Todo/>} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    );
    
    /** 
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
    */
  
}

export default App;
