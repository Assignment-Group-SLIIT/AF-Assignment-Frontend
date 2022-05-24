import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

export const StudentSignUp = () => {
    const [fullName, setFullName] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [studentID, setStudnetID] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [contactNo, setContactNo] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });

    useEffect(() => {
        fullName.value === "" ? setFullName({ ...fullName, isError: true }) : setFullName({ ...fullName, isError: false });
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false });
        studentID.value === "" ? setStudnetID({ ...studentID, isError: true }) : setStudnetID({ ...studentID, isError: false });
        contactNo.value === "" ? setContactNo({ ...contactNo, isError: true }) : setContactNo({ ...contactNo, isError: false });
        password.value === "" ? setPassword({ ...password, isError: true }) : setPassword({ ...password, isError: false });
        confirmPassword.value === "" ? setConfirmPassword({ ...confirmPassword, isError: true }) : setConfirmPassword({ ...confirmPassword, isError: false });

    }, [fullName.value, email.value, studentID.value, contactNo.value, password.value, confirmPassword.value]);

    const onSubmit = (e) => {
        e.preventDefault()
        if (!fullName.isError && !email.isError && !studentID.isError && !contactNo.isError && !password.isError && !confirmPassword.isError) {
            console.log("data>>")
        }
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
                            {fullName.isError && <small className='text-danger'>{fullName.error}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email.value} onChange={(e) => setEmail({ ...email, value: e.target.value })} />
                            {email.isError && <small className='text-danger'>{email.error}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>Student Registration No</Form.Label>
                                    <Form.Control type="text" placeholder="ITxxxxxxxx" value={studentID.value} onChange={(e) => setStudnetID({ ...studentID, value: e.target.value })} />
                                    {studentID.isError && <small className='text-danger'>{studentID.error}</small>}
                                </Col>
                                <Col>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="ContactNumber" value={contactNo.value} onChange={(e) => setContactNo({ ...contactNo, value: e.target.value })} />
                                    {contactNo.isError && <small className='text-danger'>{contactNo.error}</small>}
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password.value} onChange={(e) => setPassword({ ...password, value: e.target.value })} />
                                    {password.isError && <small className='text-danger'>{password.error}</small>}
                                </Col>
                                <Col>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword.value} onChange={(e) => setConfirmPassword({ ...confirmPassword, value: e.target.value })} />
                                    {confirmPassword.isError && <small className='text-danger'>{confirmPassword.error}</small>}
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