import { Col, Container, Card, Row } from 'react-bootstrap'
import { skillsData, skillIcons } from "../../Data/SkillsData";
import './Skills.css'

function Skills(props) {

  const isDark = props.mode === "dark";

  return (

    <Container
      id="skills"
      fluid
      className={`text-center shadow py-5 border-bottom ${
        isDark ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >

      <Container>

        <h2 className="skills-title fw-bold mb-5">
          Technical Skills
        </h2>

        <Row className="g-4">

          {skillsData.map((category, index) => (

            <Col key={index} lg={6} md={6} sm={12} xs={12}>

              <Card
                className={`skills-category shadow-sm h-100 ${
                  isDark ? "bg-dark text-white" : "bg-light text-dark"
                }`}
              >

                <Card.Body>

                  <h4 className="mb-4 category-title">
                    {category.title}
                  </h4>

                  <Row className="g-3">

                    {category.skills.map((skill, index) => (

                      <Col key={index}
                        xl={3}
                        lg={4}
                        md={4}
                        sm={6}
                        xs={6}
                      >

                        <Card className={`skill-item shadow-sm h-100 ${
                          isDark ? "bg-dark text-white" : "bg-light text-dark"
                        }`}>

                          <Card.Body className="d-flex flex-column align-items-center justify-content-center">

                            <img
                              src={skillIcons[skill]}
                              alt={skill}
                              className="skill-icon"
                            />

                            <span className="skill-text">
                              {skill}
                            </span>

                          </Card.Body>

                        </Card>

                      </Col>

                    ))}

                  </Row>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </Container>

  )
}

export default Skills
