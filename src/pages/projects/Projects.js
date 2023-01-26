import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import projects from './projects.json';
import './Projects.css'
import linkicon from '../../assets/box-arrow-up-right.svg';
import githubicon from '../../assets/github-mark.png';

const Projects = () => {
    return (
        <div>
            <Container>
                <div className="Content-header">
                    <p>My work so far...</p>
                </div>
                <div className="Content-subheader">
                    <p>Private projects</p>
                </div>

                <div className="projects">
                    {projects.filter(project => !project.uni && !project.exersize).sort((firstProject, secondProject) => new Date(firstProject.date) - new Date(secondProject.date)).reverse().map((project) => (
                            <div>{getCard(project.id)}</div>
                        ))}
                </div>
                <div className="Content-subheader">
                    <p>University projects</p>
                </div>
                <div className="projects">
                {projects.filter(project => (project.uni && !project.exersize)).sort((firstProject, secondProject) => new Date(firstProject.date) - new Date(secondProject.date)).reverse().map((project) => (
                        <div>{getCard(project.id)}</div>
                    ))}
                </div>
                <div className="Content-subheader">
                    <p>Exercises</p>
                </div>
                <div className="projects">
                    {projects.filter(project => project.exersize).sort((firstProject, secondProject) => new Date(firstProject.date) - new Date(secondProject.date)).reverse().map((project) => (
                            <div>{getCard(project.id)}</div>
                        ))}
                </div>          
            </Container>
        </div>
    )
}

function getIcons(props) {
    let github
    let link

    if (projects[props].github) {
        github = (
            <>
                <a href={projects[props].github} target={"_blank"}>
                    <img className="project-icons" src={githubicon} rel="noreferrer" alt="project link to github" align="right" />
                </a>
            </>
        );
    }
    if (projects[props].link) {
        link = (
            <>
                <a href={projects[props].link} target={"_blank"}>
                    <img className="project-icons" src={linkicon} rel="noreferrer" alt="link to project" align="right" />
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
            <Card className="project-card" style={{ width: '22rem', height: '13.5rem' }}>
                <Card.Body>
                    <Card.Title className="cardTitle" style={{ fontSize: '1rem' }}>
                        <Row>
                            <Col xs={8}>
                                {projects[props].title}
                            </Col>
                            <Col>
                                <div>
                                    {getIcons(props)}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className="card-year">
                                <p>({projects[props].year})</p>
                            </div>
                        </Row>
                    </Card.Title>
                    <Card.Text className="card-text">
                        <p>{projects[props].description}</p>

                    </Card.Text>
                    <div className="card-techs">
                        {getTechs(props)}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projects
