import React from "react";
import { Modal } from "react-bootstrap";
import '../../../styles/usersList.styles.scss'

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
                                    <td class="text-left">{user.data.fullname}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email Address
                                    </th>
                                    <td class="text-left">{user.data.email}</td>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Contact No
                                    </th>
                                    <td class="text-left">{user.data.contactNo}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Specialization
                                    </th>
                                    <td class="text-left">{user.data.degree}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Field Of Interest
                                    </th>
                                    <td class="text-left">{user.data.field}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Department
                                    </th>
                                    <td class="text-left">{user.data.department}</td>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Role
                                    </th>
                                    <td class="text-left">{user.data.role}</td>
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
