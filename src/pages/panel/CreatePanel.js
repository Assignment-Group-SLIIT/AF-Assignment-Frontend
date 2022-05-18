import React, { useState } from 'react'
import { RippleButton } from "../../components/RippleButton";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../../styles/usersList.styles.scss'

export const CreatePanel = () => {
    const panelMembers = [{ id: 1, name: 'One' }, { id: 2, name: 'Two' }, { id: 3, name: 'Three' }, { id: 4, name: 'Four' }, { id: 5, name: 'Four' }]


    const [panelID, setPanelID] = useState("");
    const [field, setField] = useState("");
    const [selectedMember1, setSelectedMember1] = useState(null);
    const [selectedMember2, setSelectedMember2] = useState(null);
    const [selectedMember3, setSelectedMember3] = useState(null);
    const [selectedMember4, setSelectedMember4] = useState(null);

    const createPanel = (e) => {

        e.preventDefault()

        const panel = {
            panelID,
            field,
            selectedMember1,
            selectedMember2,
            selectedMember3,
            selectedMember4
        }

        console.log("panel>>>>>>>", panel)
    }

    function refreshPage() {
        window.location.reload();
    }


    return (
        <div className='body-content-container'>
            <div className='create-panel-form'>

                <h2>Create Panel</h2>
                <br></br>
                <form>
                    <div class="form-row">
                        <div class="col-md-3">
                            <label class="create-panel" for="group">Panel Details</label>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-6">
                            <label className="form-pad" for="panelNo">Panel Number</label>
                            <input type="number" class="form-control" id="panelNo" placeholder="Panel ID" onChange={(e) => { setPanelID(e.target.value) }} />
                        </div>
                        <div class="col-6">
                            <label className="form-pad" for="field">Field of Interset</label>

                            <select class="form-select" className="form-control" name="field" id="field" onChange={(e) => { setField(e.target.value) }}>
                                <option  >Field</option>
                                <option id="Medical" >Medical</option>
                                <option id="Technology" >Technology</option>
                                <option id="Robotics" >Robotics</option>
                                <option id="ML" >Machine Learning</option>
                                <option id="FS" >Food Science</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <label className="form-pad" for="panelNo">Panel Member 1</label>
                            <Autocomplete

                                id="panelmember1"
                                options={panelMembers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}

                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.name}
                                value={selectedMember1}
                                onChange={(_event, member) => {
                                    setSelectedMember1(member);
                                }}

                            />

                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <label className="form-pad" for="panelNo">Panel Member 2</label>
                            <Autocomplete
                                id="panelmember2"
                                options={panelMembers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}
                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.name}
                                value={selectedMember2}
                                onChange={(_event, member) => {
                                    setSelectedMember2(member);
                                }}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <label className="form-pad" for="panelNo">Panel Member 3</label>
                            <Autocomplete
                                id="panelmember3"
                                options={panelMembers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}
                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.name}
                                value={selectedMember3}
                                onChange={(_event, member) => {
                                    setSelectedMember3(member);
                                }}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col">
                            <label className="form-pad" for="panelNo">Panel Member 4</label>
                            <Autocomplete
                                id="panelmember4"
                                options={panelMembers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}
                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.name}
                                value={selectedMember4}
                                onChange={(_event, member) => {
                                    setSelectedMember4(member);
                                }}
                            />
                        </div>
                    </div>

                    <br></br>
                    <div className="row mb-4">
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button" text="Create" onClick={(e) => { createPanel(e) }} />

                        </div>
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button-warning" text="Cancel" onClick={refreshPage} />

                        </div>
                    </div>
                </form>

            </div>

        </div>
    )


}