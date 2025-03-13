import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ContactSection = () => {
    return(
        <section className="contact section-padding" id="section_5">
                <Container>
                    <Row>

                        <Col lg={6} md={8} xs={12}>
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <Image src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg" className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                            </div>
                        </Col>

                        <div className="clearfix"></div>

                        <Col lg={3} md={6} xs={12}  className="pe-lg-0">
                            <div className="contact-info contact-info-border-start d-flex flex-column">
                                <strong className="site-footer-title d-block mb-3">Services</strong>

                                <ul className="footer-menu">
                                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Websites</a></li>

                                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Branding</a></li>

                                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Ecommerce</a></li>

                                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">SEO</a></li>
                                </ul>

                                <strong className="site-footer-title d-block mt-4 mb-3">Stay connected</strong>

                                <ul className="social-icon">
                                    <li className="social-icon-item"><a href="https://twitter.com/minthu" className="social-icon-link bi-twitter"></a></li>

                                    <li className="social-icon-item"><a href="#" className="social-icon-link bi-instagram"></a></li>

                                    <li className="social-icon-item"><a href="#" className="social-icon-link bi-pinterest"></a></li>

                                    <li className="social-icon-item"><a href="https://www.youtube.com/templatemo" className="social-icon-link bi-youtube"></a></li>
                                </ul>

                                <strong className="site-footer-title d-block mt-4 mb-3">Start a project</strong>

                                <p className="mb-0">I’m available for freelance projects</p>
                            </div>
                        </Col>

                        <Col lg={3} md={6} xs={12}  className="ps-lg-0">
                            <div className="contact-info d-flex flex-column">
                                <strong className="site-footer-title d-block mb-3">About</strong>

                                <p className="mb-2">
                                    Joshua is a professional web developer. Feel free to get in touch with me.
                                </p>

                                <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>

                                <p>
                                    <a href="mailto:hello@josh.design">
                                        hello@josh.design
                                    </a>
                                </p>

                                <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>

                                <p className="mb-0">
                                    <a href="tel: 120-240-9600">
                                        120-240-9600
                                    </a>
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} xs={12} className="mt-5 mt-lg-0">
                            <form action="#" method="get" className="custom-form contact-form" role="form">
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="form-floating">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" required/>
                                            
                                            <label htmlFor="floatingInput">Name</label>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} xs={12}>
                                        <div className="form-floating">
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required/>
                                            
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} xs={6}>
                                        <div className="form-check form-check-inline">
                                            <input name="website" type="checkbox" className="form-check-input" id="inlineCheckbox1" value="1"/>

                                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                                <i className="bi-globe form-check-icon"></i>
                                                <span className="form-check-label-text">Websites</span>
                                            </label>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} xs={6}>
                                        <div className="form-check form-check-inline">
                                            <input name="branding" type="checkbox" className="form-check-input" id="inlineCheckbox2" value="1"/>

                                            <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                <i className="bi-lightbulb form-check-icon"></i>
                                                <span className="form-check-label-text">Branding</span>
                                            </label>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} xs={6}>
                                        <div className="form-check form-check-inline">
                                            <input name="ecommerce" type="checkbox" className="form-check-input" id="inlineCheckbox3" value="1"/>

                                            <label className="form-check-label" htmlFor="inlineCheckbox3">
                                                <i className="bi-phone form-check-icon"></i>
                                                <span className="form-check-label-text">Ecommerce</span>
                                            </label>
                                        </div>
                                    </Col>

                                    <Col lg={3} md={6} xs={6}>
                                        <div className="form-check form-check-inline me-0">
                                            <input name="seo" type="checkbox" className="form-check-input" id="inlineCheckbox4" value="1"/>

                                            <label className="form-check-label" htmlFor="inlineCheckbox4">
                                                <i className="bi-google form-check-icon"></i>
                                                <span className="form-check-label-text">SEO</span>
                                            </label>
                                        </div>
                                    </Col>

                                    <Col lg={12} xs={12}>
                                        <div className="form-floating">
                                            <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                            
                                            <label htmlFor="floatingTextarea">Tell me about the project</label>
                                        </div>
                                    </Col>

                                    <Col lg={3} xs={12} className="ms-auto">
                                        <button type="submit" className="form-control">Send</button>
                                    </Col>

                                </Row>
                            </form>
                        </Col>

                    </Row>
                </Container>
        </section>
    );
}

export default ContactSection;