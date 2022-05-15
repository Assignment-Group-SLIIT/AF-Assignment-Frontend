import React from 'react'
import { ToastContainer } from 'react-toastify';
import { RippleButton } from '../components/RippleButton';
import { toastNotification } from '../components/toastNotification';
import SliitLogo from '../assets/images/SLIIT_Logo_Crest.png'
import svgOne from '../assets/images/undraw_education_f8ru.png'
import { Col, Container, Row } from 'react-bootstrap';

export const LandingPage = () => {
    return (
        <div className='wrapper'>

            {/* <Container fluid>
                <Row>
                    <Col className='' lg={6}>
                        <p>Heading</p>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Col>
                    <Col lg={6}>
                        <img src={SliitLogo} width={"300px"} height={"400px"} alt="sliit logo" />
                    </Col>
                </Row>
            </Container> */}



            <section className="section section-one">
                <Container fluid>
                    <Row>
                        <Col className='' lg={6}>
                            <div className="left-panel">
                                <p>Heading</p>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-panel">
                                <img src={SliitLogo} width={"300px"} height={"400px"} alt="sliit logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="left-panel">
                    <p>Heading</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="right-panel">
                    <img src={SliitLogo} width={"300px"} height={"400px"} alt="sliit logo" />
                </div> */}
            </section>
            <section className="section section-two">

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                {/* <div className="left-panel">
                    <div className='backdrop'>
                        <div className='leftBoxes'>
                            <div></div>
                            <br />
                            <br />
                            <div></div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="right-panel">
                    <p>Heading</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium deserunt aliquid distinctio modi. Facilis est odit ipsum error non veniam accusamus, necessitatibus optio quibusdam laborum ipsam nesciunt a. Dolores.</p>
                </div> */}

                <Container fluid>
                    <Row>
                        <Col className='' lg={6}>
                            <div className="left-panel">
                                <div className='backdrop'>
                                    <div className='leftBoxes'>
                                        <div></div>
                                        <br />
                                        <br />
                                        <div></div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                            {/* <div className='left-panel-image'>
                                <img src={svgOne} alt="sliit logo" />
                            </div> */}
                        </Col>
                        <Col lg={6}>
                            <div className="right-panel">
                                <p>Heading</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium deserunt aliquid distinctio modi. Facilis est odit ipsum error non veniam accusamus, necessitatibus optio quibusdam laborum ipsam nesciunt a. Dolores.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section section-three">

            </section>
            <section className="section section-four">
                <Container fluid>
                    <Row>
                        <Col className='' lg={6}>
                            <div className="left-panel">
                                <div className='backdrop'>
                                    <div className='leftBoxes'>
                                        <div></div>
                                        <br />
                                        <br />
                                        <div></div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-panel">
                                <p>Heading</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusantium deserunt aliquid distinctio modi. Facilis est odit ipsum error non veniam accusamus, necessitatibus optio quibusdam laborum ipsam nesciunt a. Dolores.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
