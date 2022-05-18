import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";

function AddMarks(user) {

    const [groupID, setGroupID] = useState("");
    const [evaluationStatus, setEvaluationStatus] = useState("");
    const [marks, setMarks] = useState("");
    

    return(
        <div>
            <Modal.Header>
                <Modal.Title>Add Evaluation Marks</Modal.Title>
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
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={groupID} onChange={(e) => { setGroupID(e.target.value) }} />
                                </div>
                                
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="status">Evaluation Status</label>
                                    <select class="form-select" className="form-control" name="status" id="status" value={evaluationStatus} onChange={(e) => { setEvaluationStatus(e.target.value) }}>
                                        <option  >Select Status</option>
                                        <option id="1" >Accept</option>
                                        <option id="2" >Reject</option>
                                       
                                    </select>
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="marks">Evaluation Marks</label>
                                    <input type="text" class="form-control" id="marks" placeholder="marks" value={marks} onChange={(e) => { setMarks(e.target.value) }} />
                                </div>
                               
                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} />

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
 export default AddMarks;