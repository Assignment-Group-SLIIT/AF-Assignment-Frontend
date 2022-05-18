import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../components/RippleButton"
import ResearchGroup from './modals/ResearchGroup';
import UpdateRGPanel from './modals/UpdateRGPanel';

export const PanelAllocation = () => {

    const [search, setSearch] = useState("");
    const [groupList, setGroupList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);


    const openModal = (user) => {
        // setData(rental);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        // console.log("req came for modal");
        // console.log(modalData, "data came for modalllllll");
        setModalShow(true);
    }

    const openModalUpdate = (user) => {

        console.log("request came for modal updateeeeeee");
        // setModalDataUpdate(data);
        setModalUpdate(true);

    }

    return (
        <div className='body-content-container'>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ResearchGroup
                    // data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
            <div className="container-border">


                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" >Panel Allocation</h3>
                    </div>
                </div>
                <div className="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div className="search-box">
                            <div className="searchbar">
                                <form >
                                    <input className="search_input" type="text" name="search" placeholder="Search..."
                                    />
                                    {/* <button className="btn search_icon" type="submit" id="submit" name="submit">
                                        Submit</button> */}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Group ID</th>
                            <th>Group Name</th>
                            <th>Research Topic</th>
                            <th>Research Field</th>
                            <th>Panel</th>
                            <th colSpan={2}>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

                            <td onClick={() => openModal()}>data</td>
                            <td ></td>
                            <td ></td>
                            <td></td>
                            <th></th>
                            <td>
                                <RippleButton className="ripple-button" text="Allocate Panel" onClick={() => openModalUpdate()} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Modal to be used in update */}
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateRGPanel
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal>
        </div>
    )





}