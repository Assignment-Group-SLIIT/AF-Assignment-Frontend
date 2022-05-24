import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { RippleButton } from '../../components/RippleButton'
import { registerUser } from '../../services/user.service';
import { toastNotification } from '../../components/toastNotification';

const StaffSignup = () => {

    let history = useNavigate();

    const [fullname , setFullname] = useState("");
    const [email , setEmail] =useState("");
    const [contactNo , setContactNo] = useState("");
    const [role , setRole] = useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [department , setDepartment] = useState("");
    const [field , setField] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            const userPayload = {
                fullname,
                email,
                contactNo,
                role,
                password,
                department,
                field
            }
            console.log("staff data" , userPayload);

            registerUser(userPayload).then((response) => {
                console.log("response", response);
                if(response.ok) {
                    const message = "User profile created successfully!!!";
                    const status = "success";
                    toastNotification(message , status);
                    history('/login')
                  
                }else{
                    const message = "Something went wrong";
                    const status = "error";
                    toastNotification(message , status);
                }

            }).catch((error) => {
                const message = "Something went wrong";
                const status = "error";
                toastNotification(message , status);
            })
        }else{
            const message = "Password did not match";
            const status = "error";
            toastNotification(message , status);
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
                                        value={fullname}
                                        onChange={(e) => {setFullname(e.target.value)}}
                                        required
                                        />
                                </Col>

                            </Row>


                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                                required
                                /> 
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="ContactNumber"
                                        value={contactNo}
                                        onChange={(e) => {setContactNo(e.target.value)}}
                                        required
                                        />
                                </Col>
                                <Col>
                                    <Form.Label>Role</Form.Label>
                                    <select class="form-select form-control"
                                        name="role" 
                                        id="role" 
                                        required
                                        value={role}
                                        onChange={(e) => {setRole(e.target.value);
                                    }}
                                    >
                                        <option  >Choose</option>
                                        <option id="admin" >Admin</option>
                                        <option id="supervisor">Supervisor</option>
                                        <option id="cosupervisor" >Co-Supervisor</option>
                                       
                                    </select>
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
                                        value={password}
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        required
                                        />
                                </Col>
                                <Col>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                                        required
                                        />
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
                                        value={department}
                                        onChange={(e) => {setDepartment(e.target.value)}}
                                        required />
                                </Col>
                                <Col>
                                    <Form.Label>Field of study</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Field of study"
                                        value={field}
                                        onChange={(e) => {setField(e.target.value)}}
                                        required
                                        />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I accepts the terms and conditions" />
                        </Form.Group>
                        <RippleButton className="ripple-button" text="submit" onClick={(e) => { onSubmit(e) }} />
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default StaffSignup