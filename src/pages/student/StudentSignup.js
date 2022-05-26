import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RippleButton } from '../../components/RippleButton'
import toastNotification from '../../components/toastNotification';

import { registerUser } from '../../services/user.service';

export const StudentSignUp = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [degree, setDegree] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [studentID, setStudentID] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [contactNo, setContactNo] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });

    const degreePrograms = [
        {
            id: 0,
            name: "BSc (Hons) in Information Technology Specializing in Information Technology"
        },
        {
            id: 1,
            name: "BSc (Hons) in Information Technology Specializing in Computer Systems & Network Engineering"
        },
        {
            id: 2,
            name: "BSc (Hons) in Information Technology Specializing in Software Engineering"
        },
        {
            id: 3,
            name: "BSc (Hons) in Information Technology Specializing in Information Systems Engineering"
        },
        {
            id: 4,
            name: "BSc (Hons) in Information Technology Specializing in Cyber Security"
        },
        {
            id: 5,
            name: "BSc (Hons) in Information Technology Specializing in Interactive Media"
        },
        {
            id: 6,
            name: "BSc (Hons) in Information Technology Specializing in Data Science"
        },
    ]

    useEffect(() => {

        fullName.value === "" ? setFullName({ ...fullName, isError: true }) : setFullName({ ...fullName, isError: false });
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false });
        degree.value === null ? setDegree({ ...degree, isError: true }) : setDegree({ ...degree, isError: false });
        studentID.value === "" ? setStudentID({ ...studentID, isError: true }) : setStudentID({ ...studentID, isError: false });
        contactNo.value === "" ? setContactNo({ ...contactNo, isError: true }) : setContactNo({ ...contactNo, isError: false });
        password.value === "" ? setPassword({ ...password, isError: true }) : setPassword({ ...password, isError: false });
        confirmPassword.value === "" ? setConfirmPassword({ ...confirmPassword, isError: true }) : setConfirmPassword({ ...confirmPassword, isError: false });

    }, [fullName.value, email.value, studentID.value, contactNo.value, password.value, confirmPassword.value]);

    const onSubmit = (e) => {
        e.preventDefault()
        const payload = {
            fullname: fullName.value,
            studentId: studentID.value,
            email: email.value,
            contactNo: contactNo.value,
            degree: degree.value.name,
            password: password.value,
            role: "Student",
            groupId: "",
            isAvailable: true,
            department: "",
            field: ""
        }
        if (!fullName.isError && !email.isError && !degree.isError && !studentID.isError && !contactNo.isError && !password.isError && !confirmPassword.isError) {
            if (password.value === confirmPassword.value) {
                console.log("data>>", payload)
                registerUser(payload).then((res) => {
                    setFullName({ ...fullName, value: "" })
                    setEmail({ ...email, value: "" })
                    setDegree({ ...degree, value: "" })
                    setStudentID({ ...studentID, value: "" })
                    setContactNo({ ...contactNo, value: "" })
                    setPassword({ ...password, value: "" })
                    setConfirmPassword({ ...confirmPassword, value: "" })
                    res.ok ? toastNotification("Success!", "success") : toastNotification("Error occured!", "error")
                    navigate("/login")
                }).catch((err) => {
                    err.ok === false ? toastNotification("Error occured!", "error") : null
                    console.log("error while student signup", err.error)
                })
            } else {
                setConfirmPassword({ ...confirmPassword, isError: true, error: "Passwords are not matching" })
            }
        }else{
            toastNotification("Please fill all the requeid field", "warn") 
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
                            <Form.Label>Degree</Form.Label>
                            <Autocomplete

                                id="panelmember1"
                                options={degreePrograms}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}

                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.name || ""}
                                value={degree.value}
                                onChange={(_event, name) => {
                                    setDegree({ ...degree, value: name });
                                }}
                                size="small"

                            />
                            {degree.isError && <small className='text-danger'>{degree.error}</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>Student Registration No</Form.Label>
                                    <Form.Control type="text" placeholder="ITxxxxxxxx" value={studentID.value} onChange={(e) => setStudentID({ ...studentID, value: e.target.value })} />
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
            <div className='box'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
        </div >
    )
}