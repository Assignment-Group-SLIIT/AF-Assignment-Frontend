import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toastNotification from "../../../components/toastNotification";
import { getAllUsers } from "../../../services/user.service";
import '../../../styles/usersList.styles.scss'


function ViewPanelMember(user) {

    // console.log("model openingggg", user.data)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContactNo] = useState("")
    const [field, setField] = useState("")
    const [department, setDepartment] = useState("")
    const [members, setMembers] = useState([]);
    const [state, setState] = useState(false)


    useEffect(() => {
        getAllUsers().then(res => {
            if (res.ok) {
                // console.log(res.data)
                setMembers(res.data.filter(member => {
                    return (
                        member.fullname == user.data && member.role == 'Panel'
                    )
                }))
                setState(true)

                // toastNotification("Successfully retrieved list", "success")
            } else {
                toastNotification("Error  on retrieving", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })
    }, [])

    useEffect(() => {
        setDetails();
    }, [state])

    const setDetails = () => {
        setName(members[0]?.fullname)
        setEmail(members[0]?.email)
        setContactNo(members[0]?.contactNo)
        setField(members[0]?.field)
        setDepartment(members[0]?.department)
    }


    return (
        <div>
            <Modal.Header>

                <Modal.Title>Panel Member</Modal.Title>
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
                                    <th>
                                        {name}
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Email Address
                                    </th>
                                    <th>
                                        {email}
                                    </th>
                                </tr><tr>
                                    <th class="text-left" scope="row">
                                        Contact No
                                    </th>
                                    <th>
                                        {contactNo}
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Field Of Interest
                                    </th>
                                    <th>
                                        {field}
                                    </th>
                                </tr>
                                <tr>
                                    <th class="text-left" scope="row">
                                        Department
                                    </th>
                                    <th>
                                        {department}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )
}

export default ViewPanelMember