import DropzoneArea from '../../components/DropZoneArea'
import React, { useState } from 'react'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'
import { nanoid } from 'nanoid'
import { addSubmission } from '../../services/submission.service'
import moment from 'moment'
import toastNotification from '../../components/toastNotification'
import { ProgressBar } from 'react-bootstrap';

export const CreateSubmission = () => {

    const [submissionID, setSubmissionID] = useState(nanoid(4))
    const [submissionType, setSubmissionType] = useState("")
    const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"))
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"))
    const [fileName, setFileName] = useState("")

    //error state management
    const [errFile, setErrFile] = useState(true);
    const [errType, setErrType] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    const sendData = (data) => {
        setErrFile(false)
        setFileName(data)
    }

    const sendProgress = (data) => {
        console.log("DATAAAA", data)
        setState(true)
        setLoadingProgress(data)
    }

    const uploadSubmission = (e) => {
        e.preventDefault();

        if (submissionType == "" || fileName == "") {
            toastNotification("Make sure you fill all the fields", "warn")

        } else if (moment(startDate).format("YYYY-MM-DD") == moment(endDate).format("YYYY-MM-DD")) {
            toastNotification("Submission start and end dates cannot be the same", "warn")
        } else {
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
                    setFileName("")
                    setSubmissionType("")
                } else {
                    toastNotification("Could not upload a submission", "warn")
                }
            }).catch(err => {
                toastNotification("Error", "error")
            })

        }
    }

    function refreshPage(e) {
        e.preventDefault()
        window.location.reload();
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
                                    <select class="form-select" className="form-control" name="submissionType" id="submissionType" onChange={(e) => { setSubmissionType(e.target.value); submissionType != null ? setErrType(false) : setErrType(true) }}>
                                        <option  >Choose Type</option>
                                        <option id="1" >Submission One</option>
                                        <option id="2" >Submission Two</option>
                                        <option id="3" >Submission Three</option>
                                        <option id="4" >Submission Four</option>
                                        <option id="5" >Submission Five</option>
                                    </select>
                                    {errType ? <small className='text-danger'>Cannot keep the field empty</small> : ""}
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="startDate">Start Date</label>
                                    <input type="date" class="form-control" id="startDate" placeholder="Start Date" value={startDate} onChange={(e) => { setStartDate(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="endDate">End Date</label>
                                    <input type="date" class="form-control" id="endDate" placeholder="End Date" value={endDate} onChange={(e) => { setEndDate(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div className="d-flex flex-row">
                                    {/* <div class="col-3">
                                    <label className="form-pad" for="template">Template Document</label>
                                </div> */}
                                    <div className='col-4'>
                                        <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                                        {fileName ? fileName.substring(0, 30) + "..." : ''}
                                        <div>
                                            {errFile ? <small className='text-danger'>Must upload a file</small> : ""}
                                        </div>

                                    </div>
                                    <div className='col-8'>
                                        {!fileName && state ? <ProgressBar now={loadingProgress} /> : ""}
                                    </div>



                                </div>
                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { uploadSubmission(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={(e) => { refreshPage(e) }} />

                                </div>
                            </div>

                        </form>
                    </div>
                </div>



            </div>
        </div>
    )





} 