import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Navigationbar } from '../components/Navigationbar'
import { LandingPage } from '../pages/LandingPage'
import { PMPresentationEvaluation } from '../pages/PanelMember/PMPresentationEvaluation'
import { PMTopicRequest } from '../pages/PanelMember/PMTopicRequest'
import { SendEmail } from '../pages/PanelMember/sendEmal'
import { CreatePanel } from '../pages/panel/CreatePanel'
import { PanelAllocation } from '../pages/panel/PanelAllocation'
import { PanelList } from '../pages/panel/PanelList'
import { Evaluation } from '../pages/panel_member/Evaluation'
import { SendEmail } from '../pages/panel_member/SendEmail'
import { TopicRequest } from '../pages/panel_member/TopicRequest'
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
                    <Route exact path='/pmRequest' element={<PMTopicRequest />} />
                    <Route exact path='/pmEvaluation' element={<PMPresentationEvaluation />} />
                    <Route exact path='/sendEmail' element={<SendEmail />} />
                    <Route exact path='/userList' element={<UserList />} />
                    <Route exact path='/panelList' element={<PanelList />} />
                    <Route exact path='/panelAllocate' element={<PanelAllocation />} />
                    <Route exact path='/createPanel' element={<CreatePanel />} />
                    <Route exact path='/evaluation' element={<Evaluation />} />
                    <Route exact path='/sendEmail' element={<SendEmail />} />
                    <Route exact path='/topicRequest' element={<TopicRequest />} />

                </Routes>
                <Footer />
            </Router>
        </>
    )
}
