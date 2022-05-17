import React from 'react'
import { RippleButton } from '../../components/RippleButton'
import { Link, useNavigate } from 'react-router-dom'


export const PMTopicRequest = () => {

    const onSubmit = () => {
        console.log("clicked the button")
    }

    const navigate = useNavigate();

    return (
        <div className='body-content-container'>
            <div className="container-border">
                <h1> Group Request</h1>
                <br /> <br /> <br />
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                            <div className="searchbar">
                                <form
                                // onSubmit={(e) => searchRooms(e)}
                                >
                                    <input class="search_input" type="text" name="search" placeholder="Search..."
                                        // value={search}
                                        // onChange={(event) => { setSearch(event.target.value) }}
                                        require />
                                    <button class="pmtbtn search_icon" type="submit" id="submit" name="submit">
                                        <i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table className='table table-hover'>
                    <thead class="thead-dark">
                        <tr>
                            <th className='text'>Group ID</th>
                            <th className='text'>Leader Email</th>
                            <th className='text'>Reserch Topic</th>
                            <th className='text'>Research Field</th>
                            <th className='text'>Document</th>
                            <th className='text'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* return( */}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='text'>
                                <RippleButton className="ripple-button" text="submit" onClick={() => { navigate('/sendEmail') }} />
                                <RippleButton className="ripple-button-warning" text="cancel" />
                            </td>
                        </tr>
                        {/* ) */}
                    </tbody>
                </table>

            </div>
        </div >
    )
}
