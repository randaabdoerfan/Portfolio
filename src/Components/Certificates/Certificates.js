import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { CertificatesData } from "../../Data/CertificatesData";
import './Certificates.css'

function Certificates(props) {

  const [index, setIndex] = useState(0);
  const isDark = props.mode === "dark";

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % CertificatesData.length);
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const certificate = CertificatesData[index];

  return (

    <Container
      fluid
      className={`text-center py-5 border-bottom ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >


      <h2 className="cert-title fw-bold mb-4">
        Certificates
      </h2>



      <Card className={`cert-card shadow-lg mx-auto ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}>

        <Card.Img
          variant="top"
          src={certificate.certificate}
          className="cert-img"
        />

        <Card.Body>

          <Card.Title className="cert-text">
            {certificate.title}
          </Card.Title>

          <Button
            variant="outline-success"
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            {" "}View Certificate
          </Button>

        </Card.Body>

      </Card>



      <div className="d-flex justify-content-center mt-4 gap-2 flex-wrap">

        {CertificatesData.map((_, i) => (

          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cert-dot ${i === index ? "active" : ""}`}
          />

        ))}

      </div>

    </Container>

  );
}

export default Certificates;
