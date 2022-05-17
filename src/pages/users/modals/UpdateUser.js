import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
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
                        <form>
                            <div class="form-group row">
                                <label for="fName" className="col-sm-2 col-form-label">First Name</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="fName" />
                                </div>
                                <label for="lName" className="col-sm-2 col-form-label">Last Name</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="lName" />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div class="form-group row">
                                <label for="email" className="col-sm-2 col-form-label">Email Address</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div class="form-group row">
                                <label for="contactNo" className="col-sm-2 col-form-label">Telephone</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="contactNo" />
                                </div>
                                <label for="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-4">
                                    <input type="password" className="form-control" id="password" />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div class="form-group row">
                                <label for="degree" className="col-sm-2 col-form-label">Degree</label>
                                <div className="col-sm-4">

                                    <select class="form-select" className="form-control" name="degree" id="degree">
                                        <option  >Degree</option>
                                        <option id="SE" >Software Engineering</option>
                                        <option id="DS" >Data Science</option>
                                        <option id="ISE" >ISE</option>
                                        <option id="IT" >Information Technology</option>
                                        <option id="CS" >Cyber Security</option>
                                        <option id="CN" >Networking</option>
                                    </select>
                                </div>
                                <label for="field" className="col-sm-2 col-form-label">F O I</label>
                                <div className="col-sm-4">
                                    <select class="form-select" className="form-control" name="field" id="field">
                                        <option  >Field Of Interest</option>
                                        <option id="Medical" >Medical</option>
                                        <option id="Technology" >Technology</option>
                                        <option id="Robotics" >Robotics</option>
                                        <option id="ML" >Machine Learning</option>
                                        <option id="FS" >Food Science</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <div class="form-group row">
                                <label for="role" className="col-sm-2 col-form-label">Role</label>
                                <div className="col-sm-4">

                                    <select class="form-select" className="form-control" name="role" id="role">
                                        <option  >Role</option>
                                        <option id="Student" >Student</option>
                                        <option id="Supervisor" >Supervisor</option>
                                        <option id="CoSupervisor" >Co-Supervisor</option>
                                        <option id="Panel" >Panel Member</option>
                                    </select>
                                </div>
                                <label for="field" className="col-sm-2 col-form-label">Department</label>
                                <div className="col-sm-4">
                                    <select class="form-select" className="form-control" name="field" id="field">
                                        <option  >Department</option>
                                        <option id="Computing" >Computing</option>
                                        <option id="Business" >Business</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton />
                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton onClick={rental.onHide} />

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