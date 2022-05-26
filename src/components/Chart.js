import React, { useEffect, useState } from 'react';
import { Tooltip, FunnelChart, Funnel, LabelList } from 'recharts';
import { getAllProjectProposal } from '../services/projectProposal.service';


const Chart = () => {

    const [DS, setDS] = useState([]);
    const [SE, setSE] = useState([]);
    const [ML, setML] = useState([]);
    const [ICT, setICT] = useState([])
    const [state, setState] = useState(false)


    useEffect(() => {
        setState(true)
    }, [])

    useEffect(() => {
        getAllProjectProposal().then(res => {
            if (res.ok) {
                setDS(res.data.data.filter(element => {
                    return (
                        element.field == 'DS'
                    )
                }))
                setSE(res.data.data.filter(element => {
                    return (
                        element.field == 'SE'
                    )
                }))
                setML(res.data.data.filter(element => {
                    return (
                        element.field == 'ML'
                    )
                }))
                setICT(res.data.data.filter(element => {
                    return (
                        element.field == 'ICT'
                    )
                }))

            }
        }).catch(err => {
            console.error(err)
        })
    }, [state])



    const data = [
        {
            "value": DS.length * 100,
            "name": "Data Science",
            "fill": "#5a0047"
        },
        {
            "value": ML.length * 100 || 100,
            "name": "Machine Learning",
            "fill": "#800065"
        },
        {
            "value": SE.length * 100 || 100,
            "name": "Software Engineering",
            "fill": "#ffbff2"
        },
        {
            "value": ICT.length * 100 || 100,
            "name": "ICT",
            "fill": "#ff80e4"
        },
    ]

    return (
        <div className='pie-chart'>
            <h2>Research Proposal Fields 2022</h2>
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
