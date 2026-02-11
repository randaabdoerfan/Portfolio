import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { CertificatesData } from "../../Data/CertificatesData";
import './Certificates.css'
function Certificates(props) {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CertificatesData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const certificate = CertificatesData[index];

  return (
    <Container className="text-center w-100 vh-100 w-100 py-5 border-bottom">
             <h2 style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: '#f67b68', lineHeight: '3' }} className=' fz-6 fw-bold'> Certificates</h2>
      <Card className={`certificates shadow-lg rounded ${props.mode === "dark"?"bg-dark text-white":"bg-light text-black"}`} style={{ maxWidth: "700px", margin: "auto" }}>
        <Card.Img
          variant="top"
          src={certificate.certificate}
          style={{ height: "300px", objectFit: "fit", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
        />
        <Card.Body className={props.mode === "dark"?"bg-dark text-white":"bg-light text-black"}>
          <Card.Title>{certificate.title}</Card.Title>

          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="outline-success"
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-box-arrow-up-right"></i> view Certificate            </Button>
          </div>
        </Card.Body>
      </Card>

 
      <div className="d-flex justify-content-center py-5 gap-2">
        {CertificatesData.map((_, i) => (
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

export default Certificates;
