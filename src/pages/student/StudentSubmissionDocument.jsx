import React, { useEffect, useState } from 'react'
import '../../styles/usersList.styles.scss'
import DropzoneArea from '../../components/DropZoneArea'
import { RippleButton } from '../../components/RippleButton'
import { Form, Row, Col, ProgressBar } from 'react-bootstrap'
import toastNotification from '../../components/toastNotification';
import { createProjectProposal } from '../../services/projectProposal.service';
import { getOneGroup } from '../../services/group.service';
import { ProgressBar } from 'react-bootstrap';

const StudentSubmissionDocument = () => {
    const [groupId, setGroupId] = useState("");

    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [topic, setTopic] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [field, setField] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [fileName, setFileName] = useState({ value: "", error: "Please select a file", isError: false });
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    useEffect(() => {
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false })
        fileName.value === "" ? setFileName({ ...fileName, isError: true }) : setFileName({ ...fileName, isError: false })
    }, [email.value, fileName.value])

    const sendProgress = (data) => {
        console.log("DATAAAA", data)
        setState(true)
        setLoadingProgress(data)
    }

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));

        if (user.groupId != "") {
            setGroupId(user?.groupId)
            getOneGroup(user?.groupId).then((res) => {
                console.log("res>>", res.data)
                if (res.ok) {
                    setTopic(res?.data?.researchTopic)
                    setField(res?.data?.researchField);
                } else {
                    console.log("error while getting group data")
                }
            }).catch((err) => {
                console.log("error while getting group data", err.error)
            })
        }
    }, [])


    const sendData = (data) => {
        console.log("Child data", data)
        setFileName({ ...fileName, value: data })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            groupId,
            leaderEmail: email.value,
            researchTopic: topic,
            field: field,
            document: fileName.value
        }
        if (!email.isError && !fileName.isError) {
            // console.log("payload>>", payload)
            createProjectProposal(payload).then((res) => {
                if (res.ok) {
                    toastNotification("Project proposal has been submitted successfully!", "success")
                    window.location.reload()
                } else {
                    toastNotification("Error occured!", "error")
                }
            }).catch((err) => {
                toastNotification("Error occured!", "error")
                console.log("error while registering>>", err.err)
            })
        }

    }

    return (
        <div className='template-content-container'>
            <div className='create-template-form'>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Form >
                            <h3><label for="group">Project Proposal Submission</label></h3>
                            <hr></hr>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col xs={6}>
                                        <Form.Label>Group ID</Form.Label>
                                        <Form.Control type="text" placeholder="Submission ID" value={groupId} disabled />
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Leader Email</Form.Label>
                                        <Form.Control type="text" placeholder="Leader Email" value={email.value}
                                            onChange={(e) => { setEmail({ ...email, value: e.target.value }) }} />
                                        {email.isError && <small className='text-danger'>{email.error}</small>}
                                    </Col>
                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Research Topic</Form.Label>
                                        <Form.Control type="text" placeholder="Research Topic" value={topic} disabled />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Row>

                                    <Col>
                                        <Form.Label>Research Field </Form.Label>
                                        <Form.Control type="text" placeholder="Research Topic" value={field} disabled />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Row>
                                    <Col lg={3}>
                                        <Form.Label className='mt-1'>Upload Document</Form.Label>
                                    </Col>

                                    <Col>

                                        <div className='col-4'>
                                            <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                                            {fileName.value ? fileName.value.substring(0, 30) + "..." : ''}
                                            {fileName.isError && <small className='text-danger'>{fileName.error}</small>}
                                        </div>
                                        <div className='col-6'>
                                            <div>
                                                {!fileName.value && state ? <ProgressBar now={loadingProgress} /> : ""}
                                            </div>

                                        </div >
                                    </Col>

                                </Row>
                            </Form.Group>

                            <br></br>

                            <div className="col py-3 text-center">
                                <RippleButton className="ripple-button" text="Submit" onClick={(e) => { onSubmit(e) }} />
                            </div>

                        </Form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default StudentSubmissionDocument