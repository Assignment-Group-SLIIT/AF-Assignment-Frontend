import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { RippleButton } from '../../components/RippleButton'
import toastNotification from '../../components/toastNotification';
import { getAllUsers } from '../../services/user.service';
import { createRequestTopicsCoSupervisors } from '../../services/cosupervisorRequests.service';
import { getOneGroup } from '../../services/group.service';

export const RequestTopicCoSupervisor = () => {
    const navigate = useNavigate()

    const [allUsers, setAllUsers] = useState([]);
    const [groupId, setGroupId] = useState("");

    const [email, setEmail] = useState({ value: "", error: "This field cannot be empty", isError: false })
    const [topic, setTopic] = useState("")
    const [field, setField] = useState("")
    const [coSupervisor, setCoSupervisor] = useState({ value: "", error: "This field cannot be empty", isError: false })

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));

        if (user.groupId != "") {
            setGroupId(user?.groupId)
            getOneGroup(user?.groupId).then((res) => {
                if (res.ok) {
                    setTopic(res?.data?.researchTopic)
                    setField(res?.data?.researchField);
                } else {
                    console.log("error while getting group data")
                }
            }).catch((err) => {
                console.log("error while getting group data", err.error)
            })
        }
    }, [])

    useEffect(() => {

        email.value === "" ? setEmail({ ...email, isError: true }) : setEmail({ ...email, isError: false })
        coSupervisor.value === "" ? setCoSupervisor({ ...coSupervisor, isError: true }) : setCoSupervisor({ ...coSupervisor, isError: false })

    }, [email.value, coSupervisor.value])

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            groupId,
            email: email.value,
            researchTopic: topic,
            researchField: field,
            coSupervisor: coSupervisor.value.fullname
        }

        if (!email.isError && !coSupervisor.isError) {
            // console.log("payload>>", payload)
            createRequestTopicsCoSupervisors(payload).then((res) => {
                if (res.ok) {
                    toastNotification("Request has been sent successfully!", "success")
                    window.location.reload()
                } else {
                    toastNotification("Error occured!", "error")
                }
            }).catch((err) => {
                toastNotification("Error occured!", "error")
                console.log("error while registering>>", err.err)
            })
        } else {
            console.log("error")
        }
    }

    useEffect(() => {
        getAllUsers().then((res) => {
            if (res.ok) {
                let tmpArr = res.data.filter((item) => {
                    return item.role === "Co-Supervisor";
                    // return item.role === "Panel";
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
                <h3> Request a Co-Supervisor</h3>

                <br />
                <hr />
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="teamID">Team ID </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Team ID"
                                id="teamID"
                                disabled
                                value={groupId}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group ">
                            <label htmlFor="email">Email </label>
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
                            <label htmlFor="topic">Research Topic </label>
                            <input
                                disabled
                                type="text"
                                className="form-control"
                                placeholder="Research topic"
                                id="topic"
                                value={topic}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="field">Research Field </label>
                            <input
                                disabled
                                type="text"
                                className="form-control"
                                placeholder="Research topic"
                                id="topic"
                                value={field}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="supervisor">Co-Supervisor </label>
                            <Autocomplete

                                id="supervisor"
                                options={allUsers}
                                renderInput={params => (
                                    <TextField {...params} variant="outlined" />
                                )}
                                getOptionSelected={(option, value) => option.id === value.id}
                                getOptionLabel={option => option.fullname || ""}
                                value={coSupervisor.value}
                                onChange={(_event, name) => {
                                    setCoSupervisor({ ...coSupervisor, value: name });
                                }}
                                size="small"

                            />

                            {coSupervisor.isError && <small className='text-danger'>{coSupervisor.error}</small>}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <RippleButton className="ripple-button " text="submit" onClick={(e) => {
                        onSubmit(e)
                    }} />
                </div>

            </div>
        </div >
    )
}
