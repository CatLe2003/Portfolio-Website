import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const ClientSection = () => {
    return(
        <section className="clients section-padding">
              <Container>
                  <Row className="row align-items-center">

                      <Col lg={12} xs={12}>
                          <h3 className="text-center mb-5">Companies I've had worked</h3>
                      </Col>

                      <Col lg={2} xs={4} className="ms-auto clients-item-height">
                          <Image src="images/clients/cachet.svg" className="clients-image img-fluid" alt=""/>
                      </Col>

                      <Col lg={2} xs={4}  className="clients-item-height">
                          <Image src="images/clients/guitar-center.svg" className="clients-image img-fluid" alt=""/>
                      </Col>

                      <Col lg={2} xs={4}  className="clients-item-height">
                          <Image src="images/clients/tokico.svg" className="clients-image img-fluid" alt=""/>
                      </Col>

                      <Col lg={2} xs={4}  className="clients-item-height">
                          <Image src="images/clients/shopify.svg" className="clients-image img-fluid" alt=""/>
                      </Col>

                      <Col lg={2} xs={4}  className="me-auto clients-item-height">
                          <Image src="images/clients/profil-rejser.svg" className="clients-image img-fluid" alt=""/>
                      </Col>

                  </Row>
              </Container>
        </section>
    );
}

export default ClientSection;