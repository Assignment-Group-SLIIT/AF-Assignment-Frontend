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

                        <table className='download-links-list'>

                            <tbody>
                                {props.links.map((link) => {
                                    value = value + 1
                                    return (

                                        <tr onClick={() => download(link.template)} key={link + Math.random()} >
                                            <td>Download from here link {value}</td>
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