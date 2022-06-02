import React from 'react'
import { RippleButton } from '../components/RippleButton';
import SliitLogo from '../assets/images/SLIIT_Logo_Crest.png'
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

export const LandingPage = () => {
    return (
        <div className='wrapper'>
            <section className="section section-one">
                <Container fluid>
                    <Row>
                        <Col className='' lg={6}>
                            <div className="left-panel" data-aos="fade-right">
                                <p> As for the future, Your task is not to foresee it, but to enable it.</p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-panel" data-aos="fade-left">
                                <img src={SliitLogo} width={"200px"} height={"300px"} alt="sliit logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
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
                                <p>SLIIT Research Portal help you to clarify your doubts on your Research project.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section section-three">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="https://i.ibb.co/W3J3Dpf/Whats-App-Image-2022-06-01-at-8-34-14-PM.jpg" />
                                <Card.Body className='text-center'>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>

                                    <RippleButton className="ripple-button " text="Read More" onClick={(e) => window.open(" https://bit.ly/CDAPREG22")}></RippleButton>
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
                                    <RippleButton className="ripple-button " text="Read More" onClick={(e) => window.open("https://www.sliit.lk/blog/computing-news/microsoft-imagine-cup-2022-team-nana-shilpa-of-sliit-faculty-of-computing/")}></RippleButton>
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

                                    <RippleButton className="ripple-button " text="Read More" onClick={(e) => window.open("https://www.sliit.lk/blog/business-news/18th-session-of-the-sbs-research-workshop-series/")} ></RippleButton>
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
                                <h6>
                                    As a leading tertiary educational Institute in Sri Lanka, research is an integral part of SLIIT.We strive for a vibrant research culture and numerous initiatives are in place for programming research among the academic and student communities.
                                    Integrating research methodology to undergraduate and postgraduate curricula, establishing a research center to carry out research work, the SLIIT research grant scheme is all meant to promote research.
                                </h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
