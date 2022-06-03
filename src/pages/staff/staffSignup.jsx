import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap'
import { RippleButton } from '../../components/RippleButton'
import { registerUser } from '../../services/user.service';
import toastNotification from '../../components/toastNotification';

const StaffSignup = () => {

    let navigate = useNavigate();

    const [fullname, setFullname] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [contactNo, setContactNo] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [role, setRole] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [department, setDepartment] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [field, setField] = useState({ value: "", error: "This field cannot be empty", isError: false });

    useEffect(() => {
        fullname.value === "" ? setFullname({ ...fullname, isError: true }) : setFullname({ ...fullname, isError: false });
        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false });
        contactNo.value === "" ? setContactNo({ ...contactNo, isError: true }) : setContactNo({ ...contactNo, isError: false });
        role.value === "" ? setRole({ ...role, isError: true }) : setRole({ ...role, isError: false });
        password.value === "" ? setPassword({ ...password, isError: true }) : setPassword({ ...password, isError: false });
        confirmPassword.value === "" ? setConfirmPassword({ ...confirmPassword, isError: true }) : setConfirmPassword({ ...confirmPassword, isError: false });
        department.value === "" ? setDepartment({ ...department, isError: true }) : setDepartment({ ...department, isError: false });
        field.value === "" ? setField({ ...field, isError: true }) : setField({ ...field, isError: false });


    }, [fullname.value, email.value, contactNo.value, role.value, password.value, confirmPassword.value, department.value, field.value]);


    const onSubmit = (e) => {
        e.preventDefault();

        const userPayload = {
            fullname: fullname.value,
            email: email.value,
            contactNo: contactNo.value,
            password: password.value,
            role: role.value,
            department: department.value,
            field: field.value,
            isAvailable: true

        }
        if (!fullname.isError && !email.isError && !field.isError && !department.isError && !contactNo.isError && !password.isError && !confirmPassword.isError && !role.isError) {
            if (password.value === confirmPassword.value) {
                console.log("data>>", userPayload)
                registerUser(userPayload).then((res) => {
                    res.ok ? toastNotification("Staff Profile create Successfully", "success") : toastNotification("Error occured while creating profile!", "error")
                    // navigate('/login')
                }).catch((err) => {
                    err.ok === false ? toastNotification("Error occured!", "error") : null
                    console.log("error while staff signup", err.error)
                })
            } else {
                setConfirmPassword({ ...confirmPassword, isError: true, error: "Passwords are not matching" })
                toastNotification("Passwords are not matching", "error")
            }
        } else {
            toastNotification("Please fill all the requeid field", "warn")
        }
    }

    return (
        <div className='body-content-container'>
            <div className="container-border p-5">
                <h3 className="pb-3">Staff Sign-up</h3>
                <hr></hr>
                <div className='mt-5'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"
                                        value={fullname.value}
                                        onChange={(e) => { setFullname({ ...fullname, value: e.target.value }) }}
                                        required
                                    />
                                    {fullname.isError && <small className='text-danger'>{fullname.error}</small>}
                                </Col>

                            </Row>


                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email.value}
                                onChange={(e) => { setEmail({ ...email, value: e.target.value }) }}
                                required
                            />
                            {email.isError && <small className='text-danger'>{email.error}</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ContactNumber"
                                        value={contactNo.value}
                                        onChange={(e) => { setContactNo({ ...contactNo, value: e.target.value }) }}
                                        required
                                    />
                                    {contactNo.isError && <small className='text-danger'>{contactNo.error}</small>}
                                </Col>
                                <Col>
                                    <Form.Label>Role</Form.Label>
                                    <select class="form-select form-control"
                                        name="role"
                                        id="role"
                                        required
                                        value={role.value}
                                        onChange={(e) => {
                                            setRole({ ...role, value: e.target.value });
                                        }}
                                    >
                                        <option  >Choose</option>
                                        <option id="Admin" >Admin</option>
                                        <option id="Supervisor">Supervisor</option>
                                        <option id="Co-Supervisor">Co-Supervisor</option>
                                        <option id="Panel" >Panel</option>

                                    </select>
                                    {role.isError && <small className='text-danger'>{role.error}</small>}

                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password.value}
                                        onChange={(e) => { setPassword({ ...password, value: e.target.value }) }}
                                        required
                                    />
                                    {password.isError && <small className='text-danger'>{password.error}</small>}
                                </Col>
                                <Col>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword.value}
                                        onChange={(e) => { setConfirmPassword({ ...confirmPassword, value: e.target.value }) }}
                                        required
                                    />
                                    {confirmPassword.isError && <small className='text-danger'>{confirmPassword.error}</small>}
                                </Col>
                            </Row>


                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Department"
                                        value={department.value}
                                        onChange={(e) => { setDepartment({ ...department, value: e.target.value }) }}
                                        required />
                                    {department.isError && <small className='text-danger'>{department.error}</small>}
                                </Col>
                                <Col>
                                    <Form.Label>Field of study</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Field of Interest"
                                        value={field.value}
                                        onChange={(e) => { setField({ ...field, value: e.target.value }) }}
                                        required
                                    />
                                    {field.isError && <small className='text-danger'>{field.error}</small>}

                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
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

export default StaffSignup