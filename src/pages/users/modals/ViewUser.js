import React from "react";
import { Modal } from "react-bootstrap";
import '../../../styles/usersList.styles.scss'
import { PanelList } from "../../panel/PanelMembersList";

function ViewUser(user) {

    // console.log("model openingggg", user)

    return (
        <div>
            <Modal.Header>

                <Modal.Title>User Details</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={user.onHide}></button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <table class="table table-striped table-light ">
                            <tbody>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Full Name
                                    </th>
                                    {user.data.fullname}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email Address
                                    </th>
                                    {user.data.email}
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Contact No
                                    </th>
                                    {user.data.contactNo}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Specialization
                                    </th>
                                    {/* {user.data.specilization} */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Field Of Interest
                                    </th>
                                    {user.data.field}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Department
                                    </th>
                                    {user.data.department}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Role
                                    </th>
                                    {user.data.role}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}

export default ViewUser
