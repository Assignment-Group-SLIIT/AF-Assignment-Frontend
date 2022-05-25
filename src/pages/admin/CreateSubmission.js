import DropzoneArea from '../../components/DropZoneArea'
import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'
import { nanoid } from 'nanoid'
import { addSubmission } from '../../services/submission.service'
import moment from 'moment'
import toastNotification from '../../components/toastNotification'

export const CreateSubmission = () => {

    const [submissionID, setSubmissionID] = useState(nanoid(4))
    const [submissionType, setSubmissionType] = useState("")
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"))
    const [fileName, setFileName] = useState("")

    const sendData = (data) => {
        setFileName(data)
    }

    const uploadSubmission = (e) => {
        e.preventDefault();

        const submissionDoc = {
            submissionId: submissionID,
            submissionType: submissionType,
            startDate: moment(startDate).format("YYYY-MM-DD"),
            endDate: moment(endDate).format("YYYY-MM-DD"),
            markingSchema: fileName,
        }



        addSubmission(submissionDoc).then(res => {
            if (res.ok) {
                toastNotification("Uploaded a new submission", "success")
            } else {
                toastNotification("Could not upload a submission", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

    }




    return (
        <div className='template-content-container'>
            <div className='create-template-form'>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <h2><label for="group">Create Submission</label></h2>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="submissionID">Submission ID</label>
                                    <input type="text" class="form-control" id="submissionID" placeholder="Submission ID" value={submissionID} onChange={(e) => { setSubmissionID(e.target.value) }} disabled />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="submissionType">Submission Type</label>
                                    <select class="form-select" className="form-control" name="submissionType" id="submissionType" onChange={(e) => { setSubmissionType(e.target.value) }}>
                                        <option  >Choose Type</option>
                                        <option id="1" >Submission One</option>
                                        <option id="2" >Submission Two</option>
                                        <option id="3" >Submission Three</option>
                                        <option id="4" >Submission Four</option>
                                        <option id="5" >Submission Five</option>
                                    </select>

                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="startDate">Start Date</label>
                                    <input type="date" class="form-control" id="startDate" placeholder="Start Date" onChange={(e) => { setStartDate(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="endDate">End Date</label>
                                    <input type="date" class="form-control" id="endDate" placeholder="End Date" onChange={(e) => { setEndDate(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                {/* <div class="col-3">
                                    <label className="form-pad" for="template">Template Document</label>
                                </div> */}
                                <div className='col-4'>
                                    <DropzoneArea sendData={sendData} />
                                    {fileName ? fileName : ''}
                                </div>

                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { uploadSubmission(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={() => { onSubmit() }} />

                                </div>
                            </div>

                        </form>
                    </div>
                </div>



            </div>
        </div>
    )





} 