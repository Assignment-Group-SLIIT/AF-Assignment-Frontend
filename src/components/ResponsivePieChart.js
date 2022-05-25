import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Sector } from 'recharts';
import { getAllProjectProposal } from '../services/projectProposal.service';

export default ResponsivePieChart = () => {

    // const data = props.data;
    // const name = props.header;
    // const fill = props.color;

    useEffect(() => {
        getAllProjectProposal().then(res => {
            if (res.ok) {

            }
        }).catch(err => {

        })
    }, [])


    return (
        <div className='pie-chart'>
            <center>
                <h5> <strong>{name}</strong></h5>
            </center>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label
                        />

                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

}
