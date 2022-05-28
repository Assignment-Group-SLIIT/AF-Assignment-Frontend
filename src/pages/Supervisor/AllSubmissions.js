import React, { useState, useEffect } from 'react'
import { Modal, Button } from "react-bootstrap";
import { RippleButton } from '../../components/RippleButton'
import EvaluationSubmissionModal from './modals/evaluationSubmissionModal';
import { getAllSubmissions } from '../../services/submission.service';
import ViewSubmissionModal from './submissionModal/viewSumissionModal';


const AllSubmissions = () => {

    const [search, setSearch] = useState("");
    const [evaluation, setEvaluation] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    const [submissionData, setSubmissionData] = useState([]);

    // const openModal = (user) => {
    //     // setData(rental);
    //     handleViewOnClick();
    //     setModalShow(true);
    // }

    // const handleViewOnClick = () => {
    //     // console.log("req came for modal");
    //     // console.log(modalData, "data came for modalllllll");
    //     setModalShow(true);
    // }


    const openModalUpdate = (values) => {

        console.log("request came for modal updateeeeeee");
        setModalDataUpdate(values);
        setModalShow(true);

    }

    const closeModal = () => {
        setModalShow(false);
    }

    const getAllSubmisionDetails = async () => {
        let response = await getAllSubmissions();
        console.log("res>>", response)
        if (response.ok) {
            setSubmissionData(response.data);
        }
    }

    useEffect(() => {
        getAllSubmisionDetails();
    }, [])

    return (
        <div className='body-content-container'>

            <div className="container-border">
                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" >All Submissions</h3>
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
                            <th className='text'>Submission ID </th>
                            <th className='text'>Submission Type</th>
                            <th className='text'>Start Date</th>
                            <th className='text'>End Date</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* return( */}

                        {console.log("dta>>", submissionData)}
                        {
                            submissionData.map((values) => {
                                return (
                                    <tr>
                                        {console.log("Data>>", values)}

                                        <td >{values.submissionId}</td>
                                        <td>{values.submissionType}</td>
                                        <td>{values.startDate}</td>
                                        <td>{values.endDate}</td>
                                        <td className='text'>
                                            <RippleButton className="ripple-button" text="View" onClick={() => openModalUpdate(values)} />
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
                show={modalShow}
                close={closeModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ViewSubmissionModal
                    data={modalDataUpdate}
                    close={closeModal}
                />
            </Modal>
        </div >
    )
}
export default AllSubmissions
