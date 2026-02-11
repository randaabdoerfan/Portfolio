import React from "react";
import './Experience.css'
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { ExperienceData } from "../../Data/ExperienceData";
import { Card, Container } from "react-bootstrap";
function Experience(props) {
  return (
    <Container className="text-center py-16 px-6 md:px-20 bg-gray-50 min-h-screen pb-5 border-bottom">
      <div className="max-w-2xl mx-auto">
        <h2 style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: '#f67b68', lineHeight: '3' }} className=" text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Experience
        </h2>
        <div className={`relative border-l-2 border-blue-500 ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}>
          {ExperienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all w-75 mx-auto duration-300">
                <Card.Body className={`p-6 card-exp ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}>
                  <div style={{ textAlign: "left" }} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 fw-bold">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-500  badge text-primary">
                      {exp.period}
                    </span><br /><br />
                    <div className="flex items-center gap-2 text-gray-500 mb-4 badge text-primary">
                      <Building2 className="w-4 h-4 " />
                      <span style={{ textAlign: "left" }} className="text-sm"> {exp.company}</span>
                    </div>

                  </div>
                  <p style={{ textAlign: "left" }} className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Experience;
