import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/user.service';
import toastNotification from '../../components/toastNotification';

const Signup = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState({ value: "", error: "This field cannot be empty", isError: false });
    const [password, setPassword] = useState({ value: "", error: "This field cannot be empty", isError: false });

    useEffect(() => {
        userName.value === "" ? setUserName({ ...userName, isError: true }) : setUserName({ ...userName, isError: false });
        password.value === "" ? setPassword({ ...password, isError: true }) : setPassword({ ...password, isError: false });

    }, [userName.value, password.value]);

    // useEffect(() => {
    //     if (sessionStorage.getItem("user")) {
    //       navigate("/chat");
    //     }
    //   }, []);

    const onSubmit = (e) => {
        e.preventDefault()

        const payload = {
            email: userName.value,
            password: password.value
        }

        if (!userName.isError && !password.isError) {
            loginUser(payload).then((res) => {
                res.ok ? toastNotification("Success!", "success") : toastNotification("Username or Password is incorrect!", "error")

                const user = JSON.parse(sessionStorage.getItem("user"))

                if (user != undefined || user != null) {
                    if (user.role === "Student") {
                        sessionStorage.setItem('role', "Student")
                        navigate("/student/dashboard");
                    } else if (user.role === "Supervisor") {
                        sessionStorage.setItem('role', "Supervisor")
                        navigate("/supervisor/list/request");
                    } else if (user.role === "Co-Supervisor") {
                        sessionStorage.setItem('role', "Co-Supervisor")
                        navigate("/cosupervisor/list/request")
                    } else if (user.role === "Admin") {
                        sessionStorage.setItem('role', "Admin")
                        navigate("/admin/dashboard")
                    } else if (user.role === "Panel") {
                        navigate("/panel/topic")
                    }
                }
            }).catch((err) => {
                console.log("error while sign in >>", err.ok)
                err.ok === false ? toastNotification("Username or Password is incorrect!", "error") : null

            })
        }
    }

    return (
        <div className='body-content-container-login section-login'>
            <div className="container-border-login">
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" placeholder="Email" value={userName.value} onChange={(e) => { setUserName({ ...userName, value: e.target.value }) }}></input>
                                </div>
                                {userName.isError && <small className='text-danger'>{userName.error}</small>}
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input type="password" className="login__input" placeholder="Password" value={password.value} onChange={(e) => { setPassword({ ...password, value: e.target.value }) }}></input>
                                </div>
                                {password.isError && <small className='text-danger'>{password.error}</small>}
                                <button className="button login__submit" onClick={(e) => { onSubmit(e) }}>
                                    <span className="button__text">Log In Now</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <div className="social-login">
                                <h3>Welcome</h3>
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup