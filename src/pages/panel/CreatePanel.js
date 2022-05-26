import React, { useEffect, useState } from 'react'
import { RippleButton } from "../../components/RippleButton";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../../styles/usersList.styles.scss'
import { nanoid } from 'nanoid'
import { getAllUsers, updateUser } from '../../services/user.service';
import { createPanel, getAllPanels } from '../../services/panel.service';
import toastNotification from '../../components/toastNotification';
import { FormSection } from '../../components/FormSection';


export const CreatePanel = () => {

    const panelMember = [];
    const [panelMembers, setPanelMembers] = useState([]);
    const [panels, setPanels] = useState([]);

    const [field, setField] = useState("");
    const [state, setState] = useState(false);
    const [stateTwo, setStateTwo] = useState(false);
    const [panelList, setPanelList] = useState([]);
    const [panelNumber, setPanelNumber] = useState(null);
    const [selectedMember1, setSelectedMember1] = useState(null);
    const [selectedMember2, setSelectedMember2] = useState(null);
    const [selectedMember3, setSelectedMember3] = useState(null);
    const [selectedMember4, setSelectedMember4] = useState(null);


    //error state management
    const [errfield, setErrField] = useState(true);
    const [errselectedMember1, setErrSelectedMember1] = useState(true);
    const [errselectedMember2, setErrSelectedMember2] = useState(true);
    const [errselectedMember3, setErrSelectedMember3] = useState(true);
    const [errselectedMember4, setErrSelectedMember4] = useState(true);



    const [close, setClose] = useState(false)
    const [id, setId] = useState({})

    let array = []

    useEffect(() => {
        getAllUsers().then(response => {
            console.log("usersssssss", response)
            if (response.ok) {
                setPanelList(response.data.filter(el => {
                    return (
                        el.role == 'Panel' && el.isAvailable == true
                    )
                }));

                setState(true)

            } else {
                toastNotification("Cannot load the panel members", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })

        getAllPanels().then(res => {
            if (res.ok)
                setPanels(res.data)
            setPanelNumber(Number((res.data[res.data.length - 1]?.panelNumber) + 1))
        })



    }, [])

    useEffect(() => {
        setPanelMembers(createPanelMembers())
        array = panelList;

    }, [state, field])

    // useEffect(() => {
    //     setPanelMembers(panelMembers.filter(mem => mem.field == field));

    // }, [field])



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


    const removeMember = (member) => {
        const object = {
            id: member.id,
            name: member.name

        }

        setPanelMembers(panelMembers.filter(mem => mem.id != member.id));
        setId(object)
    }

    const getMember1 = () => {
        // if (close)
        //     panelMembers.push(id)
        // setPanelMembers(removeDuplicateObjects(panelMembers))

        console.log(panelMembers)
    }




    const handleClose = () => {
        setClose(true)
        getMember1()
    }




    const createNewPanel = (e) => {

        e.preventDefault()

        console.log(field, selectedMember1, selectedMember2, selectedMember3, selectedMember4)

        if (field == null || selectedMember1 == null || selectedMember2 == null || selectedMember3 == null || selectedMember4 == null) {
            toastNotification("Please Make Sure filled all the required fields", "warn")
        } else {
            const panel = {
                panelId: nanoid(4),
                panelNumber: panelNumber,
                member1: selectedMember1.name,
                member2: selectedMember2.name,
                member3: selectedMember3.name,
                member4: selectedMember4.name,
                FieldOfInterest: field,
            }

            const user1 = {
                fullname: panelList[0].fullname,
                email: panelList[0].email,
                contactNo: panelList[0].contactNo,
                role: panelList[0].role,
                isAvailable: false,
                department: panelList[0].department,
                field: panelList[0].department
            }

            const user2 = {
                fullname: panelList[1].fullname,
                email: panelList[1].email,
                contactNo: panelList[1].contactNo,
                role: panelList[1].role,
                isAvailable: false,
                department: panelList[1].department,
                field: panelList[1].department
            }

            const user3 = {
                fullname: panelList[2].fullname,
                email: panelList[2].email,
                contactNo: panelList[2].contactNo,
                role: panelList[2].role,
                isAvailable: false,
                department: panelList[2].department,
                field: panelList[2].department
            }
            const user4 = {
                fullname: panelList[3].fullname,
                email: panelList[3].email,
                contactNo: panelList[3].contactNo,
                role: panelList[3].role,
                isAvailable: false,
                department: panelList[3].department,
                field: panelList[3].department
            }

            console.log(user1, user2)

            updateUser(user1.email, user1).then(res => {
                if (res.ok) {
                    updateUser(user2.email, user2).then(res => {
                        if (res.ok) {
                            updateUser(user3.email, user3).then(res => {
                                if (res.ok) {
                                    updateUser(user4.email, user4).then(res => {
                                        if (res.ok) {
                                            console.log("All member details updated")
                                            createPanel(panel).then(response => {
                                                // console.log(response)
                                                if (response.ok) {
                                                    // console.log(response)
                                                    toastNotification("Successfully created a panel", "success")
                                                    setField("")
                                                    setSelectedMember1("")
                                                    setSelectedMember2("")
                                                    setSelectedMember3("")
                                                    setSelectedMember4("")
                                                } else {
                                                    toastNotification("Could not create a panel", "warn")
                                                }
                                            }).catch(err => {
                                                toastNotification("Error", "error")
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
                else {
                    console.log("Error")
                }
            }).catch(err => {
                console.log(err)
            })
        }

    }

    function refreshPage(e) {
        e.preventDefault()
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
                            <input type="number" class="form-control" id="panelNo" placeholder="Panel ID" value={panelNumber} required disabled />
                        </div>
                        <div class="col-6">
                            <label className="form-pad" for="field">Field of Interest</label>

                            <select class="form-select" className="form-control" name="field" id="field" onChange={(e) => { setField(e.target.value); field != null ? setErrField(false) : setErrField(true) }} required>
                                <option  >Field</option>
                                <option id="Medical" >Medical</option>
                                <option id="Technology" >Technology</option>
                                <option id="Robotics" >Robotics</option>
                                <option id="ML" >Machine Learning</option>
                                <option id="FS" >Food Science</option>
                            </select>
                            {errfield ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
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
                                getOptionLabel={option => option.name || selectedMember1.name}
                                value={selectedMember1}
                                // onTouchCancelCapture={console.log(selectedMember1)}
                                onChange={(_event, member) => {
                                    setSelectedMember1(member);
                                    // getMember1()
                                    removeMember(member)
                                    member != null ? setErrSelectedMember1(false) : setErrSelectedMember1(true)
                                }}
                                onTouchCancelCapture={getMember1}
                                onClose={handleClose}
                                size="small"
                                required
                            />
                            {errselectedMember1 ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
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
                                getOptionLabel={option => option.name || selectedMember2.name}
                                value={selectedMember2}
                                onChange={(_event, member) => {
                                    setSelectedMember2(member);
                                    getMember1()
                                    removeMember(member)
                                    member != null ? setErrSelectedMember2(false) : setErrSelectedMember2(true)
                                }}
                                onClose={handleClose}
                                size="small"
                                required
                            />
                            {errselectedMember2 ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
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
                                getOptionLabel={option => option.name || selectedMember3.name}
                                value={selectedMember3}
                                onChange={(_event, member) => {
                                    setSelectedMember3(member);

                                    removeMember(member)
                                    member != null ? setErrSelectedMember3(false) : setErrSelectedMember3(true)
                                }}
                                onTouchCancelCapture={getMember1}
                                onClose={handleClose}
                                size="small"
                                required
                            />
                            {errselectedMember3 ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
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
                                getOptionLabel={option => option.name || selectedMember4.name}
                                value={selectedMember4}
                                onChange={(_event, member) => {
                                    setSelectedMember4(member);
                                    removeMember(member)
                                    member != null ? setErrSelectedMember4(false) : setErrSelectedMember4(true)

                                }}
                                onTouchCancelCapture={getMember1}
                                onClose={handleClose}
                                size="small"
                                required
                            />
                            {errselectedMember4 ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
                        </div>
                    </div>

                    <br></br>
                    <div className="row mb-4">
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button" text="Create" onClick={(e) => { createNewPanel(e) }} />

                        </div>
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button-warning" text="Cancel" onClick={(e) => refreshPage(e)} />

                        </div>
                    </div>
                </form>

            </div>

        </div>
    )


}