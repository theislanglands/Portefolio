import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import projects from './projects.json';
import Card from 'react-bootstrap/Card';
import linkicon from '../assets/box-arrow-up-right.svg';
import githubicon from '../assets/github-mark.png';


function getIcons(props) {
    let github
    let link

    if (projects[props].github) {
        github = (
        <>
        <a href={projects[props].github} target={"_blank"}>
            <img className="project-icons" src={githubicon} height="20" width="20" align="right" />
        </a>
        </>
        );
    }
    if (projects[props].link) {
        link = (
        <>
            <a href={projects[props].link} target={"_blank"}>
                <img className="project-icons" src={linkicon} height="20" width="20" align="right" />
            </a>         
        </>
        );
    }

    return (
        <>{link}{github}</>
    );
}

function getTechs(props) {
    let techs = projects[props].tech;
    
    return (
        <div className="techs">
           {techs.map((tech) =>
           (
            <div className="tech">{tech}</div>
           ))}
        </div>
    );
}

function getCard(props) {
    return (
        <div>
                        <Card style={{ width: '22rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle" style={{ fontSize: '1rem' }}>
                                    <Row>
                                        <Col xs={9}>
                                        {projects[props].title}
                                        </Col>
                                        <Col>
                                            <div>
                                                {getIcons(props)}
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text className="card-text">
                                    <p>{projects[props].description}</p>
                                    <div>
                                        {getTechs(props)}
                                    </div>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

    )
}

const Projects = () => {
    return (
        
        <Container>
            <Row>
                <Col>
                    <div className="Content-header">
                    </div>
                    <div>
                        {projects.map( (project) => (
                        <div><p>{getCard(project.id)}</p></div>
                    ))}
                    </div>
              
                </Col>
            </Row>
        </Container>
    )
}

export default Projects

