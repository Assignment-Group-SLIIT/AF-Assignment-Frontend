import DropzoneArea from '../../components/DropZoneArea'
import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'
import { createTemplate } from '../../services/template.service'
import toastNotification from '../../components/toastNotification'
import { nanoid } from 'nanoid'
import { ProgressBar } from 'react-bootstrap';

export const CreateTemplate = () => {

    const [submissionID, setSubmissionID] = useState(nanoid(4))
    const [submissionType, setSubmissionType] = useState("")
    const [fileName, setFileName] = useState("")

    //error state management
    const [errFile, setErrFile] = useState(true);
    const [errType, setErrType] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    const sendProgress = (data) => {
        console.log("DATAAAA", data)
        setState(true)
        setLoadingProgress(data)
    }

    const sendData = (data) => {
        setErrFile(false)
        setFileName(data)
    }

    const uploadTemplate = (e) => {
        e.preventDefault();
        if (submissionType == "" || fileName == "") {
            toastNotification("Make sure you fill all the fields", "warn")
        } else {
            const template = {
                submissionId: submissionID,
                submissionType: submissionType,
                template: fileName,
            }
            createTemplate(template).then(res => {
                if (res.ok) {
                    toastNotification("Uploaded a new template", "success")
                    setFileName("")
                    setSubmissionType("")
                } else {
                    toastNotification("Could not upload the template", "warn")
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

                            <h2><label for="group">Create Template</label></h2>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="submissionID">Submission ID</label>
                                    <input type="text" class="form-control" id="submissionID" placeholder="Submission ID" value={submissionID} disabled />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="submissionType">Submission Type</label>
                                    <select class="form-select form-control" name="submissionType" id="submissionType" value={submissionType} onChange={(e) => { setSubmissionType(e.target.value); submissionType != null ? setErrType(false) : setErrType(true) }}>
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
                            <br></br>

                            <div class="row">
                                <div class="col-3">
                                    <label className="form-pad mt-2" for="template">Template Doc</label>
                                </div>

                                <div className='col-4'>
                                    <DropzoneArea sendData={sendData} sendProgress={sendProgress} />
                                    {fileName ? fileName.substring(0, 30) + "..." : ''}
                                    {errFile ? <small className='text-danger'>Must upload a file</small> : ""}
                                </div>

                            </div>
                            <div className='uploading-box'>
                                {state ? <ProgressBar now={loadingProgress} /> : ""}
                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { uploadTemplate(e) }} />

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