import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ListGroup  from './components/ListGroup'
import { useState } from 'react'
/**Building awsome lookin website*/
import Home from './pages/home/Home';
import About from './pages/about/About'
import Todos from './pages/todo/Todos'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const signedLinks = [
    {
      name: "Home",
      path:'/'
    },
    {
      name: "About",
      path:'/about'
    },
    {
      name: "Todos",
      path:'/todos'
    }
  ];
  const unSignedLinks = [
    {
      name: "Home",
      path:'/'
    },
    {
      name: "About",
      path:'/about'
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
        <Navbar signedLinks={signedLinks} unSignedLinks={unSignedLinks}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='todos' element={<Todos/>} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    );
    
   
    /**<>
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
     );*/
   
  
}

export default App;
