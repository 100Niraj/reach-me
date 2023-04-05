import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Errorpage  from './components/Errorpage';
import Logout from './components/Logout';


const App = () =>{
  return (
    <>
     <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route exact  path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path= '/logout' element = {<Logout/>}/>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App