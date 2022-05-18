import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { RippleButton } from '../../components/RippleButton'

const Dashboard = () => {
    return (
        <div className='body-content-container-student-dashboard'>
            <div class="container-border-student-dashboard">
                <div className="row border-bottom">
                    <h3>Things to do</h3>
                </div>
                <div className="row roadmap">
                    <div className="col-5">
                        <div className="row height-lg"><RippleButton className="ripple-button-border" text="Group Registration" onClick={() => { onSubmit() }} /></div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg"><RippleButton disabled={true} className="ripple-button-border-disabled" text="Co - Supervisor Selection" onClick={() => { onSubmit() }} /></div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg"><RippleButton disabled={true} className="ripple-button-border-disabled" text="Topic Evaluation Status" onClick={() => { onSubmit() }} /></div>
                        <div className="row height-lg"></div>
                    </div>
                    <div className="col-1 roadmap-line">
                        {/* <div></div> */}
                        <div className="row height-lg box"></div>
                        <div className="row height-lg box"></div>
                        <div className="row height-lg box"></div>
                        <div className="row height-lg box"></div>
                        <div className="row height-lg box"></div>

                    </div>
                    <div className="col-5">
                        <div className="row height-lg"></div>
                        <div className="row height-lg"><RippleButton disabled={true} className="ripple-button-border-disabled" text="Topic Selection & Supervisor Selection" onClick={() => { onSubmit() }} /></div>
                        <div className="row height-lg"></div>
                        <div className="row height-lg"><RippleButton disabled={true} className="ripple-button-border-disabled" text="Send Documents for Topic Evaluation" onClick={() => { onSubmit() }} /></div>
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
                        <div className="row height-lg-border"></div>
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