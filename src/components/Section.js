import React, { useEffect } from 'react'
import { saveAs } from "file-saver";
import '../styles/usersList.styles.scss'
import { getAllTemplate } from '../services/template.service';

export const Section = (props) => {

    let value = 0

    const download = (link) => {
        console.log(link)
        saveAs(
            link,
            "example.pdf"
        );
    }


    return (
        <>
            <hr></hr>
            <div className='content'>
                <div className='section-view'>
                    <div className='vertical-line'>
                        <div className='section-heading'>
                            {props.headline}
                        </div>

                        <table className='download-links-list mt-3'>

                            <tbody >
                                {props.links.map((link) => {
                                    value = value + 1
                                    return (

                                        <tr onClick={() => download(link.template)} key={link + Math.random()} >
                                            <td><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><strong className="ml-2"><span className="viewAssessmentLink"  > Download from link {value}</span></strong></td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>


                    </div>

                </div>
            </div>
        </>
    )
}