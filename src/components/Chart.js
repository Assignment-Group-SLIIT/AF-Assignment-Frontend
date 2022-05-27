import React, { useEffect, useState } from 'react';
import { Tooltip, FunnelChart, Funnel, LabelList } from 'recharts';
import { getAllProjectProposal } from '../services/projectProposal.service';


const Chart = () => {

    const [AI, setAI] = useState([]);
    const [IoT, setIoT] = useState([]);
    const [ES, setES] = useState([]);
    const [SE, setSE] = useState([])
    const [CN, setCN] = useState([]);
    const [DS, setDS] = useState([]);
    const [state, setState] = useState(false)


    useEffect(() => {
        setState(true)
    }, [])

    useEffect(() => {
        getAllProjectProposal().then(res => {
            if (res.ok) {
                setAI(res.data.data.filter(element => {
                    return (
                        element.field == "Artificial Intellgence (AI)"
                    )
                }))
                setIoT(res.data.data.filter(element => {
                    return (
                        element.field == "Internet of Things (IoT)"
                    )
                }))
                setES(res.data.data.filter(element => {
                    return (
                        element.field == 'Embedded Systems (ES)'
                    )
                }))
                setSE(res.data.data.filter(element => {
                    return (
                        element.field == 'Software Engineering (SE)'
                    )
                }))
                setCN(res.data.data.filter(element => {
                    return (
                        element.field == 'Computer Networks (CN)'
                    )
                }))
                setDS(res.data.data.filter(element => {
                    return (
                        element.field == 'Data Science (DS)'
                    )
                }))

            }
        }).catch(err => {
            console.error(err)
        })
    }, [state])



    const data = [
        {
            "value": AI.length * 100 || 100,
            "name": "Artificial Intellgence (AI)",
            "fill": "#5a0047"
        },
        {
            "value": IoT.length * 100 || 100,
            "name": "Internet of Things (IoT)",
            "fill": "#800065"
        },
        {
            "value": ES.length * 100 || 100,
            "name": "Embedded Systems (ES)",
            "fill": "#ffbff2"
        },
        {
            "value": SE.length * 100 || 100,
            "name": "Software Engineering (SE)",
            "fill": "#ff80e4"
        },
        {
            "value": CN.length * 100 || 100,
            "name": "Computer Networks (CN)",
            "fill": "#ffbff2"
        },
        {
            "value": DS.length * 100 || 100,
            "name": "Data Science (DS)",
            "fill": "#ff80e4"
        },
    ]

    return (
        <div className='chart'>
            <p className='headline-chart'>Research Proposal Fields 2022</p>

            <br></br>
            <FunnelChart width={730} height={250}>
                <Tooltip />
                <Funnel
                    dataKey="value"
                    data={data}
                    isAnimationActive
                >
                    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                </Funnel>
            </FunnelChart>
        </div>
    )


}

export default Chart;
