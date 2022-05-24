import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Navigationbar = () => {
    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-lg fixed-top"
                >
                    <div className="container-fluid">
                        <Link to="/home">
                            <a className="navbar-brand js-scroll-trigger">
                                <h2 className='text-light'>Research Portal</h2>
                            </a>
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
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-lg-5 ml-sm-3 me-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <a class="nav-link " href="##">Link 01</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link " href="##">Link 02</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link " href="##">Link 03</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link " href="##">Link 04</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-item">
                                    <Link to="/login">
                                        <button class="btn btn-text">
                                            login
                                        </button>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/signup/student">
                                        <button class="btn btn-text">
                                            register
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
