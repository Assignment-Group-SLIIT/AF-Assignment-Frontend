import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


function ViewUser(user) {

    console.log("model openingggg", user)

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
                                    {/* <td class="text-left">{rental.data.id}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email Address
                                    </th>
                                    {/* <td class="text-left">{rental.data.from}</td> */}
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Contact No
                                    </th>
                                    {/* <td class="text-left">{rental.data.to}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Specialization
                                    </th>
                                    {/* <td class="text-left">{rental.data.status}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Field Of Interest
                                    </th>
                                    {/* <td class="text-left">{rental.data.payment}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Department
                                    </th>
                                    {/* <td class="text-left">{rental.data.vehicleType + " " + rental.data.model}</td> */}
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Role
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

export default ViewUser
