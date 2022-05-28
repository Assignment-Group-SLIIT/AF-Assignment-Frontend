import React from 'react'
import '../styles/usersList.styles.scss'

export const SubHeaders = (props) => {

    return (
        <>

            <div className='section-view-subheader'>

                <center>
                    <strong>{props.headline}</strong>
                </center>


            </div>

        </>
    )
}