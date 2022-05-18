import React from 'react'
import { saveAs } from "file-saver";
import '../styles/usersList.styles.scss'

export const Section = (props) => {

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
                                    return (
                                        <tr onClick={() => download(link)} key={link + Math.random()} >
                                            <td>{link}</td>
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