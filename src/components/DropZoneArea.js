import React, { useState, Component } from 'react'
// import { DropzoneArea } from 'material-ui-dropzone'
import { DropzoneDialog } from 'material-ui-dropzone'
//import Button from '@material-ui/core/Button';
import { RippleButton } from './RippleButton';
import { Button } from 'react-bootstrap'

function DropzoneArea(props) {
    // const [files, setFiles] = useState([])

    // return (
    //     <DropzoneArea
    //         onChange={(e) => { setFiles(e.target.value) }}
    //     />
    // )

    const [files, setFiles] = useState([])
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSave = (e) => {
        console.log("Method called", e)
        setFiles(e)

        // console.log("Method called2", files[0].name)
        // console.log("Method called2", files[0].path)

    }

    const sendData = (data) => {
        props.sendData(data);
    }


    const onFileUpload = () => {
        console.log("Method called2", files[0])
        const uploadFile = files[0];
        console.log("Method called3", uploadFile.path)
        // Create an object of formData
        let formData = new FormData();

        // Update the formData object
        formData.append("file", uploadFile, uploadFile.name);

        // Details of the uploaded file
        console.log(formData.get('file'));

        sendData(formData.get('file'))
        setOpen(false)
        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };


    return (
        <div>

            {/* <RippleButton className="ripple-button" text="Upload" onClick={(e) => { handleOpen(e) }}></RippleButton> */}
            <Button onClick={(e) => { handleOpen(e) }}>
                <p className="mr-3">Upload</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='ml-5' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </Button>

            <DropzoneDialog
                open={open}
                onSave={() => { onFileUpload() }}
                // acceptedFiles={['/doc', '*/csv', 'lab-assessment/pdf']}

                onDrop={(e) => { handleSave(e) }}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={(e) => { handleClose(e) }}
            />
        </div>
    );


}



export default DropzoneArea;