import img from '../..//assests/randaPhotocv.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

function About() {
  return (
    <Container className='text-center min-vh-100 d-flex align-items-center border-bottom py-5'>
      
      <Row className='align-items-center justify-content-center w-100 g-4'>
        
        
        <Col xs={12} md={5} lg={4} className='text-center order-1 order-md-2'>
          <img
            src={img}
            alt="profile"
            className="profile-img img-fluid"
            style={{ maxWidth: "200px", width: "100%" }}
          />
        </Col>

        {/* Text */}
        <Col xs={12} md={7} lg={6} className='about order-2 order-md-1'>
          
          <h2
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "8px",
              textDecorationColor: "#f67b68"
            }}
            className='py-3 fw-bold'
          >
            About Me
          </h2>

          <p style={{ textAlign: "justify", lineHeight: '1.6' }}>
            I'm a frontend developer passionate about building modern web apps.
            I’m a Frontend Developer who enjoys building clean, user-friendly
            web interfaces with React. I’ve worked on real projects where I
            handled tickets, used advanced React Hooks, and connected frontend
            features with APIs.
          </p>

          <p style={{ lineHeight: '1.6', textAlign: "justify" }}>
            I like working in a team, learning from others, and making sure the
            features I build actually improve the user experience. I’m always
            looking to grow my skills and contribute to meaningful, modern web products.
          </p>

          {/* Contact info responsive */}
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-3">

            <span>
              <i className="bi bi-geo-alt text-primary"></i> Cairo, Egypt
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open("mailto:randaerfan12@gmail.com")}
            >
              <i className="bi bi-envelope-at text-primary"></i> Email
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://wa.me/201287057624")}
            >
              <i className="bi bi-telephone text-primary"></i> Phone
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://www.linkedin.com")}
            >
              <i className="bi bi-linkedin text-primary"></i> LinkedIn
            </span>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://github.com")}
            >
              <i className="bi bi-github text-primary"></i> GitHub
            </span>

          </div>

        </Col>

      </Row>

    </Container>
  )
}

export default About
