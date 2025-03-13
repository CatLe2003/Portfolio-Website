import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

const FeatureSection = () => {
    return ( 
    <section className="featured section-padding">
        <Container>
            <Row>

                <Col lg={6} xs={12}>
                    <div className="profile-thumb">
                        <div className="profile-title">
                            <h4 className="mb-0">Information</h4>
                        </div>

                        <div className="profile-body">
                            <p>
                                <span className="profile-small-title">Name</span> 
                                <span>Joshua Morgan</span>
                            </p>

                            <p>
                                <span className="profile-small-title">Birthday</span> 
                                <span>Aug 12, 1986</span>
                            </p>

                            <p>
                                <span className="profile-small-title">Phone</span> 
                                <span><a href="tel: 305-240-9671">120-240-9600</a></span>
                            </p>

                            <p>
                                <span className="profile-small-title">Email</span> 
                                <span><a href="mailto:hello@josh.design">hello@josh.design</a></span>
                            </p>
                        </div>
                    </div>
                </Col>

                <Col lg={6} xs={12} className="mt-5 mt-lg-0">
                        <div className="about-thumb">
                            <Row>
                                <Col lg={6} xs={6} className="featured-border-bottom py-2">
                                    <strong className="featured-numbers">20+</strong>

                                    <p className="featured-text">Years of Experiences</p>
                                </Col>

                                <Col lg={6} xs={6} className="featured-border-start featured-border-bottom ps-5 py-2">
                                    <strong className="featured-numbers">245</strong>

                                    <p className="featured-text">Happy Customers</p>
                                </Col>

                                <Col lg={6} xs={6} className="pt-4">
                                    <strong className="featured-numbers">640</strong>

                                    <p className="featured-text">Project Finished</p>
                                </Col>

                                <Col lg={6} xs={6} className="featured-border-start ps-5 pt-4">
                                    <strong className="featured-numbers">72+</strong>

                                    <p className="featured-text">Digital Awards</p>
                                </Col>
                            </Row>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default FeatureSection;