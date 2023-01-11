import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import projects from './projects.json';
import Card from 'react-bootstrap/Card';
import linkicon from '../assets/box-arrow-up-right.svg';
import githubicon from '../assets/github-mark.png';


function getIcons(props) {
    let github
    let link

    if (projects[0].github) {
        github = (
        <>
        <a href={projects[0].github} target={"_blank"}>
            <img className="project-icons" src={githubicon} height="20" width="20" align="right" />
        </a>
        </>
        );
    }
    if (props[0].link) {
        link = (
        <>
            <a href="#link fto linkedin" target={"_blank"}>
                <img className="project-icons" src={linkicon} height="20" width="20" align="right" />
            </a>         
        </>
        );
    }

    return (
        <>{link}{github}</>
    );
}

const Projects = () => {
    return (
        
        <Container>
            <Row>
                <Col>
                    <div className="Content-header">
        
                    </div>
                    
                    <div>
                        <Card style={{ width: '22rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '1rem' }}>
                                    <Row>
                                        <Col xs={9}>
                                        {projects[1].title}
                                        </Col>
                                        <Col>
                                            <div>
                                                {getIcons(projects)}
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    
                                </Card.Title>
                                <Card.Text style={{ fontSize: '0.8rem' }}>
                                    <p>{projects[1].description}</p>
                                    
                                    {projects[1].tech[2]}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}



export default Projects

