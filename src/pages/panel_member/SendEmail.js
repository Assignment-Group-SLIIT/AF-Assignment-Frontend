import React from 'react'
import { RippleButton } from '../../components/RippleButton'


export const SendEmail = () => {

    const onSubmit = () => {
        console.log("clicked the button")
    }

    return (
        <div className='body-content-container-pm'>
            <div className="container-border-pm">
                <h1> presentation submission evaluation table</h1>
                
                <br /> <br /> 
                <h3>***Description***</h3>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group pminput">
                            <label for="email">Email </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="student Email address" 
                                id="email" 
                                // value={reserverName} 
                                // onChange={(e) => { setReserverName(e.target.value) }} 
                                />
                        </div>

                    </div>

                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-group">
                            <label for="link">Link </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="presentation link" 
                                id="link" 
                                // value={reserverName} 
                                // onChange={(e) => { setReserverName(e.target.value) }} 
                                />
                        </div>

                    </div>

                </div>
                <div className='sendEmail'>
                    <RippleButton className="ripple-button " text="submit"  />
                </div>

            </div>
        </div >
    )
}
