import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Navigationbar } from '../components/Navigationbar'
import { LandingPage } from '../pages/LandingPage'
import { TestPage } from '../pages/TestPage'
import { StudentSignUp } from '../pages/student/StudentSignup'
import Login from '../pages/student/Login'
import StaffSignup from '../pages/staff/staffSignup'
import StudentGroupRegister from '../pages/student/StudentGroupRegister'

export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                    <Route exact path='/studentSignup' element={< StudentSignUp />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/staffSignup' element={<StaffSignup />} />
                    <Route exact path='/group-registration' element={<StudentGroupRegister />} />
                </Routes>
            </Router>
        </>
    )
}
