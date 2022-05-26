import React, { useState, useEffect } from "react";
import { RippleButton } from '../../components/RippleButton'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, Button } from "react-bootstrap";
import { getAllRequestTopicsCoSupervisors } from "../../services/cosupervisorRequests.service";



export default GroupRequest = () => {

    const [search, setSearch] = useState("");
    const [groupList, setGroupList] = useState([]);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

    const [modalDataAccept, setModalDataAccept] = useState([]);
    const [modalAcceptConfirm, setModalAcceptConfirm] = useState(false);
    const [modalAccept, setModalAccept] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    const [disable, setDisable] = useState(false);
    const [query, setQuery] = useState("")

    useEffect(() => {
        getAllRequestTopicsCoSupervisors().then((response) => {
            setGroupList(response.data.data.reverse())
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
                            if(query === ''){
                                return grouplist;
                            }else if (grouplist.groupId.toLowerCase().includes(query.toLowerCase()) || 
                                      grouplist.email.toLowerCase().includes(query.toLowerCase()) ||
                                      grouplist.researchTopic.toLowerCase().includes(query.toLowerCase())  || 
                                      grouplist.researchField.toLowerCase().includes(query.toLowerCase())) {
                                return grouplist;
                              }
                        }).map((grouplist , index) => {
                            return(
                                <tr key={index}>
                                    <td>{grouplist.groupId}</td>
                                    <td>{grouplist.email}</td>
                                    <td>{grouplist.researchTopic}</td>
                                    <td>{grouplist.researchField}</td>
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
