import React from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

export const StudentSignUp = () => {

    const onSubmit = () => {
        console.log("clicked the button")
    }

    return (
        <div className='body-content-container'>
            <div className="container-border p-5">
                <h3 className="pb-3">Sign-up Form</h3>
                <hr></hr>
                <div className='mt-5'>
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
                                    <Form.Label>Role</Form.Label>
                                    <select class="form-select form-control"
                                        name="type" id="type" required
                                    // value={type}
                                    // onChange={(e) => {
                                    //     setType(e.target.value);
                                    // }}
                                    >
                                        <option  >Choose</option>
                                        <option id="Single" >Single</option>
                                        <option id="Double">Double</option>
                                        <option id="Family" >Family</option>
                                        <option id="Luxuary" >Luxuary</option>
                                    </select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row>
                                <Col>
                                    <Form.Label>Passowrd</Form.Label>
                                    <Form.Control type="text" placeholder="Password" />
                                </Col>
                                <Col>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="text" placeholder="Confirm Password" />
                                </Col>
                            </Row>


                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I accepts the terms and conditions" />
                        </Form.Group>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <RippleButton className="ripple-button" text="submit" onClick={() => { onSubmit() }} />
                            </Col>
                        </Row>

                    </Form>
                </div>
            </div>
        </div >
    )
}