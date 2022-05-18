import DropzoneArea from '../../components/DropZoneArea'
import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'

const StudentSubmissionDocument = () => {
    const [submissionID, setSubmissionID] = useState("")
    const [submissionType, setSubmissionType] = useState("")
    const [fileName, setFileName] = useState("")

    useEffect(() => {

    }, [])


    const sendData = (data) => {
        console.log("Child data", data)
        setFileName(data.name)
    }

    return (
        <div className='template-content-container'>
            <div className='create-template-form'>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Form >
                            <h2><label for="group">Submit Assignment</label></h2>
                            <hr></hr>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col xs={6}>
                                        <Form.Label>Submission ID</Form.Label>
                                        <Form.Control type="text" placeholder="Submission ID" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Topic Details</Form.Label>
                                        <Form.Control type="text" placeholder="Submission ID" />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Research Topic</Form.Label>
                                        <Form.Control type="text" placeholder="Submission ID" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Research Details</Form.Label>
                                        <Form.Control type="text" placeholder="Submission ID" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Upload Document</Form.Label>
                                        <div className='col-4'>
                                            <DropzoneArea sendData={sendData} />
                                            {fileName ? fileName : ''}
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={() => { onSubmit() }} />

                                </div>
                            </div>

                        </Form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default StudentSubmissionDocument