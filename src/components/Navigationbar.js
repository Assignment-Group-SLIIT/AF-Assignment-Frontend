import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export const Navigationbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState(null)

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        token != "" && token != null ? setIsLoggedIn(true) : setIsLoggedIn(false);

        const role = sessionStorage.getItem("role")
        role != null || role != "" ? setRole(role) : setRole(null)


    }, [sessionStorage, location.pathname])

    const logoutFunc = (e) => {
        e.preventDefault()

        sessionStorage.clear();
        setIsLoggedIn(false)
        setRole(null)
        navigate("/home")
    }

    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-lg fixed-top"
                >
                    <div className="container-fluid">
                        <Link to="/home" className="navbar-brand js-scroll-trigger">
                            <h2 className='text-light'>Research Portal</h2>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-lg-5 ml-sm-3 me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    {role === "Student" && (
                                        <Link className="nav-link " to="/student/dashboard">Dashboard</Link>
                                    )}
                                    {role === "Admin" && (
                                        <Link className="nav-link " to="/admin/dashboard">Dashboard</Link>
                                    )}
                                    {role === "Supervisor" && (
                                        <Link className="nav-link " to="/supervisor/list/request">Requests</Link>
                                    )}
                                    {role === "Co-Supervisor" && (
                                        <Link className="nav-link " to="/cosupervisor/list/request">Requests</Link>
                                    )}
                                    {role === "Panel" && (
                                        <Link className="nav-link " to="/panel/topic">Requests</Link>
                                    )}
                                    {role == null && (
                                        <Link className="nav-link " to="/home">Home</Link>
                                    )}
                                </li>
                                <li className="nav-item ">

                                    {role === "Admin" && (
                                        <Link className="nav-link " to="/admin/list/user">Users</Link>
                                    )}
                                    {role === "Supervisor" && (
                                        <Link className="nav-link " to="/supervisor/list/markingschema">Marking Schemas</Link>
                                    )}
                                    {role === "Co-Supervisor" && (
                                        <Link className="nav-link " to="/supervisor/list/markingschema">Marking Schemas</Link>
                                    )}
                                    {role === "Panel" && (
                                        <Link className="nav-link " to="/panel/evaluation">Final Evaluations</Link>
                                    )}
                                    {role == null && (
                                        <Link className="nav-link " to="#">Link 01</Link>
                                    )}
                                </li>
                                <li className="nav-item ">

                                    {role === "Admin" && (
                                        <Link className="nav-link " to="/admin/list/panel">Panel</Link>
                                    )}
                                    {role === "Supervisor" && (
                                        <Link className="nav-link " to="/supervisor/list/submissions">Submissions</Link>
                                    )}
                                    {role === "Co-Supervisor" && (
                                        <Link className="nav-link " to="/chat">Chat</Link>
                                    )}
                                    {role === "Panel" && (
                                        <Link className="nav-link " to="/templates">Templates</Link>
                                    )}
                                    {role == null && (
                                        <Link className="nav-link " to="#">Link 01</Link>
                                    )}
                                </li>
                                <li className="nav-item ">

                                    {role === "Admin" && (
                                        <Link className="nav-link " to="/admin/panel">Panel Allocation</Link>
                                    )}
                                    {role === "Supervisor" && (
                                        <Link className="nav-link " to="/chat">Chat</Link>
                                    )}
                                    {role == null && (
                                        <Link className="nav-link " to="#">Link 01</Link>
                                    )}
                                </li>
                                <li className="nav-item ">
                                    {role === "Student" && (
                                        <Link className="nav-link " to="/chat">Chat</Link>
                                    )}
                                    {role === "Admin" && (
                                        <Link className="nav-link " to="/admin/list/panelmembers">Panel Members</Link>
                                    )}
                                    {role == null && (
                                        <Link className="nav-link " to="#">Link 01</Link>
                                    )}
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto ">
                                <li className="nav-item">
                                    {isLoggedin ?
                                        (
                                            <button className="btn btn-text" onClick={(e) => { logoutFunc(e) }}>
                                                logout
                                            </button>
                                        ) :
                                        (
                                            <Link to="/login">
                                                <button className="btn btn-text">
                                                    login
                                                </button>
                                            </Link>
                                        )
                                    }

                                </li>
                                <li className="nav-item">
                                    {isLoggedin ?
                                        (
                                            null
                                        ) :
                                        (
                                            <Link to="/signup/student">
                                                <button className="btn btn-text">
                                                    register
                                                </button>
                                            </Link>
                                        )
                                    }

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
