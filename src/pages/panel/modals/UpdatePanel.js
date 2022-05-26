import React, { useEffect, useState } from 'react'
import { RippleButton } from '../../../components/RippleButton';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../../../styles/usersList.styles.scss'
import { getAllUsers, searchUser, updateUser } from '../../../services/user.service';
import { updatePanel } from '../../../services/panel.service';
import toastNotification from '../../../components/toastNotification';
import { Modal } from "react-bootstrap";
import { FormSection } from '../../../components/FormSection';

export const UpdatePanel = (props) => {

    // console.log(props.data)

    const panelMember = [];
    const [panelMembers, setPanelMembers] = useState([]);

    const [field, setField] = useState("");
    const [state, setState] = useState(false);
    const [panelList, setPanelList] = useState([]);
    const [panelId, setPanelId] = useState(null);
    const [panelNumber, setPanelNumber] = useState(null);
    const [selectedMember1, setSelectedMember1] = useState(null);
    const [selectedMember2, setSelectedMember2] = useState(null);
    const [selectedMember3, setSelectedMember3] = useState(null);
    const [selectedMember4, setSelectedMember4] = useState(null);


    //error state management
    const [errfield, setErrField] = useState(false);
    const [errselectedMember1, setErrSelectedMember1] = useState(false);
    const [errselectedMember2, setErrSelectedMember2] = useState(false);
    const [errselectedMember3, setErrSelectedMember3] = useState(false);
    const [errselectedMember4, setErrSelectedMember4] = useState(false);

    //update panel member 
    const [searchMem1, setSearchMem1] = useState(null);
    const [searchMem2, setSearchMem2] = useState(null);
    const [searchMem3, setSearchMem3] = useState(null);
    const [searchMem4, setSearchMem4] = useState(null);


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
        setDetails()
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

    const setDetails = () => {
        setPanelId(props?.data?.panelId)
        setPanelNumber(props?.data?.panelNumber)
        setField(props?.data?.FieldOfInterest)
        setSelectedMember1(props?.data?.member1)
        setSelectedMember2(props?.data?.member2)
        setSelectedMember3(props?.data?.member3)
        setSelectedMember4(props?.data?.member4)

        searchUser(props?.data?.member1).then(res => {
            console.log("1", res)
            if (res.ok) {
                setSearchMem1(res.data)
            }
        }).catch(err => {
            console.log(err)
        })

        searchUser(props?.data?.member2).then(res => {
            console.log("2", res)
            if (res.ok) {
                setSearchMem2(res.data)
            }
        }).catch(err => {
            console.log(err)
        })

        searchUser(props?.data?.member3).then(res => {
            console.log("3", res)
            if (res.ok) {
                setSearchMem3(res.data)
            }
        }).catch(err => {
            console.log(err)
        })

        searchUser(props?.data?.member4).then(res => {
            console.log("4", res)
            if (res.ok) {
                setSearchMem4(res.data)
            }
        }).catch(err => {
            console.log(err)
        })

    }





    const updateNewPanel = (e) => {

        e.preventDefault()

        if (field == null || selectedMember1 == null || selectedMember2 == null || selectedMember3 == null || selectedMember4 == null) {
            toastNotification("Please Make Sure filled all the required fields", "warn")
        } else {

            if (props?.data?.member1 != selectedMember1) {
                const user1 = {
                    fullname: searchMem1.fullname,
                    email: searchMem1.email,
                    contactNo: searchMem1.contactNo,
                    role: searchMem1.role,
                    isAvailable: true,
                    department: searchMem1.department,
                    field: searchMem1.field
                }

                searchUser(selectedMember1.name).then(res => {
                    console.log("4", res)
                    if (res.ok) {
                        const user2 = {
                            fullname: res.data.fullname,
                            email: res.data.email,
                            contactNo: res.data.contactNo,
                            role: res.data.role,
                            isAvailable: false,
                            department: res.data.department,
                            field: res.data.field

                        }

                        updateUser(user1.email, user1).then(res => {
                            if (res.ok) {
                                console.log("update1", res)
                            }
                        }).catch(err => console.error(err))

                        updateUser(user2.email, user2).then(res => {
                            if (res.ok) {
                                console.log("update2", res)
                            }
                        }).catch(err => console.error(err))

                    }
                }).catch(err => {
                    console.log(err)
                })

            }

            if (props?.data?.member2 != selectedMember2) {
                const user3 = {
                    fullname: searchMem2.fullname,
                    email: searchMem2.email,
                    contactNo: searchMem2.contactNo,
                    role: searchMem2.role,
                    isAvailable: true,
                    department: searchMem2.department,
                    field: searchMem2.field
                }

                searchUser(selectedMember2.name).then(res => {
                    console.log("4", res)
                    if (res.ok) {
                        const user4 = {
                            fullname: res.data.fullname,
                            email: res.data.email,
                            contactNo: res.data.contactNo,
                            role: res.data.role,
                            isAvailable: false,
                            department: res.data.department,
                            field: res.data.field

                        }
                        updateUser(user3.email, user3).then(res => {
                            if (res.ok) {
                                console.log("update3", res)
                            }
                        }).catch(err => console.error(err))

                        updateUser(user4.email, user4).then(res => {
                            if (res.ok) {
                                console.log("update4", res)
                            }
                        }).catch(err => console.error(err))


                    }
                }).catch(err => {
                    console.log(err)
                })

            }

            if (props?.data?.member3 != selectedMember3) {
                const user5 = {
                    fullname: searchMem3.fullname,
                    email: searchMem3.email,
                    contactNo: searchMem3.contactNo,
                    role: searchMem3.role,
                    isAvailable: true,
                    department: searchMem3.department,
                    field: searchMem3.field
                }

                searchUser(selectedMember3.name).then(res => {
                    console.log("4", res)
                    if (res.ok) {
                        const user6 = {
                            fullname: res.data.fullname,
                            email: res.data.email,
                            contactNo: res.data.contactNo,
                            role: res.data.role,
                            isAvailable: false,
                            department: res.data.department,
                            field: res.data.field

                        }
                        updateUser(user5.email, user5).then(res => {
                            if (res.ok) {
                                console.log("update5", res)
                            }
                        }).catch(err => console.error(err))

                        updateUser(user6.email, user6).then(res => {
                            if (res.ok) {
                                console.log("update6", res)
                            }
                        }).catch(err => console.error(err))


                    }
                }).catch(err => {
                    console.log(err)
                })

            }

            if (props?.data?.member4 != selectedMember4) {
                const user7 = {
                    fullname: searchMem4.fullname,
                    email: searchMem4.email,
                    contactNo: searchMem4.contactNo,
                    role: searchMem4.role,
                    isAvailable: true,
                    department: searchMem4.department,
                    field: searchMem4.field
                }

                searchUser(selectedMember4.name).then(res => {
                    console.log("4", res)
                    if (res.ok) {
                        const user8 = {
                            fullname: res.data.fullname,
                            email: res.data.email,
                            contactNo: res.data.contactNo,
                            role: res.data.role,
                            isAvailable: false,
                            department: res.data.department,
                            field: res.data.field

                        }
                        updateUser(user7.email, user7).then(res => {
                            if (res.ok) {
                                console.log("update7", res)
                            }
                        }).catch(err => console.error(err))

                        updateUser(user8.email, user8).then(res => {
                            if (res.ok) {
                                console.log("update8", res)
                            }
                        }).catch(err => console.error(err))


                    }
                }).catch(err => {
                    console.log(err)
                })
            }

            const panel = {
                panelId: panelId,
                panelNumber: panelNumber,
                member1: selectedMember1.name,
                member2: selectedMember2.name,
                member3: selectedMember3.name,
                member4: selectedMember4.name,
                FieldOfInterest: field,
            }


            updatePanel(panelId, panel).then(response => {
                // console.log(response)
                if (response.ok) {
                    // console.log(response)
                    toastNotification("Successfully updated the panel", "success")
                } else {
                    toastNotification("Could not update the panel", "warn")
                }
            }).catch(err => {
                toastNotification("Error", "error")
            })

        }

    }

    function refreshPage(e) {
        e.preventDefault();
        window.location.reload();
    }






    return (
        <div >

            <Modal.Header onClick={props.onHide}>
                <Modal.Title>Update Panel Details</Modal.Title>
                <div>
                    <button className="btn btn-close"></button>
                </div>

            </Modal.Header>
            <Modal.Body className="px-4">
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
                            <input type="number" class="form-control" id="panelNo" placeholder="Panel ID" value={panelNumber} onChange={(e) => { setPanelNumber(e.target.value) }} disabled />
                        </div>
                        <div class="col-6">
                            <label className="form-pad" for="field">Field of Interest</label>

                            <select class="form-select" className="form-control" name="field" id="field" value={field} onChange={(e) => { setField(e.target.value); field != null ? setErrField(false) : setErrField(true) }}>
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
                                getOptionLabel={option => option.name || selectedMember1}
                                value={selectedMember1}
                                onChange={(_event, member) => {
                                    setSelectedMember1(member);
                                    member != null ? setErrSelectedMember1(false) : setErrSelectedMember1(true)
                                }}
                                size="small"
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
                                getOptionLabel={option => option.name || selectedMember2}
                                value={selectedMember2}
                                onChange={(_event, member) => {
                                    setSelectedMember2(member);
                                    member != null ? setErrSelectedMember2(false) : setErrSelectedMember2(true)
                                }}
                                size="small"
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
                                getOptionLabel={option => option.name || selectedMember3}
                                value={selectedMember3}
                                onChange={(_event, member) => {
                                    setSelectedMember3(member);
                                    member != null ? setErrSelectedMember3(false) : setErrSelectedMember3(true)
                                }}
                                size="small"
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
                                getOptionLabel={option => option.name || selectedMember4}
                                value={selectedMember4}
                                onChange={(_event, member) => {
                                    setSelectedMember4(member);
                                    member != null ? setErrSelectedMember4(false) : setErrSelectedMember4(true)
                                }}
                                size="small"
                            />
                            {errselectedMember4 ? <small className='text-danger'>Cannot keep this field empty</small> : ""}
                        </div>
                    </div>

                    <br></br>
                    <div className="row mb-4">
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button" text="Update" onClick={(e) => { updateNewPanel(e) }} />

                        </div>
                        <div className="col py-3 text-center">
                            <RippleButton className="ripple-button-warning" text="Cancel" onClick={(e) => refreshPage(e)} />

                        </div>
                    </div>
                </form>


            </Modal.Body >
        </div >
    )


}