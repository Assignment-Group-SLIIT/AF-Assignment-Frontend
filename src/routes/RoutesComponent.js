import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Navigationbar } from '../components/Navigationbar'
import { CreateTemplate } from '../pages/admin/CreateTemplate'
import { ViewTemplates } from '../pages/admin/ViewTemplates'
import { LandingPage } from '../pages/LandingPage'
import { CreatePanel } from '../pages/panel/CreatePanel'
import { PanelAllocation } from '../pages/panel/PanelAllocation'
import { PanelList } from '../pages/panel/PanelList'
import { Evaluation } from '../pages/panel_member/Evaluation'
import { SendEmail } from '../pages/panel_member/SendEmail'
import { TopicRequest } from '../pages/panel_member/TopicRequest'
import { TestPage } from '../pages/TestPage'
import { StudentSignUp } from '../pages/student/StudentSignup'
import Login from '../pages/student/Login'
import StaffSignup from '../pages/staff/staffSignup'
import StudentGroupRegister from '../pages/student/StudentGroupRegister'
import { UserList } from '../pages/users/UserList'
import StudentDashboard from '../pages/student/dashboard'
import { RequestTopic } from '../pages/students/RequestTopic'
import { RequestTopicCoSupervisor } from '../pages/students/RequestCo-Supervisor'
import { GroupRequest } from '../pages/Supervisor/GroupRequest'
import { EvaluationSubmission } from '../pages/Supervisor/EvaluationSubmission'
import { CreateSubmission } from '../pages/admin/CreateSubmission'



export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>
                    <Route exact path='/home' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                    <Route exact path='/studentSignup' element={< StudentSignUp />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/staffSignup' element={<StaffSignup />} />
                    <Route exact path='/group-registration' element={<StudentGroupRegister />} />
                    <Route exact path='/sendEmail' element={<SendEmail />} />
                    <Route exact path='/userList' element={<UserList />} />
                    <Route exact path='/panelList' element={<PanelList />} />
                    <Route exact path='/panelAllocate' element={<PanelAllocation />} />
                    <Route exact path='/createPanel' element={<CreatePanel />} />
                    <Route exact path='/createTemplate' element={<CreateTemplate />} />
                    <Route exact path='/createSubmission' element={<CreateSubmission />} />
                    <Route exact path='/viewTemplates' element={<ViewTemplates />} />
                    <Route exact path='/evaluation' element={<Evaluation />} />
                    <Route exact path='/topicRequest' element={<TopicRequest />} />
                    <Route exact path='/studentdashboard' element={< StudentDashboard />} />
                    <Route exact path='/requestTopic' element={<RequestTopic />} />
                    <Route exact path='/requestTopicCo-supervisor' element={<RequestTopicCoSupervisor />} />
                    <Route exact path='/groupRequest' element={<GroupRequest />} />
                    <Route exact path='/evaluationSubmission' element={<EvaluationSubmission />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
