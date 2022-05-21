import React, { useState, useEffect } from "react";
import { RippleButton } from '../../components/RippleButton'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";



export const TopicRequest = () => {

    const [search, setSearch] = useState("");
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalDataAccept, setModalDataAccept] = useState([]);
    const [modalAcceptConfirm, setModalAcceptConfirm] = useState(false);
    const [modalAccept, setModalAccept] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    const openModal = (data) => {
        // setData(rental);
        setModalAcceptConfirm(true);
    }

    const openModalDelete = (data) => {
        // setModalDataDelete(data);
        setModalDeleteConfirm(true);
    }


    return (
        <div className='body-content-container'>
            <div className="container-border">
                <h3> Topic Request - For Pannel Members</h3>
                <br /> <br /> <br />
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                            <div className="searchbar">
                                <form
                                // onSubmit={(e) => searchRooms(e)}
                                >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        // value={search}
                                        // onChange={(event) => { setSearch(event.target.value) }}
                                        require />
                                    <button class="pmtbtn search_icon" type="submit" id="submit" name="submit">
                                        <i class="fa fa-search"></i></button>
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
                            <th className='text'>Document</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* return( */}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='text'>
                                <RippleButton className="ripple-button" text="Accept" onClick={() => openModal()} />
                                <RippleButton className="ripple-button-danger" text="Reject" onClick={() => openModalDelete()} />
                            </td>
                        </tr>
                        {/* ) */}
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
                            <RippleButton className="ripple-button" text=" Confirm" />
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
                            <RippleButton className="ripple-button" text=" Confirm" />
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
