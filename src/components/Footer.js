import React from 'react'
import SliitLogo from '../assets/images/SLIIT_Logo_Crest.png'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

const Footer = () => {

    return (
        <footer className='footer shadow'>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-4 d-flex flex-column align-items-start justify-content-start pt-4">
                        <h3>Research Portal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis eget commodo neque.
                            Quisque id urna tempor, varius risus eget, congue erat.
                            Aenean ac ante est. Vestibulum mollis hendrerit </p>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-center">
                        <img src={SliitLogo} alt="" width="140" height="200" class="d-inline-block align-text-top nav-logo" onClick={() => {
                            navigate("/")
                        }} />
                        {/* <label>all rights reserved</label> */}
                    </div>
                    <div className="col-4 d-flex flex-column align-items-start justify-content-start pt-4">
                        <h3 className='pl-2'>Follow us on social media</h3>
                        <div className="d-flex flex-row align-items-center justify-content-between w-75">
                            <AiFillFacebook size={40} />
                            <AiFillInstagram size={40} />
                            <AiFillLinkedin size={40} />
                            <BsMessenger size={40} />
                            <AiOutlineMail size={40} />
                        </div>
                    </div>
                </div>

                <div class="container-fluid pt-4 pb-2">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center justify-content-center">{""}</div>
                        <div className="col-4 d-flex align-items-center justify-content-center">ResearchPortal © 2022. All rights reserved.</div>
                        <div className="col-4 d-flex align-items-center justify-content-center">{""}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer