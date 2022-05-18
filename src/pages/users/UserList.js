import React, { useState, useEffect } from 'react'
import '../../styles/usersList.styles.scss'
import { Modal } from "react-bootstrap";
import ViewUser from './modals/ViewUser';
import UpdateUser from './modals/UpdateUser';
import { RippleButton } from "../../components/RippleButton"

export const UserList = () => {

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

    const openModal = (user) => {
        // setData(rental);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        // console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalDelete = (data) => {
        // setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }

    const openModalUpdate = (user) => {

        console.log("request came for modal updateeeeeee");
        // setModalDataUpdate(data);
        setModalUpdate(true);

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
                    // data={modalData}
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
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div className="search-box">
                            <div className="searchbar">
                                <form >
                                    <input className="search_input" type="text" name="search" placeholder="Search..."
                                    />
                                    {/* <button className="btn search_icon" type="submit" id="submit" name="submit">
                                        Submit</button> */}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Contact Number</th>
                            <th>Role</th>
                            <th colSpan={2}>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

                            <td onClick={() => openModal()}>data</td>
                            <td ></td>
                            <td ></td>
                            <td></td>
                            <td>
                                <RippleButton className="ripple-button" text="Update" onClick={() => openModalUpdate()} />
                                <RippleButton className="ripple-button-danger" text="Delete" onClick={() => openModalDelete()} />
                            </td>
                        </tr>
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
                            <RippleButton className="ripple-button" text=" Confirm" />
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