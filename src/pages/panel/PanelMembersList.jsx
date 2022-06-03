import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import ViewUser from '../users/modals/ViewUser';
import { RippleButton } from "../../components/RippleButton"
import '../../styles/usersList.styles.scss'
import { deleteUser, getAllUsers } from '../../services/user.service';
import toastNotification from '../../components/toastNotification';

export const PanelList = () => {

    const [search, setSearch] = useState("");
    const [panelList, setPanelList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);


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

    useEffect(() => {
        getAllUsers().then(response => {
            console.log("data", response)
            if (response.ok) {
                setPanelList(response.data);
            } else {
                toastNotification("Cannot load the panel members", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

    }, [])


    function onDelete(modalDataDelete) {

        deleteUser(modalDataDelete.email).then(response => {
            if (response.ok) {
                toastNotification("Successfully deleted a Panel member", "success");
                // window.location.reload();
                setModalDeleteConfirm(false);
                setTimeout(function () {
                    refreshPage();
                }, 2000);
            } else {
                toastNotification("Error upon deleting a Panel member", "warn");
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
                panel.fullname == search || panel.email == search || panel.contactNo == search || panel.role == search
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
                <ViewUser
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
            <div className="container-border">


                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" onClick={refreshPage}>Panel Members</h3>
                    </div>
                </div>
                <div className="row table-head-search">
                    <div className="col"></div>

                    <div className="col">
                        <div className="search-box float-right mr-2">
                            <div className="searchbar">
                                <form onSubmit={(e) => searchResult(e)}>
                                    <input className="search_input" type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}
                                    />

                                    <button className="btn search_icon" type="submit" id="submit" name="submit"

                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className='text'>Name</th>
                            <th className='text'>Email Address</th>
                            <th className='text'>Contact Number</th>
                            <th className='text'>Role</th>
                            <th className='text'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {panelList.map((panel) => {
                            if (panel.role == 'Panel') {
                                return (
                                    <tr key={Math.random()}>
                                        <td >{panel.fullname}</td>
                                        <td >{panel.email}</td>
                                        <td >{panel.contactNo}</td>
                                        <td>{panel.role}</td>
                                        <td>
                                            <RippleButton className="ripple-button-table" text="View" onClick={() => openModal(panel)} />
                                            <RippleButton className="ripple-button-danger-table" text="Delete" onClick={() => openModalDelete(panel)} />
                                        </td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>

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
                        <p><strong>Are you sure you want to remove this panel member?</strong></p>
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