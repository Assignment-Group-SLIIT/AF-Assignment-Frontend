import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import toastNotification from "../../../components/toastNotification";
import { updateAssignment } from "../../../services/assignment.service";

function AddMarks(evaluate) {

    const [groupID, setGroupID] = useState("");
    const [evaluationStatus, setEvaluationStatus] = useState("");
    const [marks, setMarks] = useState("");

    useEffect(() => {
        setGroupID(evaluate.data.groupId)
        setEvaluationStatus(evaluate.data.evaluationStatus)
        setMarks(evaluate.data.marks)

    }, [])

    const addEvalMarks = (e) => {

        e.preventDefault();
        console.log(e)

        if (groupID == "" || evaluationStatus == "" || marks == "") {
            toastNotification("Please make sure you fill all fields")

        } else {
            const presentaionEvaluate = {
                groupId: groupID,
                submissionId: evaluate?.data?.submissionId,
                submissionType: evaluate?.data?.submissionType,
                document: evaluate?.data?.document,
                evaluationStatus: evaluationStatus,
                marks: marks,
            }
            console.log(presentaionEvaluate)

            updateAssignment(evaluate.data.submissionId, presentaionEvaluate).then(res => {
                if (res.ok) {
                    toastNotification("Updated the presentation evaluation", "success")
                    setTimeout(function () {
                        refreshPage();
                    }, 1000);
                } else {
                    toastNotification("Error with update", "warn")
                }
            }).catch(err => {
                toastNotification("Error", "error")
            })
        }



    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div>
            <Modal.Header>
                <Modal.Title>Add Evaluation Marks</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={evaluate.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >

                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <label type="text" class="form-control" id="groupID"><strong>{groupID}</strong></label>
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="marks">Evaluation Marks</label>
                                    <input type="text" class="form-control" id="marks" placeholder="marks" value={marks} onChange={(e) => { setMarks(e.target.value) }} />
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="status">Evaluation Status</label>
                                    <select class="form-select" className="form-control" name="status" id="status" value={evaluationStatus} onChange={(e) => { setEvaluationStatus(e.target.value) }}>
                                        <option  >Select Status</option>
                                        <option id="Pending" >Pending</option>
                                        <option id="Completed" >Completed</option>

                                    </select>
                                </div>

                            </div>
                            <br></br>

                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Update" onClick={(e) => { addEvalMarks(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={evaluate.onHide} />

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