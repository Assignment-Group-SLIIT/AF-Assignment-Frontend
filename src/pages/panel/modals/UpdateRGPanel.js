import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FormSection } from "../../../components/FormSection";
import { RippleButton } from "../../../components/RippleButton";
import toastNotification from "../../../components/toastNotification";
import { updateGroup } from "../../../services/group.service";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "../../../styles/usersList.styles.scss"
import { getAllPanels } from "../../../services/panel.service";

function UpdateRGPanel(group) {

    const panelOption = [];
    const [panelOptions, setPanelOptions] = useState([]);
    const [panelListOptions, setPanelListOptions] = useState([]);
    const [state, setState] = useState(false);

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

        getAllPanels().then(res => {
            console.log(res.data)
            if (res.ok) {
                setPanelListOptions(res.data)
                setState(true)
            } else {
                toastNotification("Cannot load the panels to allocate", "warn")
            }

        }).catch(err => {
            toastNotification("Error", "error")
        })

    }, [])

    useEffect(() => {
        setPanelOptions(createPanelMembers())
    }, [state])

    const createPanelMembers = () => {
        let value = -1;
        panelListOptions.map(panel => {
            value = Number(value + 1)
            let pMember = {
                id: value,
                name: String(panel.panelNumber)
            }
            panelOption.push(pMember);

        })
        return panelOption;
    }



    const allocatePanel = (e) => {
        e.preventDefault()

        const updateResearchGroup = {
            groupId: groupID,
            student: group.data.student,
            supervisor: supervisor,
            coSupervisor: cosupervisor,
            researchTopic: topic,
            researchField: field,
            panelNo: panel.name
        }

        updateGroup(groupID, updateResearchGroup).then(res => {
            console.log(res)
            if (res.ok) {
                toastNotification("Allocated a panel", "success")
                setTimeout(function () {
                    refreshPage();
                }, 2000);

            } else {
                toastNotification("Could not allocate a panel", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

    }

    function refreshPage() {

        window.location.reload();
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

                                <FormSection headline={'Group Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="groupID">Group ID</label>
                                    <label type="text" class="form-control" id="groupID"><strong>{groupID}</strong></label>

                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="leader">Group Leader</label>
                                    <label type="text" class="form-control" id="leader"><strong>{leader}</strong></label>

                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">

                                <FormSection headline={'Research Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="researchTopic">Research Topic</label>
                                    <label type="text" class="form-control" id="researchTopic"><strong>{topic}</strong></label>

                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="researchField">Research Field</label>
                                    <label type="text" class="form-control" id="researchTopic"><strong>{field}</strong></label>

                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">

                                <FormSection headline={'Staff Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col-6">
                                    <label className="form-pad" for="supervisor">Supervisor</label>
                                    <label type="text" class="form-control" id="supervisor"><strong>{supervisor}</strong></label>

                                </div>
                                <div class="col-6">
                                    <label className="form-pad" for="cosupervisor">Co-Supervisor</label>
                                    <label type="text" class="form-control" id="cosupervisor"><strong>{cosupervisor}</strong></label>

                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">

                                <FormSection headline={'Panel Details'} />
                            </div>
                            <br></br>
                            <div class="row">
                                <div class="col">
                                    <label className="form-pad" for="panel">Panel</label>
                                    <Autocomplete
                                        id="panel"
                                        options={panelOptions}
                                        renderInput={params => (
                                            <TextField {...params} variant="outlined" />
                                        )}
                                        getOptionSelected={(option, value) => option.id === value.id}
                                        getOptionLabel={option => option.name || panel}
                                        value={panel}
                                        onChange={(_event, panel) => {
                                            setPanel(panel);
                                        }}
                                        size="small"
                                    />
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