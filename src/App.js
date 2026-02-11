import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Me from './Components/Me/Me';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education'
import Certificates from './Components/Certificates/Certificates';
import Cursor from './Components/Cursor/Cursor';
function App() {
  const[mode,setMode] = useState(
    localStorage.getItem("mode") || "dark"
  )
  useEffect(()=>{
localStorage.setItem("mode",mode)
  },[mode])
    
  return (
    <>
    <Cursor/>
    <NavBar setMode={setMode} mode={mode} />
    <div className={`pt-5 mt-4 ${mode === "dark" ?"bg-dark text-white": "bg-light text-black"}`}>


<Routes>
  <Route path='/' element={<Home mode={mode}/>}/>
  <Route path='/me' element={<Me mode={mode}/>}/>
  <Route path='/about' element={<About mode={mode}/>}/>
  <Route path='/skills' element={<Skills mode={mode}/>}/>
  <Route path='/projects' element={<Projects mode={mode}/>}/>
  <Route path='/experience' element={<Experience mode={mode}/>}/>
  <Route path='/education' element={<Education mode={mode}/>}/>
  <Route path='/certificates' element={<Certificates mode={mode}/>}/>
  <Route path='/contact' element={<Contact mode={mode}/>}/>
</Routes>

    </div>
    </>
  );
}

export default App;
