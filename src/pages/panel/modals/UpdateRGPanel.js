import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../../components/RippleButton";
import "../../../styles/usersList.styles.scss"

function UpdateRGPanel(user) {

    const [groupID, setGroupID] = useState("");
    const [groupName, setGroupName] = useState("");
    const [topic, setTopic] = useState("");
    const [field, setField] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [cosupervisor, setCoSupervisor] = useState("");
    const [panel, setPanel] = useState("");



    useEffect(() => {

    }, [])


    return (

        <div>
            <Modal.Header>
                <Modal.Title>Update Panel Allocation</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={user.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="group">Group Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={groupID} onChange={(e) => { setGroupID(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="groupName">Group Name</label>
                                    <input type="text" class="form-control" id="groupName" placeholder="Group Name" value={groupName} onChange={(e) => { setGroupName(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="research">Research Details </label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="researchTopic">Research Topic</label>
                                    <input type="text" class="form-control" id="researchTopic" placeholder="Topic" value={topic} onChange={(e) => { setTopic(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="researchField">Research Field</label>
                                    <input type="text" class="form-control" id="researchField" placeholder="Field" value={field} onChange={(e) => { setField(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="staff">Staff Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="supervisor">Supervisor</label>
                                    <input type="text" class="form-control" id="supervisor" placeholder="Supervisor" value={supervisor} onChange={(e) => { setSupervisor(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="cosupervisor">Co-Supervisor</label>
                                    <input type="text" class="form-control" id="cosupervisor" placeholder="Co-Supervisor" value={cosupervisor} onChange={(e) => { setCoSupervisor(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label class="update-font" for="customer">Panel Details</label>
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="panel">Panel</label>
                                    <select class="form-select" className="form-control" name="panel" id="panel" value={panel} onChange={(e) => { setPanel(e.target.value) }}>
                                        <option  >Select Panel</option>
                                        <option id="1" >Panel One</option>
                                        <option id="2" >Panel Two</option>
                                        <option id="3" >Panel Three</option>
                                        <option id="4" >Panel Four</option>
                                        <option id="5" >Panel Five</option>
                                    </select>
                                </div>


                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={() => { onSubmit() }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={user.onHide} />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default UpdateRGPanel