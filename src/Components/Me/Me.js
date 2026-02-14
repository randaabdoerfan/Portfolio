import React from 'react'
import './Me.css'
import { Button, Stack, Container } from 'react-bootstrap'

function Me(props) {

  const isDark = props.mode === "dark";

  return (

    <Container
      fluid
      className={`shadow border-bottom text-center d-flex align-items-center justify-content-center ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ minHeight: "80vh", paddingTop: "100px", paddingBottom: "50px" }}
    >

      <Stack gap={3} className="align-items-center">


        <h1 className="fw-bold">
          Hi, I'm{" "}
          <span style={{ color: "#f67b68" }} className="fw-bolder">
            Randa Erfan
          </span>
        </h1>


        <h3 className={`fw-semibold ${isDark ? "text-light" : "text-muted"}`}>
          Frontend Engineer (React) | Full Stack (Django–Node JS)
        </h3>

        <p
          className={isDark ? "text-light" : "text-muted"}
          style={{
            maxWidth: "700px",
            width: "100%",
            padding: "0 15px"
          }}
        >
          Passionate developer with expertise in building scalable React
          websites, implementing modern architectural patterns, and delivering
          high-quality solutions through research-driven problem-solving and
          continuous learning.
        </p>


        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">

          <Button
            target="_blank"
            href="https://drive.google.com/file/d/1ITaT691RY6fi3mHaxWBofbPuiXqlgV7q/view"
            variant={isDark ? "outline-light" : "outline-primary"}
          >
            View My CV
          </Button>

          <Button
            href="/contact"
            variant="outline-danger"
          >
            Contact Me
          </Button>

        </div>


        <div className="d-flex gap-4 mt-3 fs-3">

          <a
            href="https://www.linkedin.com/in/randa-erfan-6a230b217"
            target="_blank"
            rel="noreferrer"
            className={isDark ? "text-white" : "text-dark"}
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/randaabdoerfan"
            target="_blank"
            rel="noreferrer"
            className={isDark ? "text-white" : "text-dark"}
          >
            <i className="bi bi-github"></i>
          </a>

        </div>

      </Stack>

    </Container>
  )
}

export default Me
