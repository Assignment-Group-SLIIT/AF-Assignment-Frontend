import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormSection } from "../../../components/FormSection";
import { RippleButton } from "../../../components/RippleButton";
import toastNotification from "../../../components/toastNotification";
import { updateUser } from "../../../services/user.service";
import '../../../styles/usersList.styles.scss'

function UpdateUser(user) {
    console.log("data", user.data.department)

    let navigate = useNavigate();

    const [fName, setFname] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [studentId , setStudentId] = useState("");
    const [groupId , setGroupId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [degree, setDegree] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [field, setField] = useState("");

    const setUserList = () => {
        setFname(user.data.fullname);
        setContactNo(user.data.contactNo);
        setStudentId(user.data.studentID);
        setGroupId(user.data.groupId);
        setPassword(user.data.password);
        setEmail(user.data.email);
        setDegree(user.data.degree);
        setDepartment(user.data.department);
        setRole(user.data.role);
        setField(user.data.field)
    }

    useEffect(() => {
        setUserList()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("email" , email)
        const updateUserPayload = {
            fName,
            contactNo,
            studentId,
            groupId,
            password,
            email,
            degree,
            department,
            role,
            field

        }
        updateUser(email , updateUserPayload).then((response) =>{ 
            response.ok ? toastNotification("Success!", "success") : toastNotification("Error occured!", "error")
            window.location.reload(false);
        }).catch((err) => {
            err.ok === false ? toastNotification("Error occured!", "error") : null
        })
    }

    return (

        <div>
            <Modal.Header>
                <Modal.Title>Update User Details</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={user.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <div class="form-row">
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="group">Personal Details</label>
                                </div> */}
                                <FormSection headline={'Personal Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                            
                                <div class="col-6">
                                    <label className="form-pad" for="lName">Last Name</label>
                                    <input type="text" class="form-control" id="lName" placeholder="Last Name" value={fName} onChange={(e) => { setFname(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>

                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="contactNo">Contact Number</label>
                                    <input type="number" class="form-control" id="contactNo" placeholder="Contact number" value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="password">Password</label>
                                    <input type="text" class="form-control" id="password" placeholder="********" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="email">Email Address</label>
                                    <input type="email" class="form-control" id="email" placeholder="abc@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="staff">Academic Details</label>
                                </div> */}
                                <FormSection headline={'Academic Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="degree">Degree</label>
                                    <select class="form-select" className="form-control" name="degree" id="degree" value={user.data.degree} onChange={(e) => { setDegree(e.target.value) }}>
                                        <option  >Choose Degree</option>
                                        <option id="SE" >Software Engineering</option>
                                        <option id="DS" >Data Science</option>
                                        <option id="ISE" >ISE</option>
                                        <option id="IT" >Information Technology</option>
                                        <option id="CS" >Cyber Security</option>
                                        <option id="CN" >Networking</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="department">Department</label>
                                    <select class="form-select" className="form-control" name="department" id="department" value={department} onChange={(e) => { setDepartment(e.target.value) }}>
                                        <option  >Choose Department</option>
                                        <option id="Computing" >Computing</option>
                                        <option id="Business" >Business</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>

                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="role">Role</label>
                                    <select class="form-select" className="form-control" name="role" id="role" value={role} onChange={(e) => { setRole(e.target.value) }}>
                                        <option  >Choose Role</option>
                                        <option id="Student" >Student</option>
                                        <option id="Admin" >Admin</option>
                                        <option id="Supervisor" >Supervisor</option>
                                        <option id="Co-Supervisor" >Co-Supervisor</option>
                                        <option id="Panel" >Panel</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="field">Field Of Interest</label>
                                    <select class="form-select" className="form-control" name="field" id="field" value={field} onChange={(e) => { setField(e.target.value) }}>
                                        <option  >Choose Fieldt</option>
                                        <option id="Medical" >Medical</option>
                                        <option id="Technology" >Technology</option>
                                        <option id="Robotics" >Robotics</option>
                                        <option id="ML" >Machine Learning</option>
                                        <option id="FS" >Food Science</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>


                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { onSubmit(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={user.onHide} />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body >
        </div >
    )
}

export default UpdateUser