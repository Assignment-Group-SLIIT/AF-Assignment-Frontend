import React, { useState } from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

const StudentGroupRegister = () => {
    const [step, setStep] = useState(1)
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
                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, background: "#9D50BB" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{step == 1 ? "Leader" : step == 2 ? "Member 1" : step == 3 ? "Member 2" : step == 4 ? "Member 3" : "Done"}</div>
                </div>
                <div className='mt-5'>
                    {step == 1 &&

                        <Form>
                            <Row>
                                <div class="d-flex justify-content-start">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className='ml-3'>
                                        <h5>Leader Details</h5>
                                    </div>
                                </div>



                            </Row>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Col>

                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>


                            <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />
                        </Form>}
                    {step == 2 &&
                        <Form>
                            <Row>
                                <div class="d-flex justify-content-start">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className='ml-3'>
                                        <h5>Member 1 Details</h5>
                                    </div>
                                </div>



                            </Row>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={() => { previouStepFunc() }} />

                                <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />

                            </div>

                        </Form>}
                    {step == 3 &&
                        <Form>
                            <Row>
                                <div class="d-flex justify-content-start">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className='ml-3'>
                                        <h5>Member 2 Details</h5>
                                    </div>
                                </div>



                            </Row>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={() => { previouStepFunc() }} />

                                <RippleButton className="ripple-button" text="Next" onClick={() => { increaseStepFunc() }} />

                            </div>

                        </Form>}
                    {step == 4 &&
                        <Form>
                            <Row>
                                <div class="d-flex justify-content-start">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    </div>
                                    <div className='ml-3'>
                                        <h5>Member 3 Details</h5>
                                    </div>
                                </div>



                            </Row>
                            <br></br>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Full Name" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
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