import React, { useState, useEffect } from 'react'
import { Modal } from "react-bootstrap";
import { RippleButton } from "../../components/RippleButton"
import ResearchGroup from './modals/ResearchGroup';
import UpdateRGPanel from './modals/UpdateRGPanel';
import '../../styles/usersList.styles.scss'
import { getAllGroup } from '../../services/group.service';
import toastNotification from '../../components/toastNotification';

export const PanelAllocation = () => {

    const [search, setSearch] = useState("");
    const [groupList, setGroupList] = useState([]);
    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    const [modalLoading, setModalLoading] = useState(false);


    const openModal = (group) => {
        setData(group);
        handleViewOnClick();
    }

    const handleViewOnClick = () => {
        setModalShow(true);
    }

    const openModalUpdate = (group) => {
        console.log("request came for modal updateeeeeee");
        setModalDataUpdate(group);
        setModalUpdate(true);

    }

    useEffect(() => {
        const loadData = () => {
            getAllGroup().then(response => {
                console.log("data", response)
                if (response.ok) {
                    setGroupList(response.data.data);
                } else {
                    toastNotification("Cannot load the group Lists", "warn")
                }
            }).catch(err => {
                toastNotification("Error", "error")
            })
        }
        loadData()
    }, [])

    const searchResult = (e) => {
        e.preventDefault();
        // console.log(search)
        setGroupList(groupList.filter(group => {
            return (
                group.groupId == search || group.researchTopic == search || group.researchField == search || group.panelNo == search || group?.student?.leader?.name == search
            )
        }))

        console.log(groupList)
    }

    function refreshPage() {
        window.location.reload();
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
                    data={modalData}
                    onHide={() => setModalShow(false)}
                />
            </Modal>
            <div className="container-border">


                <div className="row table-head mt-3">
                    <div className="col">
                        <h3 className="float-left" onClick={refreshPage}>Panel Allocation</h3>
                    </div>
                </div>
                <div className="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div className="search-box">
                            <div className="searchbar">
                                <form onSubmit={(e) => searchResult(e)}>
                                    <input className="search_input" type="text" name="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button className="btn search_icon" type="submit" id="submit" name="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className='text'>Group ID</th>
                            <th className='text'>Leader</th>
                            <th className='text'>Research Topic</th>
                            <th className='text'>Research Field</th>
                            <th className='text'>Panel</th>
                            <th className='text'>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupList.map((group) => {
                            return (
                                <tr key={Math.random()}>

                                    <td onClick={() => openModal(group)}>{group.groupId}</td>
                                    <td >{group?.student?.leader?.name}</td>
                                    <td >{group.researchTopic}</td>
                                    <td>{group.researchField}</td>
                                    <th>{group.panelNo}</th>
                                    <td>
                                        <RippleButton className="ripple-button" text="Allocate Panel" onClick={() => openModalUpdate(group)} />
                                    </td>
                                </tr>
                            )

                        })}
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