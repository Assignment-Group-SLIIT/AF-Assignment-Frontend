import React from 'react'
import '../styles/usersList.styles.scss'

export const FormSection = (props) => {

    return (
        <>

            <div className='section-view'>
                <div className='vertical-line'>
                    <div className='section-heading'>
                        <strong>{props.headline}</strong>
                    </div>
                </div>

            </div>

        </>
    )
}