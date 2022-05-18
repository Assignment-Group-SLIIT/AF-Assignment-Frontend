import React from 'react'
import '../styles/usersList.styles.scss'

export const Section = (props) => {
    return (
        <>
            <hr></hr>
            <div className='content'>
                <div className='section-view'>
                    <div className='vertical-line'>
                        <div className='section-heading'>
                            {props.headline}
                        </div>

                        <table className='download-links-list'>

                            <tbody>
                                {/* {rentalList.map((rental) => {
                                        return ( */}
                                <tr>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                </tr>
                                {/* ) */}
                            </tbody>
                        </table>


                    </div>

                </div>
            </div>
        </>
    )
}