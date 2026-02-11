import React from 'react'
import { motion } from "framer-motion";
import { Card, Container } from "react-bootstrap";
import './Education.css'
function Education(props) {
  return (
    <Container
      className={`h-100 pb-4 d-flex justify-content-center align-items-center pb-5 border-bottom`}
    >
      <div className="w-100 py-5" style={{ maxWidth: "750px",maxHeight:"530px", textAlign:'left' }}>
        <h2
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "10px",
            textDecorationColor: "#f67b68",
            lineHeight: "3",
          }}
          className="text-center mb-5"
        >
          Education
        </h2>

        <div
          className={`border-l-2 border-blue-500 ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"
            }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Card
              className={`education rounded-xl shadow-md hover:shadow-lg transition-all w-100`}
            >
              <Card.Body
                className={`p-5 ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"
                  }`}
              >
                <div className="d-flex flex-column gap-2 mb-3">
                  <h5 className="fw-bold">
                    <i className="bi bi-mortarboard me-1"></i>
                    Bachelor of Electrical Engineering – Zagazig University
                  </h5>
                  <h6>Computer Engineering Department</h6>
                  <span className="text-sm text-primary">
                    <i className="bi bi-calendar3 me-1"></i>
                    September 2019 – August 2024
                  </span>
                </div>

                <p style={{ textAlign: "left" }} className="text-gray-500 leading-relaxed text-sm md:text-base"> <i class="bi bi-claude"></i> IEEE Member Bransh Zagazig - ZigZag Member in Web Development </p>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </Container>
  )
}

export default Education