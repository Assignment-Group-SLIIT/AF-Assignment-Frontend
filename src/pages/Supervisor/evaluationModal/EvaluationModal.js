import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import { GetSubmissionType } from "../../../services/submission.service";
import { UpdateMarks } from "../../../services/assignment.service";

const EvaluationModal = (props) => {

    const [markingSchema, setMarkingSchema] = useState("");
    const [marks, setMarks] = useState(props.data.marks);

    const getAssignemnetType = async () => {
        let response = await GetSubmissionType(props.data.submissionType);
        console.log("res>>>", response)
        if (response) {
            setMarkingSchema(response.data.markingSchema)
        }
    }

    const UpdateNewMarks = async (e) => {
        let payload = {
            groupId: props.data.groupId,
            marks: marks
        }
        let response = await UpdateMarks(props.data.submissionId, payload);
        console.log("res>>> 122222", response)

    }

    useEffect(() => {
        getAssignemnetType()
    }, [])

    return (
        <div>
            <Modal.Header>
                <Modal.Title>Add Evaluation Marks
                </Modal.Title>


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
                                    <label class="update-font" for="group">Group Details</label>
                                </div>
                            </div>
                            <br></br>


                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="groupID">Submission ID</label>
                                </div>
                                <div class="col-sm">
                                    <strong>{props.data.submissionId}</strong>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Group ID</label>
                                </div>
                                <div class="col-sm">
                                    <strong>{props.data.groupId}</strong>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Submission Type</label>
                                </div>
                                <div class="col-sm">
                                    <strong>{props.data.submissionType}</strong>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Status</label>
                                </div>
                                <div class="col-sm">
                                    <Alert className="mb-1 1 p-1 float-left" variant={props.data.evaluationStatus === 'Pending' ? 'warning' : props.data.evaluationStatus === 'Completed' ? 'success' : null} >
                                        {props.data.evaluationStatus}
                                    </Alert>
                                </div>
                            </div>
                            <br></br>

                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Document</label>
                                </div>
                                <div class="col-sm">
                                    {/* <strong>{props.data.document}</strong> */}
                                    <strong><span className="viewAssessmentLink" onClick={(e) => window.open(props.data.document)} >View Document</span></strong>
                                </div>
                            </div>
                            <br></br>


                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Marking Schema</label>
                                </div>
                                <div class="col-sm">
                                    <strong><span className="viewAssessmentLink" onClick={(e) => window.open(markingSchema)} >View Marking Schema</span></strong>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-4">
                                    <label className="form-pad" for="submissionID">Evaluation Marks</label>
                                </div>
                                <div class="col-sm">
                                    {/* {props.data.marks == 0 && props.data.evaluationStatus == 'Pending' ? <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={marks} onChange={(e) => { setMarks(e.target.value) }} /> : props.data.marks == 0 && props.data.evaluationStatus == 'Completed' ? <strong>{props.data.marks}</strong> : null} */}
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={marks} onChange={(e) => { setMarks(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>


                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { UpdateNewMarks(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    {/* <RippleButton className="ripple-button-warning" text="Cancel" onClick={user.onHide} /> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div>
    )
}

export default EvaluationModal