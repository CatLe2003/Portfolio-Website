import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutSection = () => {
    return(
        <section className="about section-padding" id="section_2">
            <Container>
                <Row>

                    <Col lg={6} xs={12}>
                        <Image src="images/couple-working-from-home-together-sofa.jpg" className="about-image img-fluid" alt=""/>
                    </Col>

                    <Col lg={6} xs={12} className="mt-5 mt-lg-0">
                        <div className="about-thumb">

                            <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                <h2 className="text-white me-4 mb-0">My Story</h2>

                                <Image src="images/happy-bearded-young-man.jpg" className="avatar-image img-fluid" alt=""/>
                            </div>

                            <h3 className="pt-2 mb-3">a little bit about Joshua</h3>

                            <p>This one-page HTML portfolio is provided by <a href="https://templatemo.com" target="_blank">TemplateMo</a>. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to <a href="https://unsplash.com" target="_blank">Unsplash</a> and <a href="https://freepik.com" target="_blank">FreePik</a> for images used in this page.</p>

                            <p>You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" target="_blank">contact us</a> for more info.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default AboutSection;