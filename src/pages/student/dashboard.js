import React, { useEffect, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import { RippleButton } from '../../components/RippleButton'
import { getOneGroup } from '../../services/group.service';

const Dashboard = () => {
    const navigate = useNavigate()

    //for roadmap
    const [isGroupRegistered, setIsGroupRegistered] = useState(false);
    const [isTopicSelected, setIsTopicSelected] = useState(false);
    const [isCoSupervisorSelected, setIsCoSupervisorSelected] = useState(false);
    const [isProposalSent, setIsProposalSent] = useState(false);
    const [isEvaluationCompleted, setIsEvaluationCompleted] = useState(false);

    const [groupDetails, setGroupDetails] = useState([])

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (user?.groupId != "") {
            setIsGroupRegistered(true)
            getOneGroup(user?.groupId).then((res) => {
                setGroupDetails(res.data)
            }).catch((err) => {
                console.log("error!", err)
            })

            groupDetails?.researchTopic ? setIsTopicSelected(true) : setIsTopicSelected(false);
            groupDetails?.coSupervisor ? setIsCoSupervisorSelected(true) : setIsCoSupervisorSelected(false);
            (groupDetails?.coSupervisor && groupDetails?.researchTopic) ? setIsProposalSent(true) : setIsProposalSent(false)
            groupDetails?.isProposalAccepted ? setIsEvaluationCompleted(true) : setIsEvaluationCompleted(false);
        }

    }, [groupDetails])



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
                                                <RippleButton disabled={isCoSupervisorSelected} className="ripple-button-border w-100" text="Co - Supervisor Selection" onClick={() => { navigate("/student/request/cosupervisor") }} />
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
                                            <RippleButton disabled={isEvaluationCompleted} className="ripple-button-border w-100" text="Send Documents for Topic Evaluation" onClick={() => { navigate("/student/projectproposal") }} />
                                            {isEvaluationCompleted && <FcApproval size={30} />}
                                        </>
                                    ) :
                                    (
                                        <>
                                            <RippleButton disabled={true} className="ripple-button-border-disabled w-100" text="Send Documents for Topic Evaluation" />
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
                        <div className="row height-lg-border">Submission 02</div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p onClick={() => { navigate("/student/assignment", { state: { version: "Submission Two", groupId: groupDetails?.groupId } }) }}><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border">Submission 03</div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p onClick={() => { navigate("/student/assignment", { state: { version: "Submission Three", groupId: groupDetails?.groupId } }) }}><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border">Submission 04</div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p onClick={() => { navigate("/student/assignment", { state: { version: "Submission Four", groupId: groupDetails?.groupId } }) }}><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                    <div className="row mr-2 ml-2 mb-4">
                        <div className="row height-lg-border">Submission 05</div>
                        <div className="row border shadow-sm height-lg p-2">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore unde quidem nihil laboriosam illo quod nostrum cupiditate minima aspernatur atque! Vitae commodi doloribus nesciunt quasi facere laudantium sequi enim. Provident.</p>
                            <p onClick={() => { navigate("/student/assignment", { state: { version: "Submission Five", groupId: groupDetails?.groupId } }) }}><AiOutlineCloudUpload size={20} /><span className='ml-2'><u>add submission</u></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard