
import img from '../../Images/randaPhotocv.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
function About() {

  return (

    <Container className=' text-center min-vh-100 d-flex justify-content-center align-items-center border-bottom'>
      <Row >
        <Col md={7} className='mt-100 mr-3 about'>
          <h2 style={{ textDecoration: "underline", textUnderlineOffset: "8px", textDecorationColor: "#f67b68" }} className='py-3 fz-6 fw-bold'>About Me</h2>
          <p style={{ textAlign: "justify", lineHeight: '1.5' }}>
            I'm a frontend developer passionate about building modern web apps.
            I’m a Frontend Developer who enjoys building clean
            , user-friendly web interfaces with React.
            I’ve worked on real projects where I handled tickets, used advanced React Hooks, and connected
            frontend features with APIs.
          </p>
          <p style={{ lineHeight: '1.5', textAlign: "justify" }}>
            I like working in a team, learning from others, and making sure the features I build actually
            improve the user experience.
            I’m always looking to grow my skills and contribute to meaningful, modern web products.
          </p >
          <div style={{ display: 'flex', gap: '11px' }} >
            <span><i style={{ color: '#40a1f1', }} class="bi bi-geo-alt"></i>

              <span style={{ fontSize: '16px', gap: '13px' }}>Cairo Egypt</span></span>
            <span style={{ cursor: "pointer", color: "inherit", fontSize: '16px' }}
              onClick={() => window.open("mailto:randaerfan12@gmail.com", "_blank")}>
              <i style={{ color: '#40a1f1', }} class="bi bi-envelope-at"></i>randaerfan12@gmail.com</span>
            <span style={{ cursor: "pointer", color: "inherit", fontSize: '16px' }}
              onClick={() => window.open("https://wa.me/201287057624?text=Hello%20Randa!", "_blank")}>
              <i style={{ color: '#40a1f1', }} class="bi bi-telephone"></i>+201287057624</span>
            <span style={{ cursor: "pointer", color: "inherit", fontSize: '16px' }}
              onClick={() => window.open("https://www.linkedin.com/in/randa-erfan-6a230b217", "_blank")}>
              <i style={{ color: '#40a1f1', }} class="bi bi-linkedin"></i>linkedIn</span>
            <span style={{ cursor: "pointer", color: "inherit", fontSize: '16px' }}
              onClick={() => window.open("https://github.com/randaabdoerfan", "_blank")}>
              <i style={{ color: '#40a1f1', }} class="bi bi-github"></i>GitHub</span>
          </div>


        </Col>
        <Col md={4}>
          <img
            src={img}
            alt="profile"
            className="profile-img img-fluid rounded circle"
          />
        </Col>
      </Row>

    </Container>

  )
}

export default About