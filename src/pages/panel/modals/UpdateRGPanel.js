import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";

function UpdateRGPanel(user) {

    return (

        <div>
            <Modal.Header>
                <Modal.Title>Update Panel Allocation</Modal.Title>
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
                                    <label class="update-font" for="group">Group Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label for="groupID">Group ID</label>
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" />
                                </div>
                                <div class="col-6">
                                    <label for="groupName">Group Name</label>
                                    <input type="text" class="form-control" id="groupName" placeholder="Group Name" />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="research">Research Details :</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label for="researchTopic">Research Topic</label>
                                    <input type="text" class="form-control" id="researchTopic" placeholder="Topic" />
                                </div>
                                <div class="col-6">
                                    <label for="researchField">Research Field</label>
                                    <input type="text" class="form-control" id="researchField" placeholder="Field" />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="staff">Staff Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label for="supervisor">Supervisor</label>
                                    <input type="text" class="form-control" id="supervisor" placeholder="Supervisor" />
                                </div>
                                <div class="col-6">
                                    <label for="cosupervisor">Co-Supervisor</label>
                                    <input type="text" class="form-control" id="cosupervisor" placeholder="Co-Supervisor" />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="customer">Panel Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label for="panel">Panel</label>
                                    <select class="form-select" className="form-control" name="panel" id="panel">
                                        <option  >Select Panel</option>
                                        <option id="1" >Panel One</option>
                                        <option id="2" >Panel Two</option>
                                        <option id="3" >Panel Three</option>
                                        <option id="4" >Panel Four</option>
                                        <option id="5" >Panel Five</option>
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

export default UpdateRGPanel