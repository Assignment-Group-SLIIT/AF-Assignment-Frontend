import React from 'react'
import { ToastContainer } from 'react-toastify';
import { RippleButton } from '../components/RippleButton';
import { toastNotification } from '../components/toastNotification';
import SliitLogo from '../assets/images/SLIIT_Logo_Crest.png'
import svgOne from '../assets/images/undraw_education_f8ru.png'
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

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

                                <h1><em>
                                    “As for the future, your task is not to foresee it, but to enable it.”
                                </em></h1>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-panel">
                                <img src={SliitLogo} width={"200px"} height={"300px"} alt="sliit logo" />
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

                                <p><em>" SLIIT Research Portal help you to clarify your doubts on your Research project. "</em></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section section-three">
                <Container fluid>

                    <Row>


                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://i.ibb.co/W3J3Dpf/Whats-App-Image-2022-06-01-at-8-34-14-PM.jpg" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <RippleButton className="ripple-button " text="Read More"></RippleButton>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width={100} height={322} src="https://static.sliit.lk/wp-content/uploads/2022/05/26060326/Microsoft-Imagine-Cup-2022-Team-Nana-Shilpa-of-SLIIT-Faculty-of-Computing-.jpg" />
                                <Card.Body className='text-center'>
                                    {/* <Card.Title>Card Title</Card.Title> */}
                                    <Card.Text>
                                        Microsoft Imagine Cup 2022 – Team Nana Shilpa of SLIIT Faculty of Computing
                                    </Card.Text>
                                    <RippleButton className="ripple-button " text="Read More"></RippleButton>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width={100} height={322} src="https://static.sliit.lk/wp-content/uploads/2022/05/19081651/18th-session-of-the-SBS-Research-Workshop-series-.jpg" />
                                <Card.Body className='text-center'>
                                    {/* <Card.Title></Card.Title> */}
                                    <Card.Text>
                                        The 18th session of the research workshop series organized by the SLIIT Business school
                                    </Card.Text>
                                    <RippleButton className="ripple-button " text="Read More"></RippleButton>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" width={100} height={322} src="https://static.sliit.lk/wp-content/uploads/2022/05/26020951/SLIIT-Business-School-successfully-conducted-the-46th-virtual-guest-lecture-with-Hemas-Consumer-Brands.jpg" />
                                <Card.Body className='text-center'>
                                    {/* <Card.Title>Card Title</Card.Title> */}
                                    <Card.Text>
                                        SLIIT Business School successfully conducted the 46th virtual ...
                                    </Card.Text>
                                    <RippleButton className="ripple-button " text="Read More" onClick={(e) => window.open("https://www.sliit.lk/blog/business-news/sliit-business-school-successfully-conducted-the-46th-virtual-guest-lecture-with-hemas-consumer-brands/")}></RippleButton>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
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

                                <p>
                                    As a leading tertiary educational Institute in Sri Lanka, research is an integral part of SLIIT.We strive for a vibrant research culture and numerous initiatives are in place for programming research among the academic and student communities.

                                    Integrating research methodology to undergraduate and postgraduate curricula, establishing a research center to carry out research work, the SLIIT research grant scheme is all meant to promote research.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
