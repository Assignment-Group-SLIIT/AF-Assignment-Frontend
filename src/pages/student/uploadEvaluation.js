import DropzoneArea from '../../components/DropZoneArea'
import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import '../../styles/usersList.styles.scss'

const UploadEvaluation = () => {
    const [submissionID, setSubmissionID] = useState("")
    const [submissionType, setSubmissionType] = useState("")
    const [fileName, setFileName] = useState("")

    useEffect(() => {

    }, [])


    const sendData = (data) => {
        console.log("Child data", data)
        setFileName(data.name)
    }

    return (
        <div className='template-content-container'>
            <div className='create-template-form'>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <h2><label for="group">Upload Submission Template</label></h2>
                            <br></br>
                            <div class="row">

                                <div class="col">
                                    <label className="form-pad" for="submissionType">Submission Type</label>
                                    <select class="form-select form-control" name="submissionType" id="submissionType" value={submissionType} onChange={(e) => { setSubmissionType(e.target.value) }}>
                                        <option  >Choose Type</option>
                                        <option id="1" >Submission One</option>
                                        <option id="2" >Submission Two</option>
                                        <option id="3" >Submission Three</option>
                                        <option id="4" >Submission Four</option>
                                        <option id="5" >Submission Five</option>
                                    </select>


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
                                    <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} />

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

export default UploadEvaluation