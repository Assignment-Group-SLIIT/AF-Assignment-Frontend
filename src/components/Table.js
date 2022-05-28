import React, { useEffect, useState } from 'react'

function Tables(props) {


    const [members, setMembers] = useState([])

    useEffect(() => {
        setMembers(props?.members?.student)
    }, [])


    return (

        <table className="table table-hover">

            <thead>
                <tr>
                    <th className='text'>Student</th>
                    <th className='text'>ID</th>
                    <th className='text'>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='text'>{members?.leader?.name}</td>
                    <td className='text'>{members?.leader?.registrationNo}</td>
                    <td className='text'>{members?.leader?.email}</td>
                </tr>
                <tr>
                    <td className='text'>{members?.member01?.name}</td>
                    <td className='text'>{members?.member01?.registrationNo}</td>
                    <td className='text'>{members?.member01?.email}</td>
                </tr>
                <tr>
                    <td className='text'>{members?.member02?.name}</td>
                    <td className='text'>{members?.member02?.registrationNo}</td>
                    <td className='text'>{members?.member02?.email}</td>
                </tr>
                <tr>
                    <td className='text'>{members?.member03?.name}</td>
                    <td className='text'>{members?.member03?.registrationNo}</td>
                    <td className='text'>{members?.member03?.email}</td>
                </tr>
            </tbody>
        </table>
    )


}

export default Tables