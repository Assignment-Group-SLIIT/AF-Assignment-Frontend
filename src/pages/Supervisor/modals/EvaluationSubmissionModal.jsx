import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import { GetSubmissionType } from "../../../services/submission.service";

const EvaluationSubmissionModal = (props) => {
    // console.log("users", props)
    const [groupID, setGroupID] = useState("");
    const [submissionID, setsubmissionID] = useState("");
    const [submissionType, setSubmissionType] = useState("");
    const [document, setDocument] = useState("");
    const [marks, setMarks] = useState("");

    const [markingSchema, setMarkingSchema] = useState("");

    const getAssignemnetType = async () => {
        let response = await GetSubmissionType(props.data.submissionType);
        console.log("res>>>", response)
        if (response) {
            setMarkingSchema(response.data.markingSchema)
        }
    }

    useEffect(() => {
        getAssignemnetType()
    }, [])


    return (
        <div>
            <Modal.Header>
                <Modal.Title>Add Evaluation Marks
                </Modal.Title>
                <Alert className="mb-2 ml-1 p-1 float-left" variant={props.data.evaluationStatus === 'pending' ? 'warning' : props.data.evaluationStatus === 'evaluvated' ? 'success' : null} >
                    {props.data.evaluationStatus}
                </Alert>

                <div>
                    <button className="btn btn-close" onClick={props.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="group">Group Detls</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Submission ID</label>
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={props.data.submissionId} onChange={(e) => { setGroupID(e.target.value) }} />
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-sm">
                                    <label className="form-pad" for="groupID">Submission ID</label>
                                </div>
                                <div class="col-sm">
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={props.data.submissionId} onChange={(e) => { setGroupID(e.target.value) }} />
                                </div>
                            </div>



                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="submissionID">Group ID</label>
                                    <input type="text" class="form-control" id="submissionID" placeholder="Group ID" value={props.data.groupId} onChange={(e) => { setsubmissionID(e.target.value) }} />
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="stype">Submission Type</label>
                                    <label className="form-pad" for="stype">{props.data.submissionType}</label>
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="document">Document</label>
                                    <label className="form-pad" for="stype">{props.data.document}</label>
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="marks">Evaluation Marks</label>
                                    <label className="form-pad" for="stype">{props.data.marks}</label>
                                </div>

                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="marks">Marking Schema</label>
                                    <label className="form-pad" for="stype">{markingSchema}</label>
                                </div>

                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} />

                                </div>
                                <div className="col py-3 text-center">
                                    {/* <RippleButton className="ripple-button-warning" text="Cancel" onClick={user.onHide} /> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )

}
export default EvaluationSubmissionModal;