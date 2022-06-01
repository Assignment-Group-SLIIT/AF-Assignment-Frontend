import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DropzoneArea from '../../components/DropZoneArea'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'
import { ProgressBar } from 'react-bootstrap';
import { addAssignment } from '../../services/assignment.service';

import { nanoid } from 'nanoid'
import toastNotification from '../../components/toastNotification';


const UploadEvaluation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [submissionID, setSubmissionID] = useState("")
    const [submissionType, setSubmissionType] = useState("")

    const [fileName, setFileName] = useState("")
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    const [groupId, setGroupId] = useState(null)
    const [assignmentVersion, setAssignmentVersion] = useState(null)

    useEffect(() => {
        // console.log("location>>", location.state.version);
        location.state ? setAssignmentVersion(location?.state?.version) : setAssignmentVersion(null)
        location.state ? setGroupId(location?.state?.groupId) : setGroupId(null)
    }, [])

    const sendProgress = (data) => {
        console.log("DATAAAA", data)
        setState(true)
        setLoadingProgress(data)
    }

    const sendData = (data) => {
        console.log("Child data", data)
        setFileName(data)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            groupId,
            submissionId: nanoid(4),
            submissionType: assignmentVersion,
            document: fileName,
            evaluationStatus: "Pending",
            marks: 0,
        }

        if (groupId != null && assignmentVersion != null && fileName !== "") {
            console.log("data>>>", payload);
            addAssignment(payload).then((res) => {
                if (res.ok) {
                    toastNotification("Assignment submitted successfully!", "success")
                    window.location.reload()
                } else {
                    toastNotification("Oops! Error occured", "error")
                }
            }).catch((err) => {
                toastNotification("Oops! Error occured", "error")
                console.log("error while assignment submission>>", err);
            })
        }
    }

    return (
        <div className='template-content-container'>
            <div className='create-template-form'>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <h2><label for="group">Submit Assignment</label></h2>
                            <hr></hr>
                            <br></br>
                            <div class="row">

                                <div class="col">
                                    <label className="form-pad" for="submissionType">Submission Type : </label>
                                    {/* <select class="form-select form-control" name="submissionType" id="submissionType" value={submissionType} onChange={(e) => { setSubmissionType(e.target.value) }}>
                                        <option  >Choose Type</option>
                                        <option id="1" >Submission One</option>
                                        <option id="2" >Submission Two</option>
                                        <option id="3" >Submission Three</option>
                                        <option id="4" >Submission Four</option>
                                        <option id="5" >Submission Five</option>
                                    </select> */}

                                    <strong> &emsp; &emsp; {assignmentVersion}</strong>


                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div className="d-flex flex-row">
                                    <div class="col-2">
                                        <label className="form-pad mt-2" for="template">Template</label>
                                    </div>

                                    <div className='col-3'>
                                        <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                                        {fileName ? fileName.substring(0, 30) + "..." : ''}
                                    </div>
                                    <div className='col-6'>
                                        <div>
                                            {!fileName && state ? <ProgressBar now={loadingProgress} /> : ""}
                                        </div>

                                    </div >

                                </div>



                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { onSubmit(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={() => { navigate("/student/dashboard") }} />

                                </div>
                            </div>

                        </form>
                    </div>
                </div>



            </div >
        </div >
    )
}

export default UploadEvaluation