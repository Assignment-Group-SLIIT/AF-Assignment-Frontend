import React, { useEffect, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import { RippleButton } from '../../components/RippleButton'

const Dashboard = () => {
    const navigate = useNavigate()

    //for roadmap
    const [isGroupRegistered, setIsGroupRegistered] = useState(false);
    const [isTopicSelected, setIsTopicSelected] = useState(false);
    const [isCoSupervisorSelected, setIsCoSupervisorSelected] = useState(false);
    const [isProposalSent, setIsProposalSent] = useState(false);
    const [isEvaluationCompleted, setIsEvaluationCompleted] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user.groupId != "") {
            setIsGroupRegistered(true)
        }
    }, [])



    return (
        <div className='body-content-container-student-dashboard'>
            <div class="container-border-student-dashboard">
                <div className="row border-bottom">
                    <h3>Things to do</h3>
                </div>
                <div className="row roadmap">
                    <div className="col-5">
                        <div className="row height-lg">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <RippleButton disabled={isGroupRegistered} className="ripple-button-border w-100" text="Group Registration" onClick={() => { navigate("/student/groupregistration") }} />
                                {isGroupRegistered && <FcApproval size={30} />}
                            </div>
                        </div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {
                                    isTopicSelected ?
                                        (
                                            <>
                                                <RippleButton disabled={isTopicSelected} className="ripple-button-border w-100" text="Co - Supervisor Selection" onClick={() => { navigate("/student/groupregistration") }} />
                                                {isCoSupervisorSelected && <FcApproval size={30} />}
                                            </>
                                        ) :
                                        (
                                            <>
                                                <RippleButton disabled={true} className="ripple-button-border-disabled w-100" text="Co - Supervisor Selection" onClick={() => { navigate("/student/groupregistration") }} />
                                            </>
                                        )
                                }

                            </div>
                        </div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {
                                    isEvaluationCompleted ?
                                        (
                                            <>
                                                <RippleButton disabled={isEvaluationCompleted} className="ripple-button-border w-100" text="Topic Evaluation Status" onClick={() => { navigate("/student/groupregistration") }} />
                                                {isEvaluationCompleted && <FcApproval size={30} />}
                                            </>
                                        ) :
                                        (
                                            <>
                                                <RippleButton disabled={true} className="ripple-button-border-disabled w-100" text="Topic Evaluation Status" onClick={() => { navigate("/student/groupregistration") }} />
                                            </>
                                        )
                                }
                            </div>
                        </div>
                        <div className="row height-lg"></div>
                    </div>
                    <div className="col-1 roadmap-line mt-4">
                        <div className="row height-lg line"></div>
                        <div className="row height-lg line"></div>
                        <div className="row height-lg line"></div>
                        <div className="row height-lg line"></div>
                        <div className="row height-lg line"></div>

                    </div>
                    <div className="col-5">
                        <div className="row height-lg"></div>
                        <div className="row height-lg">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {isGroupRegistered ?
                                    (
                                        <>
                                            <RippleButton disabled={isTopicSelected} className="ripple-button-border w-100" text="Topic Selection & Supervisor Selection" onClick={() => { navigate("/student/request/supervisor") }} />
                                            {isTopicSelected && <FcApproval size={30} />}
                                        </>
                                    ) :
                                    (
                                        <>
                                            <RippleButton disabled={true} className="ripple-button-border-disabled w-100" text="Topic Selection & Supervisor Selection" onClick={() => { onSubmit() }} />
                                        </>
                                    )
                                }

                            </div>
                        </div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {isCoSupervisorSelected ?
                                    (
                                        <>
                                            <RippleButton disabled={isCoSupervisorSelected} className="ripple-button-border w-100" text="Send Documents for Topic Evaluation" onClick={() => { onSubmit() }} />
                                            {isProposalSent && <FcApproval size={30} />}
                                        </>
                                    ) :
                                    (
                                        <>
                                            <RippleButton disabled={true} className="ripple-button-border-disabled w-100" text="Send Documents for Topic Evaluation" onClick={() => { onSubmit() }} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg"></div>
                    </div>
                </div>
                <div className="row border-bottom">
                    <h3>Upcoming Submissions</h3>
                </div>
                <div className="row mt-3">
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border"></div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border"></div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border">dfsfasdsaf</div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard