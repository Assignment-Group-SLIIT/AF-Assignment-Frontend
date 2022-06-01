import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import Button from '@material-ui/core/Button';

const ViewSubmissionModal = (props) => {
    console.log("props", props);
    const [data, setData] = useState(props.data);
    return (
        <div>
            <Modal.Header>
                <Modal.Title> Submissions Details</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={() => props.close()}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >

                            <br></br>
                            <div class="row">

                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Submission ID</label>
                                </div>
                                <div class="col-6">
                                    <p>{data.submissionId}</p>
                                </div>


                            </div>
                            <br></br>
                            <div class="row">

                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Submission Type</label>
                                </div>
                                <div class="col-6">
                                    <p>{data.submissionType}</p>
                                </div>


                            </div>
                            <br></br>
                            <div class="row">

                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Start Date</label>
                                </div>
                                <div class="col-6">
                                    <p>{data.startDate}</p>
                                </div>


                            </div>
                            <br></br>
                            <div class="row">

                                <div class="col-6">
                                    <label className="form-pad" for="groupID">End Date</label>
                                </div>
                                <div class="col-6">
                                    <p>{data.endDate}</p>
                                </div>


                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad mr-5" for="marks">Marking Schema</label>


                                </div>
                                <div class="col-6">
                                    <strong><span className="viewAssessmentLink" onClick={(e) => window.open(data.markingSchema)} >View Document</span></strong>
                                </div>

                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col-6 py-3 text-center">
                                    {/* <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} /> */}

                                </div>
                                <div className="col pr-3 mr-6 text-right">
                                    <RippleButton className="ripple-button-warning" text="Close"
                                        onClick={() => props.close()}
                                    />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default ViewSubmissionModal