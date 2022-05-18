import React from 'react'
import { Section } from '../../components/Section'
import '../../styles/usersList.styles.scss'

export const ViewTemplates = () => {

    const links = ['https://cseweb.ucsd.edu/~schulman/docs/sigcomm19-weather.pdf', 'https://cseweb.ucsd.edu/~schulman/docs/sigcomm19-weather.pdf']

    return (
        <div className='body-content-container'>
            <div className='view-templates'>
                <h2>Download Templates</h2>
                <Section headline={'Presentation Templates'} links={links} />
                <Section headline={'Progress Evaluation Templates'} links={links} />
                <Section headline={'Technical Report Templates'} links={links} />
                <Section headline={'Final Thesis Templates'} links={links} />

            </div>

        </div>
    )


}