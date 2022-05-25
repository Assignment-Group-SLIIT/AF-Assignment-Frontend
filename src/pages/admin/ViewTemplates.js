import React, { useEffect, useState } from 'react'
import { Section } from '../../components/Section'
import { getAllTemplate } from '../../services/template.service'
import '../../styles/usersList.styles.scss'
import toastNotification from '../../components/toastNotification'

export const ViewTemplates = () => {


    const [presentationTemp, setPresentationTemp] = useState([])
    const [progressTemp, setProgressTemp] = useState([])
    const [technicalTemp, setTechnicalTemp] = useState([])
    const [finalTemp, setFinalTemp] = useState([])

    useEffect(() => {
        getAllTemplate().then(res => {
            if (res.ok) {
                // toastNotification("Retrieveing templates", "success")
                console.log("DATAAA", res.data.data)

                setPresentationTemp(res.data.data.filter(element => {
                    return (
                        element.submissionType == 'Submission One'
                    )
                }))

                setProgressTemp(res.data.data.filter(element => {
                    return (
                        element.submissionType == 'Submission Two'
                    )
                }));
                setTechnicalTemp(res.data.data.filter(element => {
                    return (
                        element.submissionType == 'Submission Three'
                    )
                }));
                setFinalTemp(res.data.data.filter(element => {
                    return (
                        element.submissionType == 'Submission Four'
                    )
                }));

            } else {
                toastNotification("Could not retrieve templates", "warn")
            }
        }).catch(err => {
            toastNotification("Error", "error")
        })
    }, [])





    return (
        <div className='body-content-container'>
            <div className='view-templates'>
                <h2>Download Templates</h2>
                <Section headline={'Presentation Templates'} links={presentationTemp} />
                <Section headline={'Progress Evaluation Templates'} links={progressTemp} />
                <Section headline={'Technical Report Templates'} links={technicalTemp} />
                <Section headline={'Final Thesis Templates'} links={finalTemp} />

            </div>

        </div>
    )


}