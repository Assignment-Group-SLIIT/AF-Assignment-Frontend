import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { RippleButton } from '../../components/RippleButton'
import { getAllUsers } from '../../services/user.service';


export const RequestTopic = () => {
    const navigate = useNavigate()

    const [allUsers, setAllUsers] = useState([]);
    const [groupId, setGroupId] = useState("");

    const [supervisor, setSupervisor] = ("")

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user.groupId != "") {
            setGroupId(user.groupId)
        }
    }, [])

    useEffect(() => {
        getAllUsers().then((res) => {
            if (res.ok) {
                let tmpArr = res.data.filter((item) => {
                    return item.role === "Supervisor";
                    // return item.role === "Panel";
                })
                setAllUsers(tmpArr)
                console.log("tmp arr>>>", tmpArr)
            } else {
                console.log("error while fetching all users", err.err)
            }
        }).catch((err) => {
            console.log("error while fetching all users", err.err)
        })
    }, []);

    return (
        <div className='body-content-container'>
            <div className="container-border">
                <h3> Request Supervisor to register topic</h3>

                <br />
                <hr />
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group ">
                            <label for="teamID">Team ID </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Team ID"
                                id="teamID"
                                disabled
                                value={groupId}
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group ">
                            <label for="email">Email </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="student Email address"
                                id="email"
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="topic">Research Topic </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Research topic"
                                id="topic"
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="field">Research Field </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Research field"
                                id="field"
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="supervisor">Supervisor </label>
                            {/* <input
                                type="text"
                                className="form-control"
                                placeholder="Supervisor"
                                id="supervisor"
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            /> */}
                            <Autocomplete

                                id="supervisor"
                                options={allUsers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}

                                getOptionSelected={(option, value) => option._id === value._id}
                                getOptionLabel={option => option.fullname}
                                value={supervisor}
                                onChange={(_event, name) => {
                                    setSupervisor(name);
                                }}
                                size="small"

                            />
                        </div>
                    </div>
                </div>
                <div className='sendEmail'>
                    <RippleButton className="ripple-button " text="submit" />
                </div>

            </div>
        </div >
    )
}
