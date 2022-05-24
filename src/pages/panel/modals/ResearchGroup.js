import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Tables from "../../../components/Table";
import "../../../styles/usersList.styles.scss"


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
                                    {group.data.groupId}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Leader Name
                                    </th>
                                    {group.data?.student?.leader?.name}
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Research Field
                                    </th>
                                    {group.data.researchField}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Research Topic
                                    </th>
                                    {group.data.researchTopic}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Supervisor
                                    </th>
                                    {group.data.supervisor}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Co-Supervisor
                                    </th>
                                    {group.data.coSupervisor}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Allocated Panel
                                    </th>
                                    {group.data.panelNo}
                                </tr>

                            </tbody>
                        </table>
                        <Tables members={group.data} />

                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}




export default ResearchGroup
