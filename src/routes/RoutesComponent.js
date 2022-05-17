import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Navigationbar } from '../components/Navigationbar'
import { LandingPage } from '../pages/LandingPage'
import { PMPresentationEvaluation } from '../pages/PanelMember/PMPresentationEvaluation'
import { PMTopicRequest } from '../pages/PanelMember/PMTopicRequest'
import { SendEmail } from '../pages/PanelMember/sendEmal'
import { TestPage } from '../pages/TestPage'


export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                    <Route exact path='/pmRequest' element={<PMTopicRequest />} />
                    <Route exact path='/pmEvaluation' element={<PMPresentationEvaluation />} />
                    <Route exact path='/sendEmail' element={<SendEmail />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
