import React from 'react'
import './Me.css'
import { Button, Stack } from 'react-bootstrap'


function Me() {
  return (
    <div style={{ width: '100%', marginTop: '90px', height:'400px'}} className="mt-50 shadow justify-content-center align-items-center border-bottom text-center">


      <Stack gap={3}>
        <h1 style={{ lineHeight: '1', gap: '10',}} className=" p-2 fz-6 fw-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="dynamic-shadow fz-5 fw-bolder"
            style={{  color: "#f67b68" }}>
            Randa Erfan</span>
        </h1>
        <h3 style={{ lineHeight: '0', gap: '0' }} className="p-2 mt-0 fz-5 fw-bold text-lg text-gray-700 dark:text-gray-300">
          Frontend Engineer (React) | Full Stack (Django-Node JS)
        </h3>
        <p style={{ width: '700px', marginLeft: '200px', gap: '0' ,textJustify: "inter-word"}} className="p-2 mt-0 mb-0 text-lg text-gray-700 dark:text-gray-300">Passionate developer with expertise in building scalable React Websites,
          implementing modern architectural patterns,
          and delivering high-quality solutions through research-driven problem-solving and continuous learning.</p>


        <div style={{ position: "relative", height: "50px", marginLeft: '295px', width: "500px" }} className="p-2 text-center mb-4" >
          <Button style={{ position: "absolute", left: 130 }} target='_blank' href="https://drive.google.com/file/d/1ITaT691RY6fi3mHaxWBofbPuiXqlgV7q/view?usp=sharing" variant="outline-primary">View My Cv</Button>
          <Button style={{ position: "absolute", right: 130 }} target='_blank' href="/contact" variant='outline-danger'>Contact Me</Button>
        </div>
        <div style={{ position: "relative", height: "30px", marginLeft: '300px', width: "500px" }} className="p-2 text-center mb-4" >
          <span style={{ position: "absolute", right: 200, fontSize: '30px' }}>
          
            <a href="https://www.linkedin.com/in/randa-erfan-6a230b217" target="_blank"rel="noreferrer" >
              <i class="bi bi-linkedin"></i>
                </a>
                </span >
                  
          <span style={{ cursor: "pointer", color: "inherit" ,position: "absolute", left: 200, fontSize: '30px' }}
  onClick={() => window.open("https://github.com/randaabdoerfan", "_blank")}>
<i class="bi bi-github"></i></span>
                       
        </div>







      </Stack>
    </div>
  )
}

export default Me