
import { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { projects } from "../../Data/ProjectsData";

function Projects(props) {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[index];

  return (
    <Container className="text-center border-bottom py-5">
       <h2 style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: '#f67b68', lineHeight: '3' }} className=' mt-10 mb-20 fz-6 fw-bold'>Featured Projects</h2>
      <Card className="shadow-lg rounded" style={{ maxWidth: "800px", margin: "auto" }}>
        <Card.Img
          variant="top"
          src={project.image}
          style={{ height: "350px", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
        />
        <Card.Body className={props.mode === "dark"?"bg-dark text-white":"bg-light text-black"}>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>

          <Row className="mb-3 justify-content-center">
            {project.skills.map((skill, i) => (
              <Col key={i} xs="auto">
                <span className="badge bg-light text-primary">{skill}</span>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="outline-primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i> View Code
            </Button>
            <Button
              variant="outline-success"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-box-arrow-up-right"></i> Live Demo
            </Button>
          </div>
        </Card.Body>
      </Card>


      <div className="d-flex justify-content-center mt-3 gap-2">
        {projects.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              background: i === index ? "#0d6efd" : "#ccc",
            }}
          ></span>
        ))}
      </div>
    </Container>
  );
}

export default Projects;
