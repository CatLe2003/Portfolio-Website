import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="site-footer">
            <Container>
                <Row>

                    <Col lg={12} xs={12}>
                        <div className="copyright-text-wrap">
                            <p className="mb-0">
                                <span className="copyright-text">Copyright © 2036 <a href="#">First Portfolio</a> Company. All rights reserved.</span>
                                Design: 
                                <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
    </footer>
  )
}

export default Footer