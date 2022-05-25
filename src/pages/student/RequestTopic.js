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

    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [topic, setTopic] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [field, setField] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [supervisor, setSupervisor] = useState({ value: "", error: "This field cannot be empty", isError: false })

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user.groupId != "") {
            setGroupId(user.groupId)
        }
    }, [])

    useEffect(() => {

        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false })
        topic.value === "" ? setTopic({ ...topic, isError: true }) : setTopic({ ...topic, isError: false })
        field.value === "" ? setField({ ...field, isError: true }) : setField({ ...field, isError: false })
        supervisor.value === "" ? setSupervisor({ ...supervisor, isError: true }) : setSupervisor({ ...supervisor, isError: false })

    }, [email.value, topic.value, field.value, supervisor.value])

    const onSubmit = () => {
        const payload = {
            groupId,
            email: email.value,
            researchTopic: topic.value,
            researchField: field.value,
            supervisor: supervisor.value.fullname
        }

        if (!email.isError && !topic.isError && !field.isError && !supervisor.isError) {
            console.log("payload>>", payload)
        }
    }

    useEffect(() => {
        getAllUsers().then((res) => {
            if (res.ok) {
                let tmpArr = res.data.filter((item) => {
                    // return item.role === "Supervisor";
                    return item.role === "Panel";
                })
                setAllUsers(tmpArr)
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
                                value={email.value}
                                onChange={(e) => { setEmail({ ...email, value: e.target.value }) }}
                            />
                            {email.isError && <small className='text-danger'>{email.error}</small>}
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
                                value={topic.value}
                                onChange={(e) => { setTopic({ ...topic, value: e.target.value }) }}
                            />
                            {topic.isError && <small className='text-danger'>{topic.error}</small>}
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
                                value={field.value}
                                onChange={(e) => { setField({ ...field, value: e.target.value }) }}
                            />
                            {field.isError && <small className='text-danger'>{field.error}</small>}
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="supervisor">Supervisor </label>
                            <Autocomplete

                                id="supervisor"
                                options={allUsers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}
                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.fullname || ""}
                                value={supervisor.value}
                                onChange={(_event, name) => {
                                    setSupervisor({ ...supervisor, value: name });
                                }}
                                size="small"

                            />
                            {supervisor.isError && <small className='text-danger'>{supervisor.error}</small>}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <RippleButton className="ripple-button " text="submit" onClick={() => {
                        onSubmit()
                    }} />
                </div>

            </div>
        </div >
    )
}
