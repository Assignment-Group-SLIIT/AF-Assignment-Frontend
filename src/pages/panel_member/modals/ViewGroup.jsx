import React, { useEffect, useState } from 'react'
import { getAllAssignementOfGroup } from '../../../services/assignment.service'
import { Modal, Alert } from "react-bootstrap";
import { FormSection } from '../../../components/FormSection';

const ViewGroupEvaluate = (evaluate) => {
    console.log("cameeeeeee", evaluate)

    const [allSubmission, setAllSubmission] = useState([])

    //display data states
    const [submission1State, setSubmission1State] = useState("")


    const [submission2State, setSubmission2State] = useState("")


    const [submission3State, setSubmission3State] = useState("")


    const [submission4State, setSubmission4State] = useState("")


    const [submission5State, setSubmission5State] = useState("")



    useEffect(() => {
        getAllAssignementOfGroup(evaluate.data.groupId).then(res => {
            if (res.ok) {
                setAllSubmission(res.data)
            }
        }).catch(err => {
            console.error(err)
        })
    }, [])


    useEffect(() => {
        allSubmission.map(sub => {
            if (sub.submissionType == "Submission One") {
                setSubmission1State(sub.evaluationStatus)

            }

            if (sub.submissionType == "Submission Two") {
                setSubmission2State(sub.evaluationStatus)

            }

            if (sub.submissionType == "Submission Three") {
                setSubmission3State(sub.evaluationStatus)

            }


            if (sub.submissionType == "Submission Four") {
                setSubmission4State(sub.evaluationStatus)

            }

            if (sub.submissionType == "Submission Five") {
                setSubmission5State(sub.evaluationStatus)

            }
        })

    }, [allSubmission])


    return (
        <div>
            <Modal.Header>

                <Modal.Title>Submissions Road Map</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={evaluate.onHide}></button>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        {console.log("submission State", submission1State)}
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission One'} />
                            </div>
                            <div class="col-3">
                                <label class="text-left" id="ID1"><strong>{submission1State}</strong></label>
                                <Alert className="m-1 1 p-1 text-center" variant={submission1State === 'Pending' ? 'warning' : submission1State === 'Completed' ? 'success' : null} >
                                    <strong>{submission1State}</strong>
                                </Alert>
                            </div>
                        </div>

                        <br></br>

                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Two'} />

                            </div>
                            <div class="col-3">
                                {/* <label class="text-left" id="ID2"><strong>{submission2State}</strong></label> */}
                                <Alert className="m-1 1 p-1 text-center" variant={submission2State === 'Pending' ? 'warning' : submission2State === 'Completed' ? 'success' : null} >
                                    <strong>{submission2State}</strong>
                                </Alert>
                            </div>
                        </div>

                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Three'} />

                            </div>
                            <div class="col-3">
                                <Alert className="m-1 1 p-1 text-center" variant={submission3State === 'Pending' ? 'warning' : submission3State === 'Completed' ? 'success' : null} >
                                    <strong>{submission3State}</strong>
                                </Alert>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Four'} />

                            </div>
                            <div class="col-3">

                                <Alert className="m-1 1 p-1 text-center" variant={submission4State === 'Pending' ? 'warning' : submission4State === 'Completed' ? 'success' : null} >
                                    <strong>{submission4State}</strong>
                                </Alert>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Five'} />
                            </div>
                            <div class="col-3">

                                <Alert className="m-1 1 p-1 text-center" variant={submission5State === 'Pending' ? 'warning' : submission5State === 'Completed' ? 'success' : null} >
                                    <strong>{submission5State}</strong>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )





}
export default ViewGroupEvaluate;