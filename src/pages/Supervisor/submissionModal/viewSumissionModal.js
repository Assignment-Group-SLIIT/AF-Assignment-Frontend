import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

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
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Submission ID
                                    </th>
                                    <th>
                                        {data.submissionId}
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Submission Type
                                    </th>
                                    <th>
                                        {data.submissionType}
                                    </th>

                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Start Date
                                    </th>
                                    <th>
                                        {data.submissionType}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        End Date
                                    </th>
                                    <th>
                                        {data.endDate}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Marking Schema
                                    </th>
                                    <th>
                                        <strong><span className="viewAssessmentLink" onClick={(e) => window.open(data.markingSchema)} >View Document</span></strong>
                                    </th>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body >
        </div >
    )
}

export default ViewSubmissionModal