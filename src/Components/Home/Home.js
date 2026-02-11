import React from 'react'
import { Container } from 'react-bootstrap'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import Certificates from '../Certificates/Certificates'
import Contact from '../Contact/Contact'
import Me from '../Me/Me'
import Footer from '../../Footer/Footer'


function Home(props) {
  return (
     <section id="home" className=" shadow mx-auto vh-500 d-flex align-items-center">
      <Container className="text-center mt-50"><br/>
      <Me/><br/>
      <About/><br/>
      <Skills mode={props.mode}/><br/>
      <Projects mode={props.mode}/><br/>
      <Experience mode={props.mode}/><br/>
      <Education mode={props.mode} /><br/>
      <Certificates mode={props.mode}/><br/>
      <Contact mode={props.mode}/>
      <Footer mode={props.mode}/>
      </Container>
     
      
      </section>
  )
}

export default Home