import React from 'react'
import { RippleButton } from '../../components/RippleButton'


export const RequestTopic = () => {


    return (
        <div className='body-content-container'>
        <div className="container-border">
            <h3> Request Supervisor to register topic</h3>
            
            <br /> 
            <hr />
            <br /> 
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group ">
                        <label for="teamID">Team ID </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Team ID" 
                            id="teamID" 
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                    </div>
                </div>
            </div>
            <br />
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group ">
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
            <br />
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group">
                        <label for="topic">Research Topic </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Research topic" 
                            id="topic" 
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                    </div>
                </div>
            </div>
            <br />
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group">
                        <label for="field">Research Field </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Research field" 
                            id="field" 
                            // value={reserverName} 
                            // onChange={(e) => { setReserverName(e.target.value) }} 
                            />
                    </div>
                </div>
            </div>
            <br />
            <div className="row mb-2">
                <div className="col">
                    <div className="form-group">
                        <label for="supervisor">Supervisor </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Supervisor" 
                            id="supervisor" 
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
