import React from 'react'
import { RippleButton } from '../components/RippleButton'


export const TestPage = () => {

    const onSubmit = () => {
        console.log("clicked the button")
    }

    return (
        <div className='body-content-container'>
            <div className="container-border">
                <RippleButton className="ripple-button" text="submit" onClick={() => { onSubmit() }} />
                <RippleButton className="ripple-button-warning" text="cancel" onClick={() => { onSubmit() }} />
                <RippleButton className="ripple-button-danger" text="no" onClick={() => { onSubmit() }} />
            </div>
        </div >
    )
}
