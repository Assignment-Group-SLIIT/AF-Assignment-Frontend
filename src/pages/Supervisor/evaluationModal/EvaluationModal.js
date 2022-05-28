import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import { GetSubmissionType } from "../../../services/submission.service";

const EvaluationModal = (props) => {

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
                <Alert className="mb-2 ml-1 p-2 float-left" variant={props.data.evaluationStatus === 'pending' ? 'warning' : props.data.evaluationStatus === 'evaluvated' ? 'success' : null} >
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
                                    <strong>{props.data.groupId}</strong>
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
        </div>
    )
}

export default EvaluationModal