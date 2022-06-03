import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { nanoid } from 'nanoid'
import { RippleButton } from '../../components/RippleButton'
import toastNotification from '../../components/toastNotification';
import successLogo from '../../assets/images/success.png'
import erroLogo from '../../assets/images/error.png'

import { createGroup } from '../../services/group.service';
import { getAllUsers } from '../../services/user.service';

const StudentGroupRegister = () => {
    const navigate = useNavigate();

    const [allUsers, setAllUsers] = useState([]);

    //leader
    const [nameL, setNameL] = useState("");
    const [contactNoL, setContactNoL] = useState("");
    const [studentNoL, setStudentNoL] = useState("");
    const [specializationL, setSpecializationL] = useState("");
    const [emailL, setEmailL] = useState("");

    //member01
    const [nameM1, setNameM1] = useState("");
    const [contactNoM1, setContactNoM1] = useState("");
    const [studentNoM1, setStudentNoM1] = useState("");
    const [specializationM1, setSpecializationM1] = useState("");
    const [emailM1, setEmailM1] = useState("");

    //member02
    const [nameM2, setNameM2] = useState("");
    const [contactNoM2, setContactNoM2] = useState("");
    const [studentNoM2, setStudentNoM2] = useState("");
    const [specializationM2, setSpecializationM2] = useState("");
    const [emailM2, setEmailM2] = useState("");

    //member03
    const [nameM3, setNameM3] = useState("");
    const [contactNoM3, setContactNoM3] = useState("");
    const [studentNoM3, setStudentNoM3] = useState("");
    const [specializationM3, setSpecializationM3] = useState("");
    const [emailM3, setEmailM3] = useState("");

    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isSuccess, setIsSuccess] = useState(false)

    const specializations = [
        {
            id: 0,
            name: "IT"
        },
        {
            id: 1,
            name: "CSN"
        },
        {
            id: 2,
            name: "DS"
        },
        {
            id: 3,
            name: "ISE"
        },
        {
            id: 4,
            name: "CS"
        },
        {
            id: 5,
            name: "SE"
        },
        {
            id: 6,
            name: "IM"
        },
    ]

    useEffect(() => {
        getAllUsers().then((res) => {
            if (res.ok) {
                let tmpArr = res.data.filter((item) => {
                    return item.isAvailable === false;
                })
                let tmpArrWithAvailableStudents = tmpArr.map(item => item.studentId
                )
                setAllUsers(tmpArrWithAvailableStudents)
            } else {
                console.log("error while fetching all users", err.err)
            }
        }).catch((err) => {
            console.log("error while fetching all users", err.err)
        })
    }, []);

    //method to check availability of a member
    const checkIsRegistered = (id) => {
        return allUsers.includes(id)
    }

    const increaseStepFunc = (e) => {
        e.preventDefault()

        if (step == 1) {

            if (nameL != "" && contactNoL != "" && studentNoL != "" && specializationL != "" && emailL != "") {
                if (checkIsRegistered(studentNoL.toUpperCase()) === false) {
                    setStep(2)
                    setProgress(25)
                } else {
                    toastNotification(`${studentNoL} is already registered with an another group`, "warn")
                }
            } else {
                toastNotification("Please fill all the required fields!", "warn")
            }

        } else if (step == 2) {
            if (nameM1 != "" && contactNoM1 != "" && studentNoM1 != "" && specializationM1 != "" && emailM1 != "") {
                if (checkIsRegistered(studentNoM1.toUpperCase()) === false) {
                    setStep(3)
                    setProgress(50)
                } else {
                    toastNotification(`${studentNoM1} is already registered with an another group`, "warn")
                }
            } else {
                toastNotification("Please fill all the required fields!", "warn")
            }
        } else if (step == 3) {
            if (nameM2 != "" && contactNoM2 != "" && studentNoM2 != "" && specializationM2 != "" && emailM2 != "") {
                if (checkIsRegistered(studentNoM2.toUpperCase()) === false) {
                    setStep(4)
                    setProgress(75)
                } else {
                    toastNotification(`${studentNoM1} is already registered with an another group`, "warn")
                }
            } else {
                toastNotification("Please fill all the required fields!", "warn")
            }
        }

    }

    const previousStepFunc = (e) => {
        e.preventDefault()

        if (step == 2) {
            setStep(1)
            setProgress(0)
        } else if (step == 3) {
            setStep(2)
            setProgress(25)
        }
        else if (step == 4) {
            setStep(3)
            setProgress(50)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const students = {
            leader: {
                name: nameL,
                contactNo: contactNoL,
                registrationNo: studentNoL,
                specialization: specializationL?.name,
                email: emailL
            },
            member01: {
                name: nameM1,
                contactNo: contactNoM1,
                registrationNo: studentNoM1,
                specialization: specializationM1?.name,
                email: emailM1
            },
            member02: {
                name: nameM2,
                contactNo: contactNoM2,
                registrationNo: studentNoM2,
                specialization: specializationM2?.name,
                email: emailM2
            },
            member03: {
                name: nameM3,
                contactNo: contactNoM3,
                registrationNo: studentNoM3,
                specialization: specializationM3?.name,
                email: emailM3
            },

        }

        const payload = {
            groupId: nanoid(6),
            student: students,
            supervisor: "",
            coSupervisor: "",
            researchTopic: "",
            researchField: "",
            panelNo: ""

        }

        if (nameM3 != "" && contactNoM3 != "" && studentNoM3 != "" && specializationM3 != "" && emailM3 != "") {
            if (checkIsRegistered(studentNoM3.toUpperCase()) === false) {

                createGroup(payload).then((res) => {
                    console.log("after group registration>>", res)
                    if (res.ok) {
                        setIsSuccess(true)
                        setStep(5)
                        setProgress(100)
                        toastNotification("Group registered successfully!", "success")
                    }

                }).catch((err) => {
                    setIsSuccess(false)
                    console.log("error while registering a group>>", err)
                })

            } else {
                toastNotification(`${studentNoM3} is already registered with an another group`, "warn")
            }
        } else {
            toastNotification("Please fill all the required fields!", "warn")
        }

    }

    return (
        <div className='body-content-container'>
            <div className="container-border p-5">
                <h3 className="pb-3">Group Registration Form</h3>
                <hr></hr>
                <div className="progress mb-5">
                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, background: "#9D50BB" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="99">{progress}%</div>
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
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" value={nameL} onChange={(e) => { setNameL(e.target.value) }} />
                                    </Col>

                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" value={contactNoL} onChange={(e) => { setContactNoL(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" value={studentNoL} onChange={(e) => { setStudentNoL(e.target.value) }} />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Specialization</Form.Label>
                                <Autocomplete

                                    id="specializationLeader"
                                    options={specializations}
                                    renderInput={params => (
                                        <TextField {...params} variant="outlined" />
                                    )}

                                    getOptionSelected={(option, value) => option.id === value.id}
                                    getOptionLabel={option => option.name || ""}
                                    value={specializationL}
                                    onChange={(_event, name) => {
                                        setSpecializationL(name);
                                    }}
                                    size="small"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={emailL} onChange={(e) => { setEmailL(e.target.value) }} />
                            </Form.Group>


                            <RippleButton className="ripple-button" text="Next" onClick={(e) => { increaseStepFunc(e) }} />
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
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" value={nameM1} onChange={(e) => { setNameM1(e.target.value) }} />
                                    </Col>

                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" value={contactNoM1} onChange={(e) => { setContactNoM1(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" value={studentNoM1} onChange={(e) => { setStudentNoM1(e.target.value) }} />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Specialization</Form.Label>
                                <Autocomplete

                                    id="specializationLeader"
                                    options={specializations}
                                    renderInput={params => (
                                        <TextField {...params} variant="outlined" />
                                    )}

                                    getOptionSelected={(option, value) => option.id === value.id}
                                    getOptionLabel={option => option.name || ""}
                                    value={specializationM1}
                                    onChange={(_event, name) => {
                                        setSpecializationM1(name);
                                    }}
                                    size="small"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={emailM1} onChange={(e) => { setEmailM1(e.target.value) }} />
                            </Form.Group>

                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={(e) => { previousStepFunc(e) }} />

                                <RippleButton className="ripple-button" text="Next" onClick={(e) => { increaseStepFunc(e) }} />

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
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" value={nameM2} onChange={(e) => { setNameM2(e.target.value) }} />
                                    </Col>

                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" value={contactNoM2} onChange={(e) => { setContactNoM2(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" value={studentNoM2} onChange={(e) => { setStudentNoM2(e.target.value) }} />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Specialization</Form.Label>
                                <Autocomplete

                                    id="specializationLeader"
                                    options={specializations}
                                    renderInput={params => (
                                        <TextField {...params} variant="outlined" />
                                    )}

                                    getOptionSelected={(option, value) => option.id === value.id}
                                    getOptionLabel={option => option.name || ""}
                                    value={specializationM2}
                                    onChange={(_event, name) => {
                                        setSpecializationM2(name);
                                    }}
                                    size="small"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={emailM2} onChange={(e) => { setEmailM2(e.target.value) }} />
                            </Form.Group>

                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={(e) => { previousStepFunc(e) }} />

                                <RippleButton className="ripple-button" text="Next" onClick={(e) => { increaseStepFunc(e) }} />

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
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="name" value={nameM3} onChange={(e) => { setNameM3(e.target.value) }} />
                                    </Col>

                                </Row>


                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="ContactNumber" value={contactNoM3} onChange={(e) => { setContactNoM3(e.target.value) }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Student Number</Form.Label>
                                        <Form.Control type="text" placeholder="IT*******" value={studentNoM3} onChange={(e) => { setStudentNoM3(e.target.value) }} />
                                    </Col>

                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Specialization</Form.Label>
                                <Autocomplete

                                    id="specializationLeader"
                                    options={specializations}
                                    renderInput={params => (
                                        <TextField {...params} variant="outlined" />
                                    )}

                                    getOptionSelected={(option, value) => option.id === value.id}
                                    getOptionLabel={option => option.name || ""}
                                    value={specializationM3}
                                    onChange={(_event, name) => {
                                        setSpecializationM3(name);
                                    }}
                                    size="small"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={emailM3} onChange={(e) => { setEmailM3(e.target.value) }} />
                            </Form.Group>

                            <div className='d-flex flex-row align-items-center justify-content-around'>

                                <RippleButton className="ripple-button-warning" text="Previous" onClick={(e) => { previousStepFunc(e) }} />

                                <RippleButton className="ripple-button" text="submit" onClick={(e) => { onSubmit(e) }} />

                            </div>

                        </Form>}
                    {step === 5 && (
                        <div className="container step-container step-four">
                            {isSuccess ? (
                                <>
                                    <img src={successLogo} width={200} height={200} alt='success logo' />
                                    <h4>Your group has been successfully registered!</h4>
                                    <div className='d-flex flex-row align-items-center justify-content-around'>



                                        <RippleButton className="ripple-button" text="View next steps" onClick={() => { navigate("/student/dashboard") }} />


                                    </div>
                                </>

                            ) :
                                (
                                    <>
                                        <img src={erroLogo} width={200} height={200} alt='error logo' />
                                        <h4>There is an error with your request. Please try again later.</h4>
                                    </>
                                )}
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default StudentGroupRegister