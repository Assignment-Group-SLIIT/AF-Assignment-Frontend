import React, { useState, useEffect } from 'react'
import { Modal, Alert } from "react-bootstrap";
import { RippleButton } from '../../components/RippleButton'
import { getAllAssignement } from '../../services/assignment.service';
import AddMarks from './modals/AddMarks';
import { SendEmail } from './modals/SendEmail';
import ViewGroupEvaluate from './modals/ViewGroup';

export const Evaluation = () => {

    const [search, setSearch] = useState("");
    const [evaluations, setEvaluation] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalDataSendEmail, setModalDataSendEmail] = useState([]);
    const [modalSendEmail, setModalSendEmail] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);

    const openModal = (evaluate) => {
        console.log("MODA CALLED")
        setData(evaluate);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {

        setModalShow(true);
    }

    const openModalUpdate = (evaluate) => {
        setModalDataUpdate(evaluate);
        setModalUpdate(true);
    }

    const openModalSendEmails = (evaluate) => {
        setModalDataSendEmail(evaluate);
        setModalSendEmail(true);
    }

    useEffect(() => {
        getAllAssignement().then(res => {
            if (res.ok) {
                setEvaluation(res.data.data.filter(ele => {
                    return (
                        ele.submissionType == "Submission Five"
                    )
                }))
                // console.log(res.data.data)
            }
        })
    }, [])

    const searchResult = (e) => {
        e.preventDefault();
        setEvaluation(evaluations.filter(evaluate => {
            return (
                evaluate.groupId == search || evaluate.evaluationStatus == search || evaluate.marks == search
            )
        }))
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
                <ViewGroupEvaluate
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>

            <div className="container-border">
                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" onClick={refreshPage}>Presentation Evaluation</h3>
                    </div>
                </div>
                <br /> <br />
                <div class="row table-head-search">
                    <div className="col"></div>

                    <div className="col">
                        <div class="search-box float-right mr-2">
                            <div class="searchbar">
                                <form
                                    onSubmit={(e) => searchResult(e)}
                                >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        onChange={(e) => setSearch(e.target.value)}
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
                            <th className='text'>Evaluation Status</th>
                            <th className='text'>Marks</th>
                            <th className='text'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {evaluations.map((evaluate) => {
                            return (
                                <tr key={Math.random()}>
                                    <td className='text' onClick={() => openModal(evaluate)}>{evaluate.groupId}</td>
                                    <td className='text '>
                                        <Alert className="w-50 ml-5 p-1 " variant={evaluate.evaluationStatus === 'Pending' ? 'warning' : evaluate.evaluationStatus === 'Completed' ? 'success' : null} >
                                            {evaluate.evaluationStatus}
                                        </Alert>

                                    </td>
                                    <td className='text'>{evaluate.marks}</td>
                                    <td className='text'>
                                        <RippleButton className="ripple-button-table" text="Add Marks" onClick={() => openModalUpdate(evaluate)} />

                                        {evaluate.marks > 0 ? (
                                            <RippleButton className="ripple-button-danger-table" text="Send Mail" onClick={() => openModalSendEmails(evaluate)} />
                                        ) : " "
                                        }
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
                <AddMarks
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>
            {/* Modal to send email */}
            <Modal
                show={modalSendEmail}
                onHide={() => setModalSendEmail(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <SendEmail
                    data={modalDataSendEmail}
                    onHide={() => setModalSendEmail(false)}
                />
            </Modal>
        </div >
    )
}
