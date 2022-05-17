import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Navigationbar } from '../components/Navigationbar'
import { CreateSubmission } from '../pages/admin/CreateSubmission'
import { LandingPage } from '../pages/LandingPage'
import { TestPage } from '../pages/TestPage'
import { UserList } from '../pages/users/UserList'

export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                    <Route exact path='/createSubmission' element={<CreateSubmission />} />
                    <Route exact path='/userList' element={<UserList />} />

                </Routes>
            </Router>
        </>
    )
}
