import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Navigationbar } from '../components/Navigationbar'
import { CreateTemplate } from '../pages/admin/CreateTemplate'
import { ViewTemplates } from '../pages/admin/ViewTemplates'
import { LandingPage } from '../pages/LandingPage'
import { CreatePanel } from '../pages/panel/CreatePanel'
import { PanelAllocation } from '../pages/panel/PanelAllocation'
import { PanelList } from '../pages/panel/PanelList'
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
                    <Route exact path='/userList' element={<UserList />} />
                    <Route exact path='/panelList' element={<PanelList />} />
                    <Route exact path='/panelAllocate' element={<PanelAllocation />} />
                    <Route exact path='/createPanel' element={<CreatePanel />} />
                    <Route exact path='/createTemplate' element={<CreateTemplate />} />
                    <Route exact path='/viewTemplates' element={<ViewTemplates />} />

                </Routes>
            </Router>
        </>
    )
}
