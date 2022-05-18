import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";

function UpdateUser(user) {



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
                                <div class="col-md-3">
                                    <label class="update-font" for="group">Personal Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label for="fName">First Name</label>
                                    <input type="text" class="form-control" id="fName" placeholder="First Name" />
                                </div>
                                <div class="col-6">
                                    <label for="lName">Last Name</label>
                                    <input type="text" class="form-control" id="lName" placeholder="Last Name" />
                                </div>
                            </div>
                            <br></br>

                            <div class="row">
                                <div class="col-6">
                                    <label for="contactNo">Contact Number</label>
                                    <input type="number" class="form-control" id="contactNo" placeholder="Contact number" />
                                </div>
                                <div class="col-6">
                                    <label for="password">Password</label>
                                    <input type="text" class="form-control" id="password" placeholder="********" />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label for="email">Email Address</label>
                                    <input type="email" class="form-control" id="email" placeholder="abc@gmail.com" />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="staff">Academic Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label for="degree">Degree</label>
                                    <select class="form-select" className="form-control" name="degree" id="degree">
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
                                    <label for="department">Department</label>
                                    <select class="form-select" className="form-control" name="department" id="department">
                                        <option  >Choose Department</option>
                                        <option id="Computing" >Computing</option>
                                        <option id="Business" >Business</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>

                            <div class="row">
                                <div class="col-6">
                                    <label for="role">Role</label>
                                    <select class="form-select" className="form-control" name="role" id="role">
                                        <option  >Choose Role</option>
                                        <option id="Student" >Student</option>
                                        <option id="Supervisor" >Supervisor</option>
                                        <option id="CoSupervisor" >Co-Supervisor</option>
                                        <option id="Panel" >Panel Member</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <label for="field">Field Of Interest</label>
                                    <select class="form-select" className="form-control" name="field" id="field">
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
                                    <RippleButton className="ripple-button" text="submit" onClick={() => { onSubmit() }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="cancel" onClick={user.onHide} />

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