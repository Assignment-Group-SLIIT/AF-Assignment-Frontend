import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../../components/RippleButton'
import { Modal } from "react-bootstrap";
import { getOneGroup } from '../../../services/group.service';

export const SendEmail = (evaluate) => {

    // console.log("data cameeee", evaluate)

    const [groupID, setGroupID] = useState("")
    const [evaluationStatus, setEvaluationStatus] = useState("")
    const [email, setEmail] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {

        getOneGroup(evaluate.data.groupId).then(res => {
            if (res.ok) {
                setEmail(res.data?.student?.leader?.email)
            } else {
                console.log("Error occured")
            }
        }).catch(err => {
            console.error(err)
        })
    }, [])

    useEffect(() => {
        setGroupID(evaluate.data.groupId)
        setEvaluationStatus(evaluate.data.evaluationStatus)
    }, [email])

    const sendEmail = (e) => {
        e.preventDefault()
    }



    return (
        <div>
            <Modal.Header>
                <Modal.Title><strong>Send Email To Team</strong></Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={evaluate.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >

                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID"><strong>Group ID</strong></label>
                                    <label type="text" class="form-control" id="groupID"><strong>{groupID}</strong></label>
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="presentation"><strong>Presenation Evaluation</strong></label>
                                    <label type="text" class="form-control" id="presentation"><strong>{evaluationStatus}</strong></label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="email"><strong>Team Leaders Email</strong></label>
                                    <input type="email" class="form-control" id="email" placeholder="abc@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="link"><strong>VIVA Link</strong></label>
                                    <input type="text" class="form-control" id="link" placeholder="link" value={link} onChange={(e) => { setLink(e.target.value) }} />
                                </div>

                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Send" onClick={(e) => { sendEmail(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={evaluate.onHide} />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div>


    )
}
