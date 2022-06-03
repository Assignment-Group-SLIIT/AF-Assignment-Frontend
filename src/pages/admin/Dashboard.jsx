import React, { useEffect, useState } from 'react'
import PieChartComp from '../../components/PieChartComp'
import { getAllRequestTopicsCoSupervisors } from '../../services/cosupervisorRequests.service';
import { getAllRequests, } from '../../services/supervisorRequests.service';
import { getAllTemplate } from '../../services/template.service';
import { getAllUsers } from '../../services/user.service'
import { getAllSubmissions } from '../../services/submission.service';
import Chart from '../../components/Chart';
import LineCharts from '../../components/LineChart'


export default Dashboard = () => {

    //pie chart details for users
    const [userData, setUserData] = useState([]);
    const [students, setStudents] = useState([]);
    const [supervisors, setSupervisors] = useState([]);
    const [coSupervisors, setCoSupervisor] = useState([]);
    const [PanelMembers, setPanelMembers] = useState([]);
    const [state, setState] = useState(false)

    //pie chart details regarding requests
    const [requetsData, setRequestData] = useState([]);
    const [supervisorRequests, setSupervisorRequests] = useState([]);
    const [coSupervisorRequests, setCoSupervisorRequests] = useState([]);
    const [stateTwo, setStateTwo] = useState(false)
    const [stateThree, setStateThree] = useState(false)

    //pie chart details for submissions and templates
    const [submissions, setSubmissionsData] = useState([]);
    const [evalSubmissions, setEvalSubmissions] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [stateFour, setStateFour] = useState(false)
    const [stateFive, setStateFive] = useState(false)


    useEffect(() => {
        retriveUsers();


    }, [])

    useEffect(() => {
        createUsersPieChart();
        retrieveRequests()
        retrieveDocs()
        createRequestsPieChart()

        docSubmissionsPieChart()
    }, [state, stateTwo, stateThree, stateFour, stateFive])



    const retriveUsers = () => {
        getAllUsers().then(res => {
            if (res.ok) {
                setStudents(res.data.filter(element => {
                    return (
                        element.role == 'Student'
                    )
                }))
                setSupervisors(res.data.filter(element => {
                    return (
                        element.role == 'Supervisor'
                    )
                }))
                setCoSupervisor(res.data.filter(element => {
                    return (
                        element.role == 'Co-Supervisor'
                    )
                }))
                setPanelMembers(res.data.filter(element => {
                    return (
                        element.role == 'Panel'
                    )
                }))
                setState(true)
            }
        }).catch(err => {
            console.error(err)
        })


    }

    const createUsersPieChart = () => {
        const users = [
            { name: 'Students', value: students.length },
            { name: 'Supervisors', value: supervisors.length },
            { name: 'Co-Supervisors', value: coSupervisors.length },
            { name: 'Panel Members', value: PanelMembers.length },
        ]
        setUserData(users);
    }

    const retrieveRequests = () => {
        // setState(false)
        getAllRequests().then(res => {
            res.ok ? setSupervisorRequests(res.data) : null
            setStateTwo(true)
        }).catch(err => {
            console.error(err)
        })

        getAllRequestTopicsCoSupervisors().then(res => {
            if (res.ok) {
                setCoSupervisorRequests(res.data.data)
                setStateThree(true)
            }

        }).catch(err => {
            console.error(err)
        })
    }

    const createRequestsPieChart = () => {
        const requests = [
            { name: 'Supervisors', value: supervisorRequests.length },
            { name: 'Co-Supervisors', value: coSupervisorRequests.length },
        ]
        setRequestData(requests);
    }

    const retrieveDocs = () => {
        getAllTemplate().then(res => {
            res.ok ? setTemplates(res.data.data) : null
            setStateFour(true)
        }).catch(err => {
            console.error(err)
        })

        getAllSubmissions().then(res => {
            res.ok ? setEvalSubmissions(res.data) : null
            setStateFive(true)
        })
    }

    const docSubmissionsPieChart = () => {
        const docs = [
            { name: 'templates', value: templates.length },
            { name: 'submissions', value: evalSubmissions.length },
        ]
        setSubmissionsData(docs);
    }


    return (
        <>
            <div>
                <div className='admin-body-content-container'>
                    <div className='admin-dash-top'>
                        <center>
                            <h2>System Overview</h2></center>
                        <div className="d-flex justify-content-around">
                            <PieChartComp data={userData} header={"System Users"} color={"#770737"} />
                            <PieChartComp data={requetsData} header={"Topic Requests"} color={"#AA336A"} />
                            <PieChartComp data={submissions} header={"Documents"} color={"#800020"} />
                        </div>
                    </div>

                </div>
                <div className='body-content-admin'>
                    <div className='view-admin'>
                        <div className="d-flex justify-content-around">
                            <Chart />
                            <LineCharts />
                        </div>
                    </div>
                </div>

            </div>

        </>

    )


}