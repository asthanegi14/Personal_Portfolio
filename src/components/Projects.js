import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.jpeg";
import s3 from "../assets/img/s3.jpeg";
import o1 from "../assets/img/o1.png";
import o2 from "../assets/img/o2.png";
import o3 from "../assets/img/o3.png";
import o4 from "../assets/img/o4.png";
import o6 from "../assets/img/o6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webd = [
    {
      title: "University Clone",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio Website",
      description: "For college assigment",
      imgUrl: projImg2,
    },
    {
      title: "Spotify Clone",
      description: "Only premium user can play music",
      imgUrl: projImg3,
    },
  ];

  const security = [
    {
      title: "User Authentication System",
      description: "MERN Development",
      imgUrl: s1,
    },
    {
      title: "Crowdfunding Website",
      description: "Using Etherium Blockchain",
      imgUrl: s2,
    },
    {
      title: "Online Exam Portal",
      description: "Using Java GUI",
      imgUrl: s3,
    },
  ];
  const others = [
    {
      title: "Calculator",
      description: "Using JavaScript",
      imgUrl: o1,
    },
    {
      title: "Tribute Website",
      description: "Using JavaScript",
      imgUrl: o2,
    },
    {
      title: "Login & Registration Page",
      description: "Using Java GUI",
      imgUrl: o3,
    },
    {
      title: "Voice and text converter",
      description: "convert your voice to text or vice-a-versa",
      imgUrl: o4,
    },
    {
      title: "Student Information System",
      description: "Cloud Based chatbot",
      imgUrl: projImg1,
    },
    {
      title: "E-commerce & ToDo",
      description: "Supports voice commands",
      imgUrl: o6,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this section, you will find a showcase of my works that demonstrate my ability to deliver impactful solutions. Each project highlights my problem-solving skills and the successful application of various technologies to address specific challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Security</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webd.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                        security.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          others.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="imag" src={colorSharp2}></img>
    </section>
  )
}