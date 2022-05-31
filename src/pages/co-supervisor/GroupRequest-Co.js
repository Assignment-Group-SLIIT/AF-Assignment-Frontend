import React, { useState, useEffect } from "react";
import { RippleButton } from '../../components/RippleButton'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import { deleteRequestTopicsCoSupervisors, getAllRequestTopicsCoSupervisors } from "../../services/cosupervisorRequests.service";
import { getOneGroup, sendAcceptRejectEmail, updateGroup } from "../../services/group.service";
import { updateCoSupervisor } from "../../services/user.service";
import toastNotification from "../../components/toastNotification";

export default GroupRequest = () => {

    const [groupList, setGroupList] = useState([]);
    const [query, setQuery] = useState("")
    const [coSupervisorName, setCoSupervisorName] = useState('')

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalDataAccept, setModalDataAccept] = useState([]);
    const [modalAcceptConfirm, setModalAcceptConfirm] = useState(false);

    useEffect(() => {
        getAllRequestTopicsCoSupervisors().then((response) => {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setCoSupervisorName(user?.fullname)
            setGroupList(response.data.data.filter(ele => {
                return ele.coSupervisor == user?.fullname
            }))
        }).catch((error) => {
            console.log("error", error)
        })
    }, [])

    const acceptsRequest = (grouplist) => {
        setModalDataAccept(grouplist)
        handleViewOnClick()

    }

    const handleViewOnClick = () => {
        setModalAcceptConfirm(true)
    }

    const removesRequest = (grouplist) => {
        setModalDataDelete(grouplist)
        handleViewOnClickDelete()
    }

    const handleViewOnClickDelete = () => {
        setModalDeleteConfirm(true)
    }

    const rejectRequest = (grouplist) => {
        console.log(grouplist.groupId)

        getOneGroup(grouplist.groupId).then(respone => {
            console.log(respone)
            if (respone.ok) {
                deleteRequestTopicsCoSupervisors(grouplist.groupId).then(res => {
                    if (res.ok) {
                        const emailBody = {
                            email: respone.data.student?.leader?.email,
                            name: respone.data.student?.leader?.name,
                            message: "Sorry !!" + coSupervisorName + " has rejected your request of being the co-supervisor"
                        }
                        sendAcceptRejectEmail(emailBody)
                        toastNotification("Rejected the request", "success")
                        refreshPage()
                    } else {
                        toastNotification("Could not rejected the request", "warn")
                    }
                }).catch(err => {
                    console.error(err)
                })
            }
        })

    }

    const acceptRequest = (grouplist) => {

        getOneGroup(grouplist.groupId).then(res => {
            if (res.ok) {
                const updatedGroup = {
                    groupId: res.data?.groupId,
                    student: res.data?.student,
                    researchTopic: res.data?.researchTopic,
                    researchField: res.data?.researchField,
                    supervisor: res.data?.supervisor,
                    coSupervisor: coSupervisorName,
                    panelNo: res.data?.panelNo
                }

                updateGroup(grouplist.groupId, updatedGroup).then(res2 => {
                    if (res2.ok) {
                        updateCoSupervisor(res.data?.student?.leader?.name, coSupervisorName).then(res3 => {
                            console.log("updated1", res3)
                            if (res3.ok) {
                                updateCoSupervisor(res.data?.student?.member01?.name, coSupervisorName).then(res4 => {
                                    console.log("updated2", res4)
                                    if (res4.ok) {
                                        updateCoSupervisor(res.data?.student?.member02?.name, coSupervisorName).then(res5 => {
                                            console.log("updated3", res5)
                                            if (res.ok) {
                                                updateCoSupervisor(res.data?.student?.member03?.name, coSupervisorName).then(res6 => {
                                                    console.log("updated6", res6)
                                                    if (res6.ok) {
                                                        const emailBody = {
                                                            email: res.data.student?.leader?.email,
                                                            name: res.data.student?.leader?.name,
                                                            message: "Congratualation !!" + coSupervisorName + " has accepted your request to be your co-supervisor"
                                                        }

                                                        sendAcceptRejectEmail(emailBody)
                                                        toastNotification("Successfully accepted a teams request", "success")
                                                        refreshPage()
                                                    } else {
                                                        toastNotification("Could not accept the request", "warn")
                                                    }
                                                }).catch(err => {
                                                    toastNotification("Error", "error")
                                                })
                                            }
                                        }).catch(err => { console.log(err) })
                                    }
                                }).catch(err => { console.log(err) })
                            }
                        }).catch(err => { console.error(err) })
                    }
                }).catch(err => { console.error(err) })
            }
        }).catch(err => { console.error(err) })

    }

    function refreshPage() {
        window.location.reload();
    }

    return (

        <div className='body-content-container'>
            <div className="container-border">


                <h3> Initial Group Request For Co-Supervisor</h3>
                <br /> <br />
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="search-box">
                            <div className="searchbar">
                                <form
                                // onSubmit={(e) => searchRooms(e)}
                                >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        onChange={event => setQuery(event.target.value)}
                                        require />
                                    <button className="btn search_icon" type="submit" id="submit" name="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <table className='table table-hover'>
                    <thead class="thead-dark">
                        <tr>
                            <th className='text'>Group ID</th>
                            <th className='text'>Leader Email</th>
                            <th className='text'>Reserch Topic</th>
                            <th className='text'>Research Field</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupList.filter(grouplist => {
                            if (query === '') {
                                return grouplist;
                            } else if (grouplist.groupId.toLowerCase().includes(query.toLowerCase()) ||
                                grouplist.email.toLowerCase().includes(query.toLowerCase()) ||
                                grouplist.researchTopic.toLowerCase().includes(query.toLowerCase()) ||
                                grouplist.researchField.toLowerCase().includes(query.toLowerCase())) {
                                return grouplist;
                            }
                        }).map((grouplist, index) => {
                            return (
                                <tr key={index}>
                                    <td>{grouplist.groupId}</td>
                                    <td>{grouplist.email}</td>
                                    <td>{grouplist.researchTopic}</td>
                                    <td>{grouplist.researchField}</td>
                                    <td className='text'>
                                        <RippleButton className="ripple-button-table" text="Accept" onClick={() => acceptsRequest(grouplist)} />
                                        <RippleButton className="ripple-button-danger-table" text="Reject" onClick={() => removesRequest(grouplist)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>Confirm Reject the Research Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p></p>
                        <p><strong>Are you sure you want to reject this reserach topic?</strong></p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <div className="delete-modal row">
                        <div className="col-6">
                            <RippleButton className="ripple-button" text=" Confirm" onClick={() => rejectRequest(modalDataDelete)} />
                        </div>
                        <div className="col-6">
                            <RippleButton className="ripple-button-warning" text="cancel" onClick={() => setModalDeleteConfirm(false)} />
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>

            <Modal show={modalAcceptConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>Confirm Accept the Research Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p></p>
                        <p><strong>Are you sure you want to accept this reserach topic?</strong></p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <div className="delete-modal row">
                        <div className="col-6">
                            <RippleButton className="ripple-button" text=" Confirm" onClick={() => { acceptRequest(modalDataAccept) }} />
                        </div>
                        <div className="col-6">
                            <RippleButton className="ripple-button-warning" text="cancel" onClick={() => setModalAcceptConfirm(false)} />
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>

        </div >

    )
}
