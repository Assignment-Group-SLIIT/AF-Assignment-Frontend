import React, { useState } from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

export const StudentSignUp = () => {
    const [fullName, setFullName] = useState({ value: "", error: "This field cannot be empty" });
    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty" });
    const [studentID, setStudnetID] = useState({ value: "", error: "This field cannot be empty" });
    const [ContactNo, setContactNo] = useState({ value: "", error: "This field cannot be empty" });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "This field cannot be empty" });


    const onSubmit = (e) => {
        e.preventDefault()
        console.log("clicked the button")
        // if (password === confirmPassword) {

        // })
    }

    return (
        <div className='body-content-container'>
            <div className="container-border p-5">

                <h3 className="pb-3">Sign-up Form</h3>
                <hr></hr>
                <div className='mt-5'>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="full name" value={fullName.value} onChange={(e) => setFullName({ ...fullName, value: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>Student Registration No</Form.Label>
                                    <Form.Control type="text" placeholder="ITxxxxxxxx" onChange={(e) => setStudnetID(e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="ContactNumber" onChange={(e) => setContactNo(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Col>
                            </Row>


                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="I accepts the terms and conditions" />
                        </Form.Group>
                        <Row>
                            <Col>
                            </Col>
                            <Col className='text-center'>
                                <RippleButton className="ripple-button" text="submit" onClick={(e) => { onSubmit(e) }} />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
            <div class='box'>
                <div class='wave -one'></div>
                <div class='wave -two'></div>
                <div class='wave -three'></div>
            </div>
        </div >
    )
}