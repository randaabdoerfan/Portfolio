import React from 'react'
import { Container } from 'react-bootstrap'

function Footer(props){
  return (
    <footer
      className={`py-4 mt-5 ${
        props.mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"
      }`}   >
      <Container className="text-center">
        <div className="mb-3 d-flex justify-content-center gap-4">
          <span
            onClick={() =>
              window.open(
                "https://github.com/randaabdoerfan",
                "_blank"
              )
            }
          >
            <i className="bi bi-github fs-4"></i>
          </span>

          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/randa-erfan-6a230b217/",
                "_blank"
              )
            }
          >
            <i className="bi bi-linkedin fs-4"></i>
          </span>

          <span
            onClick={() =>
              window.open("mailto:randaerfan12@gmail.com", "_blank")
            }
          >
            <i className="bi bi-envelope fs-4"></i>
          </span>

        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} Randa Erfan. All Rights Reserved.
        </p>

      </Container>
    </footer>
  )
}

export default Footer