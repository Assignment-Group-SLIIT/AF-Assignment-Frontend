import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Navigationbar } from '../components/Navigationbar'
import { LandingPage } from '../pages/LandingPage'
import { TestPage } from '../pages/TestPage'

export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                </Routes>
            </Router>
        </>
    )
}
