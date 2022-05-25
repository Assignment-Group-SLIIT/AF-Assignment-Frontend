import React, { useState, useEffect } from "react";
import { RippleButton } from '../../components/RippleButton'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import { getAllProjectProposal } from "../../services/projectProposal.service";


export const TopicRequest = () => {

    const [search, setSearch] = useState("");
    const [topicList, setTopicList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalDataAccept, setModalDataAccept] = useState([]);
    const [modalAcceptConfirm, setModalAcceptConfirm] = useState(false);
    const [modalAccept, setModalAccept] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        getAllProjectProposal().then((response) => {
            console.log("data",response.data)
            setTopicList(response.data.data.reverse())
        }).catch((error) => {
            console.log("error",error)
        })
    },[])

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
                        <div class="search-box">
                            <div className="searchbar">
                                <form
                                // onSubmit={(e) => searchRooms(e)}
                                >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        // value={search}
                                        // onChange={(event) => { setSearch(event.target.value) }}
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
                            <th className='text'>Document</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topicList.map((topic) => {
                          
                            return(
                                <tr>
                                    <td>{topic.groupId}</td>
                                    <td>{topic.leaderEmail}</td>
                                    <td>{topic.researchTopic}</td>
                                    <td>{topic.field}</td>
                                    <td><a target="_blank" href={topic.document}>document</a></td>
                                    <td className='text'>
                                        <RippleButton className="ripple-button" text="Accept" onClick={() => openModal(topic)} />
                                        <RippleButton className="ripple-button-danger" text="Reject" onClick={() => openModalDelete(topic)} />
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
