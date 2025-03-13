import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProjectSection = () => {
    return(
        <section className="projects section-padding" id="section_4">
            <Container>
                <Row className="row">

                    <Col lg={8} xs={12} md={8} className="ms-auto">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                            <Image src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt=""/>

                            <h2 className="text-white ms-4 mb-0">Projects</h2>
                        </div>
                    </Col>

                    <div className="clearfix"></div>

                    <Col lg={4} xs={12} md={6}>
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Branding</small>

                                <h3 className="projects-title">Zoik agency</h3>
                            </div>

                            <a href="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="popup-image">
                                <Image src="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </Col>

                    <Col  lg={4} xs={12} md={6}>
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Photography</small>

                                <h3 className="projects-title">The Watch</h3>
                            </div>

                            <a href="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="popup-image">
                                <Image src="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </Col>

                    <Col  lg={4} xs={12} md={6}>
                        <div className="projects-thumb">
                            <div className="projects-info">
                                <small className="projects-tag">Website</small>

                                <h3 className="projects-title">Polo</h3>
                            </div>

                            <a href="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="popup-image">
                                <Image src="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default ProjectSection;