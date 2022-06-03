import React, { useEffect, useState } from 'react';
import { Tooltip, LineChart, AreaChart, Area, CartesianGrid, Tooltip, Legend, Line, YAxis, XAxis } from 'recharts';
import { getAllGroup } from '../services/group.service';
import { getAllPanels } from '../services/panel.service';

const LineCharts = () => {

    //panels
    const [AI, setAI] = useState([]);
    const [IoT, setIoT] = useState([]);
    const [ES, setES] = useState([]);
    const [SE, setSE] = useState([])
    const [CN, setCN] = useState([]);
    const [DS, setDS] = useState([]);
    const [state, setState] = useState(false)

    //student groups
    const [sAI, setsAI] = useState([]);
    const [sIoT, setsIoT] = useState([]);
    const [sES, setsES] = useState([]);
    const [sSE, setsSE] = useState([])
    const [sCN, setsCN] = useState([]);
    const [sDS, setsDS] = useState([]);

    useEffect(() => {
        setState(true)
    }, [])

    useEffect(() => {
        getAllPanels().then(res => {
            if (res.ok) {
                setAI(res.data.filter(element => { return (element.FieldOfInterest == "Artificial Intellgence (AI)") }))
                setIoT(res.data.filter(element => { return (element.FieldOfInterest == "Internet of Things (IoT)") }))
                setES(res.data.filter(element => { return (element.FieldOfInterest == "Embedded Systems (ES)") }))
                setSE(res.data.filter(element => { return (element.FieldOfInterest == "Software Engineering (SE)") }))
                setCN(res.data.filter(element => { return (element.FieldOfInterest == "Computer Networks (CN)") }))
                setDS(res.data.filter(element => { return (element.FieldOfInterest == "Data Science (DS)") }))

            } s
        }).catch(err => {
            console.error(err)
        })

        getAllGroup().then(res => {
            if (res.ok) {
                setsAI(res.data.data.filter(element => { return (element.researchField == "Artificial Intellgence (AI)") }))
                setsIoT(res.data.data.filter(element => { return (element.researchField == "Internet of Things (IoT)") }))
                setsES(res.data.data.filter(element => { return (element.researchField == "Embedded Systems (ES)") }))
                setsSE(res.data.data.filter(element => { return (element.researchField == "Software Engineering (SE)") }))
                setsCN(res.data.data.filter(element => { return (element.researchField == "Computer Networks (CN)") }))
                setsDS(res.data.data.filter(element => { return (element.researchField == "Data Science (DS)") }))

            }
        }).catch(err => {
            console.error(err)
        })



    }, [state])




    const data = [
        {
            "name": "AI",
            "panels": AI.length * 100 || 200,
            "students": sAI.length * 100 || 100,

        },
        {
            "name": "IoT",
            "panels": IoT.length * 100 || 100,
            "students": sIoT.length * 100 || 100,

        },
        {
            "name": "ES",
            "panels": ES.length * 100 || 100,
            "students": sES.length * 100 || 100,

        },
        {
            "name": "SE",
            "panels": SE.length * 100 || 100,
            "students": sSE.length * 100 || 100,
            "amt": 2000
        },
        {
            "name": "CN",
            "panels": CN.length * 100 || 200,
            "students": sCN.length * 100 || 100,

        },
        {
            "name": "DS",
            "panels": DS.length * 100 || 100,
            "students": sDS.length * 100 || 100,

        },
    ]

    console.log()

    return (
        <div className='chart2'>

            <p className='headline-chart'>Panels and Student Group Research Fields</p>

            <br></br>
            <AreaChart width={700} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="students" stroke="#AA336A" fill="#AA336A" />
                <Area type="monotone" dataKey="panels" stroke="#800020" fill="#d580ff" />
            </AreaChart>
        </div>

    )


}

export default LineCharts;
