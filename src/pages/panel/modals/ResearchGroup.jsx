import React from "react";
import { Modal } from "react-bootstrap";
import Tables from "../../../components/Table";
import "../../../styles/usersList.styles.scss"


function ResearchGroup(group) {

    // console.log("model openingggg", group)

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
                                    <th class="text-left" scope="row">
                                        {group.data.groupId}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Leader Name
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data?.student?.leader?.name}
                                    </th>

                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Research Field
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data.researchField}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Research Topic
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data.researchTopic}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Supervisor
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data.supervisor}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Co-Supervisor
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data.coSupervisor}
                                    </th>

                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Allocated Panel
                                    </th>
                                    <th class="text-left" scope="row">
                                        {group.data.panelNo}
                                    </th>

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
