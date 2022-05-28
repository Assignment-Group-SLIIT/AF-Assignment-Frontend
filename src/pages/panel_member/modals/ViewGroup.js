import React, { useEffect, useState } from 'react'
import { getAllAssignementOfGroup } from '../../../services/assignment.service'
import { Modal } from "react-bootstrap";
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

                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission One'} />
                            </div>
                            <div class="col-4">
                                <label class="text-left" id="ID1"><strong>{submission1State}</strong></label>
                            </div>
                        </div>

                        <br></br>

                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Two'} />

                            </div>
                            <div class="col-4">
                                <label class="text-left" id="ID2"><strong>{submission2State}</strong></label>
                            </div>
                        </div>

                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Three'} />

                            </div>
                            <div class="col-4">
                                <label class="text-left" id="ID3"><strong>{submission3State}</strong></label>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Four'} />

                            </div>
                            <div class="col-4">
                                <label class="text-left" id="ID4"><strong>{submission4State}</strong></label>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col-8">
                                <FormSection headline={'Submission Five'} />
                            </div>
                            <div class="col-4">
                                <label class="text-left" id="ID5"><strong>{submission5State}</strong></label>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </div>
    )





}
export default ViewGroupEvaluate;