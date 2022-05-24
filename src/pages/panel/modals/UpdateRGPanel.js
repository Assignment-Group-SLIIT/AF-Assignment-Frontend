import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FormSection } from "../../../components/FormSection";
import { RippleButton } from "../../../components/RippleButton";
import toastNotification from "../../../components/toastNotification";
import { updateGroup } from "../../../services/group.service";
import "../../../styles/usersList.styles.scss"

function UpdateRGPanel(group) {


    const [groupID, setGroupID] = useState("");
    const [leader, setLeader] = useState("");
    const [topic, setTopic] = useState("");
    const [field, setField] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [cosupervisor, setCoSupervisor] = useState("");
    const [panel, setPanel] = useState("");


    useEffect(() => {
        setGroupID(group.data.groupId)
        setLeader(group.data.student?.leader?.name)
        setTopic(group.data.researchTopic)
        setField(group.data.researchField)
        setSupervisor(group.data.supervisor)
        setCoSupervisor(group.data.coSupervisor)
        setPanel(group.data.panelNo)

    }, [])


    const allocatePanel = (e) => {
        e.preventDefault()

        const updateResearchGroup = {
            groupId: groupID,
            student: group.data.student,
            supervisor: supervisor,
            coSupervisor: cosupervisor,
            researchTopic: topic,
            researchField: field,
            panelNo: panel
        }


        console.log(updateResearchGroup)

        updateGroup(groupID, updateResearchGroup).then(res => {
            console.log(res)
            if (res.ok) {
                toastNotification("Allocated a panel to the research group successfully", "success")

            } else {
                toastNotification("Could not allocate a panel", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

    }


    return (

        <div>
            <Modal.Header>
                <Modal.Title>Update Panel Allocation</Modal.Title>
                <div>
                    <button className="btn btn-close" onClick={group.onHide}></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form >
                            <div class="form-row">
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="group">Group Details</label>
                                </div> */}
                                <FormSection headline={'Group Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <input type="text" class="form-control" id="groupID" placeholder="Group ID" value={groupID} onChange={(e) => { setGroupID(e.target.value) }} />
                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="leader">Group Leader</label>
                                    <input type="text" class="form-control" id="leader" placeholder="Group Leader" value={leader} onChange={(e) => { setLeader(e.target.value) }} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="research">Research Details </label>
                                </div> */}
                                <FormSection headline={'Research Details'} />
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
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="staff">Staff Details</label>
                                </div> */}
                                <FormSection headline={'Staff Details'} />
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
                                {/* <div class="col-md-3">
                                    <label class="update-font" for="customer">Panel Details</label>
                                </div> */}
                                <FormSection headline={'Panel Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="panel">Panel</label>
                                    <select class="form-select" className="form-control" name="panel" id="panel" value={panel} onChange={(e) => { setPanel(e.target.value) }}>
                                        <option  >Select Panel</option>
                                        <option id="001" >Panel One</option>
                                        <option id="002" >Panel Two</option>
                                        <option id="003" >Panel Three</option>
                                        <option id="004" >Panel Four</option>
                                        <option id="005" >Panel Five</option>
                                    </select>
                                </div>


                            </div>
                            <br></br>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button" text="Submit" onClick={(e) => { allocatePanel(e) }} />

                                </div>
                                <div className="col py-3 text-center">
                                    <RippleButton className="ripple-button-warning" text="Cancel" onClick={group.onHide} />

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