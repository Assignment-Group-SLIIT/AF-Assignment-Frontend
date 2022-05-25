import React, { useEffect, useState } from 'react'
import { RippleButton } from "../../components/RippleButton";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../../styles/usersList.styles.scss'
import { nanoid } from 'nanoid'
import { getAllUsers } from '../../services/user.service';
import { createPanel } from '../../services/panel.service';
import toastNotification from '../../components/toastNotification';
import { FormSection } from '../../components/FormSection';

export const CreatePanel = () => {

    const panelMember = [];
    const [panelMembers, setPanelMembers] = useState([]);

    const [field, setField] = useState("");
    const [state, setState] = useState(false);
    const [panelList, setPanelList] = useState([]);
    const [panelNumber, setPanelNumber] = useState(null);
    const [selectedMember1, setSelectedMember1] = useState(null);
    const [selectedMember2, setSelectedMember2] = useState(null);
    const [selectedMember3, setSelectedMember3] = useState(null);
    const [selectedMember4, setSelectedMember4] = useState(null);


    useEffect(() => {
        getAllUsers().then(response => {
            console.log("usersssssss", response)
            if (response.ok) {
                setPanelList(response.data.filter(el => {
                    return (
                        el.role == 'Panel'
                    )
                }));

                setState(true)

            } else {
                toastNotification("Cannot load the panel members", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })
    }, [])

    useEffect(() => {
        setPanelMembers(createPanelMembers())
    }, [state])

    const createPanelMembers = () => {
        let value = -1;
        panelList.map(member => {
            value = Number(value + 1)
            let pMember = {
                id: value,
                name: member.fullname
            }
            panelMember.push(pMember);

        })

        return panelMember;
    }




    const createNewPanel = (e) => {

        e.preventDefault()

        const panel = {
            panelId: nanoid(4),
            panelNumber: panelNumber,
            member1: selectedMember1.name,
            member2: selectedMember2.name,
            member3: selectedMember3.name,
            member4: selectedMember4.name,
            FieldOfInterest: field,
        }


        createPanel(panel).then(response => {
            // console.log(response)
            if (response.ok) {
                // console.log(response)
                toastNotification("Successfully created a panel", "success")
            } else {
                toastNotification("Could not create a panel", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })


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
                        {/* <div class="col-md-3">
                            <label class="create-panel" for="group">Panel Details</label>
                        </div> */}
                        <FormSection headline={'Panel Details'} />
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="col-6">
                            <label className="form-pad" for="panelNo">Panel Number</label>
                            <input type="number" class="form-control" id="panelNo" placeholder="Panel ID" onChange={(e) => { setPanelNumber(e.target.value) }} />
                        </div>
                        <div class="col-6">
                            <label className="form-pad" for="field">Field of Interest</label>

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
                                size="small"
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
                                size="small"
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
                                size="small"
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
                                size="small"
                            />
                        </div>
                    </div>

                    <br></br>
                    <div className="row mb-4">
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button" text="Create" onClick={(e) => { createNewPanel(e) }} />

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