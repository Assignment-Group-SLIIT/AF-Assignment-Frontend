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
                    <th>Member</th>
                    <th >Reg No</th>
                    <th >email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{members?.leader?.name}</td>
                    <td >{members?.leader?.registrationNo}</td>
                    <td >{members?.leader?.email}</td>
                </tr>
                <tr>
                    <td>{members?.member01?.name}</td>
                    <td >{members?.member01?.registrationNo}</td>
                    <td >{members?.member01?.email}</td>
                </tr>
                <tr>
                    <td>{members?.member02?.name}</td>
                    <td >{members?.member02?.registrationNo}</td>
                    <td >{members?.member02?.email}</td>
                </tr>
                <tr>
                    <td>{members?.member03?.name}</td>
                    <td >{members?.member03?.registrationNo}</td>
                    <td >{members?.member03?.email}</td>
                </tr>
            </tbody>
        </table>
    )


}

export default Tables