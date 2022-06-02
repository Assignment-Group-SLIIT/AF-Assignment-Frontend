import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import Button from '@material-ui/core/Button';

const SingleGroupRequestModal = (props) => {
    console.log("props", props);
    const [data, setData] = useState(props.data);
    return (
        <div>
            <Modal.Header>
                <Modal.Title> Initial Group Request </Modal.Title>
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
                                        Group ID
                                    </th>
                                    <th>
                                        {data.groupId}
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Leader email
                                    </th>
                                    <th>
                                        {data.email}
                                    </th>

                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Research Topic
                                    </th>
                                    <th>
                                        {data.researchTopic}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Research Field
                                    </th>
                                    <th>
                                        {data.researchField}
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

export default SingleGroupRequestModal