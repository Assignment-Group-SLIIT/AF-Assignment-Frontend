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
import UploadInitialEvaluation from '../pages/student/uploadEvaluation'
import StudentSubmissionDocument from '../pages/student/StudentSubmissionDocument'
import GroupRequestCoSupevisor from '../pages/co-supervisor/GroupRequest-Co'




export const RoutesComponent = () => {
    return (
        <>
            <Router basename={'/'}>
                <Navigationbar />
                <Routes>

                    {/* common */}
                    <Route exact path='/home' element={<LandingPage />} />
                    <Route exact path='/test' element={<TestPage />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/templates' element={<ViewTemplates />} />

                    {/* student */}
                    <Route exact path='/signup/student' element={< StudentSignUp />} />
                    <Route exact path='/student/groupregistration' element={<StudentGroupRegister />} />
                    <Route exact path='/student/dashboard' element={< StudentDashboard />} />
                    <Route exact path='/student/projectproposal' element={<StudentSubmissionDocument />} />
                    <Route exact path='/student/assignment' element={<UploadInitialEvaluation />} />
                    <Route exact path='/student/request/supervisor' element={<RequestTopic />} />
                    <Route exact path='/student/request/cosupervisor' element={<RequestTopicCoSupervisor />} />

                    {/* staff */}
                    <Route exact path='/signup/staff' element={<StaffSignup />} />

                    {/* supervisor */}
                    <Route exact path='/supervisor/list/request' element={<GroupRequest />} />
                    <Route exact path='/supervisor/list/submissions' element={<EvaluationSubmission />} />

                    {/* cosupervisor */}
                    <Route exact path='/cosupervisor/list/request' element={< GroupRequestCoSupevisor />} />

                    {/* admin */}
                    <Route exact path='/admin/list/user' element={<UserList />} />
                    <Route exact path='/admin/list/panel' element={<PanelList />} />
                    <Route exact path='/admin/panel' element={<PanelAllocation />} />
                    <Route exact path='/admin/panel/registration' element={<CreatePanel />} />
                    <Route exact path='/admin/template' element={<CreateTemplate />} />
                    <Route exact path='/admin/submission' element={<CreateSubmission />} />

                    {/* panel */}
                    <Route exact path='/panel/email' element={<SendEmail />} />
                    <Route exact path='/panel/evaluation' element={<Evaluation />} />
                    <Route exact path='/panel/topic' element={<TopicRequest />} />

                </Routes>
                <Footer />
            </Router>
        </>
    )
}
