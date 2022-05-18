import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


function ResearchGroup(group) {

    console.log("model openingggg", group)

    return (
        <div>
            <Modal.Header>

                <Modal.Title>Research Group</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={group.onHide}></button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Group ID
                                    </th>
                                    {/* <td class="text-left">{rental.data.id}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Group Name
                                    </th>
                                    {/* <td class="text-left">{rental.data.from}</td> */}
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Research Field
                                    </th>
                                    {/* <td class="text-left">{rental.data.to}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Research Topic
                                    </th>
                                    {/* <td class="text-left">{rental.data.status}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Supervisor
                                    </th>
                                    {/* <td class="text-left">{rental.data.payment}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Co-Supervisor
                                    </th>
                                    {/* <td class="text-left">{rental.data.vehicleType + " " + rental.data.model}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Allocated Panel
                                    </th>
                                    {/* <td class="text-left">{rental.data.pickAddress}</td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}

export default ResearchGroup
