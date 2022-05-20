import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import ViewUser from '../users/modals/ViewUser';
import { RippleButton } from "../../components/RippleButton"
import '../../styles/usersList.styles.scss'

export const PanelList = () => {

    const [search, setSearch] = useState("");
    const [panelList, setPanelList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);


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

    useEffect(() => {

    }, [])


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
                        <h3 className="float-left" >Panel Members</h3>
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
                        <tr >

                            <td >data</td>
                            <td ></td>
                            <td ></td>
                            <td></td>
                            <td>
                                <RippleButton className="ripple-button" text="View" onClick={() => openModal()} />
                                <RippleButton className="ripple-button-danger" text="Delete" onClick={() => openModalDelete()} />
                            </td>
                        </tr>
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
                            <RippleButton className="ripple-button" text=" Confirm" />
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