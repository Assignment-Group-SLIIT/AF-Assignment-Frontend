import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../../components/RippleButton'
import { Modal } from "react-bootstrap";
import { getOneGroup } from '../../../services/group.service';
import { sendsEmail } from '../../../services/assignment.service';
import toastNotification from '../../../components/toastNotification';

export const SendEmail = (evaluate) => {

    const [groupID, setGroupID] = useState("")
    const [evaluationStatus, setEvaluationStatus] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {

        getOneGroup(evaluate.data.groupId).then(res => {
            if (res.ok) {
                setEmail(res.data?.student?.leader?.email)
                setName(res.data?.student?.leader?.name)
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

    const sendLink = (e) => {
        e.preventDefault();

        const message = "Please participate for final evaluations using " + link + " ."

        // console.log(email, name, message)

        if (groupID == "" || evaluationStatus == "" || email == "" || link == "") {
            toastNotification("Please make sure to fill all the fields")
        } else {
            const payload = {
                email: email,
                name: name,
                message: message
            }

            sendsEmail(payload).then(res => {
                // console.log(res)
                // if (res.ok) {
                toastNotification("Sent the email to " + email)
                // }
            })
        }



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

                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="email"><strong>Team Leaders Email</strong></label>
                                    <label type="email" class="form-control" id="email"><strong>{email}</strong></label>
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
                                    <RippleButton className="ripple-button" text="Send" onClick={(e) => { sendLink(e) }} />

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
