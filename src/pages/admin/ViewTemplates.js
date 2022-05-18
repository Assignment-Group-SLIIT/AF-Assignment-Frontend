import React from 'react'
import { Section } from '../../components/Section'
import '../../styles/usersList.styles.scss'

export const ViewTemplates = () => {
    return (
        <div className='body-content-container'>
            <div className='view-templates'>
                <h2>Download Templates</h2>
                <Section headline={'Presentation Templates'} />
                <Section headline={'Progress Evaluation Templates'} />
                <Section headline={'Technical Report Templates'} />
                <Section headline={'Final Thesis Templates'} />

            </div>

        </div>
    )


}