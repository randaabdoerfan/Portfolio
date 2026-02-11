
import { Col, Container, Card, Row } from 'react-bootstrap'
import { skillsData, skillIcons } from "../../Data/SkillsData";
import './Skills.css'
function Skills(props) {

  return (
    <Container id="skills" className="text-center shadow py-7 border-bottom">
      <Container className={props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}>
        <h2 style={{ textDecoration: "underline", textUnderlineOffset: "10px", textDecorationColor: '#f67b68', lineHeight: '3' }} className=' mt-10 mb-20 fz-6 fw-bold'> Techneical Skills</h2>
        <Row className="g-4" >
          {skillsData.map((category, index) => (
            <Col key={index} md={6} sm={12} xs={12} className="mb-3">
              <div className="mb-4">
                <Card
                  className={`skills-category text-center h-90 shadow-sm 
                    ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"
                    }`}
                >
                  <Card.Body className={
                    props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}>
                    <Row className="g-3">
                      <h4 className="mb-5 text-center">{category.title}</h4>
                      {category.skills.map((skill, index) => (
                        <Col md={3} sm={6} xs={12} key={index} className="mb-3">
                          <Card  className={" skill-item text-center h-60 shadow-sm  "}>
                            <Card.Body className={`d-flex flex-column align-items-center justify-content-center gap-2 ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}>
                              <img src={skillIcons[skill]} alt='skill icon' style={{ width: "15px", height: "15px" }} />
                              {skill}</Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Col>

          ))}


        </Row>

      </Container>

    </Container>

  )
};

export default Skills