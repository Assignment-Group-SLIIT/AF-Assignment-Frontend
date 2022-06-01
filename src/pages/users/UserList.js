import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import ViewUser from './modals/ViewUser';
import UpdateUser from './modals/UpdateUser';
import { RippleButton } from "../../components/RippleButton"
import '../../styles/usersList.styles.scss'
import { deleteUser, getAllUsers } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import toastNotification from '../../components/toastNotification';

export const UserList = () => {

    let navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [usersList, setUserList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);
    const [refresgPage, setRefreshPage] = useState(false);

    useEffect(() => {
        getAllUsers().then((response) => {
            setUserList(response.data.reverse())
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const openModal = (user) => {
        setData(user);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        // console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalUpdate = (user) => {

        console.log("request came for modal updateeeeeee");
        setModalDataUpdate(user);
        setModalUpdate(true);

    }

    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    function onDelete(modalDataDelete) {
        deleteUser(modalDataDelete.email).then((response) => {
            response.ok ? toastNotification("User successfully delete from the system", "success") : null
            //navigate('/login')
            window.location.reload(false);
        })
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
                        <h3 className="float-left" >List of Users</h3>
                    </div>
                </div>
                <div className="row table-head-search">
                    <div className="col"></div>

                    <div className="col">
                        <div className="search-box float-right mr-2">
                            <div className="searchbar">
                                <form >
                                    <input className="search_input" type="text" name="search" placeholder="Search..."
                                        onChange={(event) => { setSearch(event.target.value) }}
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
                            <th className='text'>Name</th>
                            <th className='text'>Email Address</th>
                            <th className='text'>Contact Number</th>
                            <th className='text'>Role</th>
                            <th className='text'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.filter((values) => {

                            if (search == "") {
                                return values
                            }
                            else if (
                                values.fullname.toLowerCase().includes(search.toLowerCase()) ||
                                values.email.toLowerCase().includes(search.toLowerCase()) ||
                                values.contactNo.toLowerCase().includes(search.toLowerCase()) ||
                                values.role.toLowerCase().includes(search.toLowerCase())) {
                                return values

                            }

                        }).map((user) => {
                            return (
                                <tr>
                                    <td className='link-hover' onClick={() => openModal(user)}>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contactNo}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <RippleButton className="ripple-button-table" text="Update" onClick={() => openModalUpdate(user)} />
                                        <RippleButton className="ripple-button-danger-table" text="Delete" onClick={() => openModalDelete(user)} />
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
                <UpdateUser
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>

            {/* Modal to be used in delete */}

            <Modal show={modalDeleteConfirm} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title>
                        <p><strong>Confirm Deletion</strong></p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <p><strong>Are you sure you want to remove this user?</strong></p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <div className="delete-modal row">
                        <div className="col-6">
                            <RippleButton className="ripple-button" text=" Confirm" onClick={() => { onDelete(modalDataDelete); }} />
                        </div>
                        <div className="col-6">
                            <RippleButton className="ripple-button-warning" text="Cancel" onClick={() => setModalDeleteConfirm(false)} />
                        </div>

                    </div>
                </Modal.Footer>
            </Modal>

        </div>
    )





}