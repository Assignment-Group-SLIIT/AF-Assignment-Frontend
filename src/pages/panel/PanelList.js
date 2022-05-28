import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../components/RippleButton"
import '../../styles/usersList.styles.scss'
import toastNotification from '../../components/toastNotification';
import { deletePanel, getAllPanels } from '../../services/panel.service';
import ViewPanelMember from './modals/PanelMember';
import { UpdatePanel } from './modals/UpdatePanel';
import { searchUser, updateUser } from '../../services/user.service';

export const CreatedPanelList = () => {

    const [search, setSearch] = useState("");
    const [panelList, setPanelList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);



    const openModal = (panel) => {

        setData(panel);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {

        setModalShow(true);
    }

    const openModalDelete = (panel) => {
        setModalDataDelete(panel);
        setModalDeleteConfirm(true);
    }

    const openModalUpdate = (panel) => {

        console.log("request came for modal updateeeeeee");
        setModalDataUpdate(panel);
        setModalUpdate(true);

    }

    useEffect(() => {
        getAllPanels().then(response => {
            // console.log("data", response)
            if (response.ok) {
                setPanelList(response.data);
            } else {
                toastNotification("Cannot load the panel list", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

    }, [])


    function onDelete(modalDataDelete) {

        const pNo = panelList.findIndex(panel => panel.panelId === modalDataDelete.panelId)

        console.log(modalDataDelete.panelId)
        deletePanel(modalDataDelete.panelId).then(response => {
            if (response.ok) {
                toastNotification("Successfully deleted a Panel", "success")
                setModalDeleteConfirm(false);
                setTimeout(function () {
                    refreshPage();
                }, 2000);

                searchUser(panelList[pNo].member1).then(res => {
                    console.log("4", res)
                    if (res.ok) {
                        const user1 = {
                            fullname: res.data.fullname,
                            email: res.data.email,
                            contactNo: res.data.contactNo,
                            role: res.data.role,
                            isAvailable: true,
                            department: res.data.department,
                            field: res.data.field

                        }

                        updateUser(user1.email, user1).then(res => {
                            if (res.ok) {
                                console.log("update1", res)
                                searchUser(panelList[pNo].member2).then(res => {
                                    console.log("4", res)
                                    if (res.ok) {
                                        const user2 = {
                                            fullname: res.data.fullname,
                                            email: res.data.email,
                                            contactNo: res.data.contactNo,
                                            role: res.data.role,
                                            isAvailable: true,
                                            department: res.data.department,
                                            field: res.data.field

                                        }

                                        updateUser(user2.email, user2).then(res => {
                                            if (res.ok) {
                                                console.log("update1", res)
                                                searchUser(panelList[pNo].member3).then(res => {
                                                    if (res.ok) {
                                                        const user3 = {
                                                            fullname: res.data.fullname,
                                                            email: res.data.email,
                                                            contactNo: res.data.contactNo,
                                                            role: res.data.role,
                                                            isAvailable: true,
                                                            department: res.data.department,
                                                            field: res.data.field

                                                        }
                                                        updateUser(user3.email, user3).then(res => {
                                                            if (res.ok) {
                                                                console.log("update1", res)
                                                                searchUser(panelList[pNo].member4).then(res => {
                                                                    if (res.ok) {
                                                                        const user4 = {
                                                                            fullname: res.data.fullname,
                                                                            email: res.data.email,
                                                                            contactNo: res.data.contactNo,
                                                                            role: res.data.role,
                                                                            isAvailable: true,
                                                                            department: res.data.department,
                                                                            field: res.data.field

                                                                        }
                                                                        updateUser(user4.email, user4).then(res => {
                                                                            if (res.ok) {
                                                                                console.log("Panel Member details updated")
                                                                            }
                                                                        }).catch(err => console.error(err))
                                                                    }
                                                                }).catch(err => console.error(err))
                                                            }
                                                        }).catch(err => console.error(err))
                                                    }
                                                }).catch(err => console.error(err))
                                            }
                                        }).catch(err => console.log(err))
                                    }
                                }).catch(err => console.log(err))
                            }
                        }).catch(err => console.error(err))
                    }
                }).catch(err => {
                    console.log(err)
                })
            } else {
                toastNotification("Error upon deleting a Panel", "warn");
            }

        }).catch(err => {
            toastNotification("Error", "error");
        })

    }

    const searchResult = (e) => {
        e.preventDefault();
        // console.log(search)
        setPanelList(panelList.filter(panel => {
            return (
                panel.panelNumber == search || panel.FieldOfInterest == search || panel.member1 == search || panel.member2 == search || panel.member3 == search || panel.member4 == search
            )
        }))

        // console.log(panelList)
    }


    function refreshPage() {
        window.location.reload();
    }


    return (
        <div className='body-content-container'>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ViewPanelMember
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
            <div className="container-border">


                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" onClick={refreshPage} >Evaluation Panels</h3>
                    </div>
                </div>
                <div className="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div className="search-box">
                            <div className="searchbar">
                                <form onSubmit={(e) => searchResult(e)}>
                                    <input className="search_input" type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button className="btn search_icon" type="submit" id="submit" name="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className='text'>Panel No</th>
                            <th className='text'>Field</th>
                            <th className='text'>Member</th>
                            <th className='text'>Member</th>
                            <th className='text'>Member </th>
                            <th className='text'>Member </th>
                            <th className='text'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {panelList.map((panel) => {
                            return (
                                <tr key={Math.random()}>
                                    <td >{panel.panelNumber}</td>
                                    <td >{panel.FieldOfInterest}</td>
                                    <td onClick={() => openModal(panel.member1)}>{panel.member1}</td>
                                    <td onClick={() => openModal(panel.member2)}>{panel.member2}</td>
                                    <td onClick={() => openModal(panel.member3)}>{panel.member3}</td>
                                    <td onClick={() => openModal(panel.member4)}>{panel.member4}</td>
                                    <td>
                                        <RippleButton className="ripple-button" text="Update" onClick={() => openModalUpdate(panel)} />
                                        <RippleButton className="ripple-button-danger" text="Delete" onClick={() => openModalDelete(panel)} />
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
            {/* Modal to be used in update */}
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdatePanel
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>

            {/* Modal to be used in delete */}

            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p></p>
                        <p><strong>Are you sure you want to remove this panel?</strong></p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <div className="delete-modal row">
                        <div className="col-6">
                            <RippleButton className="ripple-button" text=" Confirm" onClick={() => { onDelete(modalDataDelete); }} />
                        </div>
                        <div className="col-6">
                            <RippleButton className="ripple-button-warning" text="cancel" onClick={() => setModalDeleteConfirm(false)} />
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>



        </div>
    )





}