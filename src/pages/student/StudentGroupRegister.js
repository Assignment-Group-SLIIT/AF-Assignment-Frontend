import React, { useState } from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

const StudentGroupRegister = () => {
    const [step, setStep] = useState(2)
    const [progress, setProgress] = useState(20)
    console.log("stepp>>", step)
    const increaseStepFunc = () => {
        if (step == 1) {
            setStep(2)
            setProgress(40)

        } else if (step == 2) {
            setStep(3)
            setProgress(60)
        } else if (step == 3) {
            setStep(4)
            setProgress(80)
        }
        else if (step == 4) {
            setStep(5)
            setProgress(100)
        }
    }

    const previouStepFunc = () => {
        if (step == 2) {
            setStep(1)
            setProgress(20)
        } else if (step == 3) {
            setStep(2)
            setProgress(40)
        }
        else if (step == 4) {
            setStep(3)
            setProgress(60)
        }
    }
    return (
        <div className='body-content-container'>
            <div className="container-border p-5">
                <h3 className="pb-3">Sign-up Form</h3>
                <hr></hr>
                <div className="progress mb-5">
                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, background: "#9D50BB" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{step == 1 ? "Member 1" : step == 2 ? "Member 2" : step == 3 ? "Member 3" : step == 4 ? "Member 4" : "Done"}</div>
                </div>
                <div className='mt-5'>
                    {step == 1 &&
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="text" placeholder="Year" />
                                    </Col>

                                </Row>
                            </Form.Group>

                            <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />
                        </Form>}
                    {step == 2 &&
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="text" placeholder="Year" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={() => { previouStepFunc() }} />

                                <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />

                            </div>

                        </Form>}
                    {step == 3 &&
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="text" placeholder="Year" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={() => { previouStepFunc() }} />

                                <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />

                            </div>

                        </Form>}
                    {step == 4 &&
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="text" placeholder="Year" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={() => { opreviouStepFunc() }} />

                                <RippleButton className="ripple-button" text="submit" onClick={() => { increaseStepFunc() }} />

                            </div>

                        </Form>}
                </div>
            </div>
        </div >
    )
}

export default StudentGroupRegister