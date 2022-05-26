import React, { useState, useEffect } from 'react'
import { Modal, Button } from "react-bootstrap";
import { RippleButton } from '../../components/RippleButton'
import EvaluationSubmissionModal from './modals/evaluationSubmissionModal';
import { getAllAssignement } from '../../services/assignment.service';


export const EvaluationSubmission = () => {

    const [search, setSearch] = useState("");
    const [evaluation, setEvaluation] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [evaluationData, setEvaluationData] = useState([]);

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

    const getEvaluationData = async () => {
        let response = await getAllAssignement();
        console.log("res>>", response)
        if (response.ok) {
            setEvaluationData(response.data)
        }
    }

    useEffect(() => {
        getEvaluationData()
    }, [])

    const openModalUpdate = (user) => {

        console.log("request came for modal updateeeeeee");
        // setModalDataUpdate(data);
        setModalUpdate(true);

    }

    return (
        <div className='body-content-container'>

            <div className="container-border">
                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" >Submissions To Be Evaluated</h3>
                    </div>
                </div>
                <br /> <br /> <br />
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="search-box">
                            <div class="searchbar">
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
                            <th className='text'>Submission ID</th>
                            <th className='text'>Submission Type</th>
                            <th className='text'>Document</th>
                            <th className='text'>Marks</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* return( */}
                        {console.log("evaData", evaluationData)}
                        {
                            evaluationData.map((values) => {
                                return (
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td className='text'>
                                            <RippleButton className="ripple-button" text="Evaluate" onClick={() => openModalUpdate()} />
                                        </td>
                                    </tr>
                                )
                            })
                        }


                        {/* ) */}
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
                <EvaluationSubmissionModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>
        </div >
    )
}
