import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ServiceSection = () => {
    return(
        <section className="services section-padding" id="section_3">
            <Container>
                <Row>
                    <Col lg={10} xs={12} className="mx-auto">
                        <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                            <Image src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg" className="avatar-image img-fluid" alt=""/>

                            <h2 className="text-white ms-4 mb-0">Services</h2>
                        </div>

                        <Row className="pt-lg-5">
                            <Col lg={6} xs={12} >
                                <div className="services-thumb">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Websites</h3>

                                        <div className="services-price-wrap ms-auto">
                                            <p className="services-price-text mb-0">$2,400</p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>

                                    <p>You may want to explore Too CSS for great collection of free HTML CSS templates.</p>

                                    <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-globe"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} xs={12} >
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Branding</h3>

                                        <div className="services-price-wrap ms-auto">
                                            <p className="services-price-text mb-0">$1,200</p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>

                                    <p>You can explore more CSS templates on TemplateMo website by browsing through different tags.</p>

                                    <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-lightbulb"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} xs={12} >
                                <div className="services-thumb">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">Ecommerce</h3>

                                        <div className="services-price-wrap ms-auto">
                                            <p className="services-price-text mb-0">$3,600</p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>

                                    <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>

                                    <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-phone"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} xs={12} >
                                <div className="services-thumb services-thumb-up">
                                    <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                        <h3 className="mb-0">SEO</h3>

                                        <div className="services-price-wrap ms-auto">
                                            <p className="services-price-text mb-0">$1,450</p>
                                            <div className="services-price-overlay"></div>
                                        </div>
                                    </div>

                                    <p>To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.</p>

                                    <a href="#" className="custom-btn custom-border-btn btn mt-3">Discover More</a>

                                    <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i className="services-icon bi-google"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ServiceSection;