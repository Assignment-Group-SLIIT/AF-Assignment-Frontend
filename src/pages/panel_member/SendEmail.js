import React, { useState, useEffect } from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Modal } from "react-bootstrap";

export const SendEmail = (evaluate) => {

    const [groupID, setGroupID] = useState("")
    const [email, setEmail] = useState("")
    const [link, setLink] = useState("")


    return (
        <div>
            <Modal.Header>
                <Modal.Title>Send Email To Team</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={evaluate.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >

                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <label type="text" class="form-control" id="groupID"><strong>{groupID}</strong></label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="email">Team Leaders Email</label>
                                    <input type="email" class="form-control" id="email" />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="link">VIVA Link</label>
                                    <input type="text" class="form-control" id="marks" placeholder="marks" value={marks} onChange={(e) => { setMarks(e.target.value) }} />
                                </div>

                            </div>
                            <br></br>

                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Send" onClick={(e) => { addEvalMarks(e) }} />

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
