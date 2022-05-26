import React, { useEffect, useState } from 'react';
import { Tooltip, LineChart, AreaChart, Area, CartesianGrid, Tooltip, Legend, Line, YAxis, XAxis } from 'recharts';
import { getAllGroup } from '../services/group.service';
import { getAllPanels } from '../services/panel.service';

const LineCharts = () => {

    //panels
    const [DS, setDS] = useState([]);
    const [SE, setSE] = useState([]);
    const [ML, setML] = useState([]);
    const [ICT, setICT] = useState([])
    const [Medical, setMedical] = useState([]);
    const [Health, setHealth] = useState([]);
    const [Robotcs, setRobotics] = useState([])
    const [state, setState] = useState(false)

    //student groups
    const [sDS, setsDS] = useState([]);
    const [sSE, setsSE] = useState([]);
    const [sML, setsML] = useState([]);
    const [sICT, setsICT] = useState([])
    const [sMedical, setsMedical] = useState([]);
    const [sHealth, setsHealth] = useState([]);
    const [sRobotcs, setsRobotics] = useState([])

    useEffect(() => {
        setState(true)
    }, [])

    useEffect(() => {
        getAllPanels().then(res => {
            if (res.ok) {
                setDS(res.data.filter(element => { return (element.FieldOfInterest == 'DS') }))
                setSE(res.data.filter(element => { return (element.FieldOfInterest == 'SE') }))
                setML(res.data.filter(element => { return (element.FieldOfInterest == 'ML') }))
                setICT(res.data.filter(element => { return (element.FieldOfInterest == 'ICT') }))
                setMedical(res.data.filter(element => { return (element.FieldOfInterest == 'Medical') }))
                setHealth(res.data.filter(element => { return (element.FieldOfInterest == 'Health') }))
                setRobotics(res.data.filter(element => { return (element.FieldOfInterest == 'Robotics') }))
            } s
        }).catch(err => {
            console.error(err)
        })

        getAllGroup().then(res => {
            if (res.ok) {
                setsDS(res.data.data.filter(element => { return (element.researchField == 'DS') }))
                setsSE(res.data.data.filter(element => { return (element.researchField == 'SE') }))
                setsML(res.data.data.filter(element => { return (element.researchField == 'ML') }))
                setsICT(res.data.data.filter(element => { return (element.researchField == 'ICT') }))
                setsMedical(res.data.data.filter(element => { return (element.researchField == 'hospital') }))
                setsHealth(res.data.data.filter(element => { return (element.researchField == 'Health') }))
                setsRobotics(res.data.data.filter(element => { return (element.researchField == 'Robotics') }))
            }
        }).catch(err => {
            console.error(err)
        })



    }, [state])




    const data = [
        {
            "name": "Medical",
            "panels": Medical.length * 100 || 300,
            "students": sMedical.length * 100 || 100,

        },
        {
            "name": "Health",
            "panels": Health.length * 100 || 100,
            "students": sHealth.length * 100 || 100,

        },
        {
            "name": "Robotics",
            "panels": Robotcs.length * 100 || 100,
            "students": sRobotcs.length * 100 || 100,

        },
        {
            "name": "SE",
            "panels": SE.length * 100 || 100,
            "students": sSE.length * 100 || 100,
            "amt": 2000
        },
        {
            "name": "ICT",
            "panels": ICT.length * 100 || 100,
            "students": sICT.length * 100 || 100,

        },
        {
            "name": "ML",
            "panels": ML.length * 100 || 100,
            "students": sML.length * 100 || 100,

        },
        {
            "name": "DS",
            "panels": DS.length * 100 || 100,
            "students": sDS.length * 100 || 100,

        }
    ]

    console.log()

    return (
        <div className='pie-chart'>
            <h3>Panels and Student Group Research Fields</h3>
            <br></br>
            <AreaChart width={730} height={250} data={data}
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
