import React, { useState, Component } from 'react'
// import { DropzoneArea } from 'material-ui-dropzone'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { RippleButton } from './RippleButton';


function DropzoneArea() {
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
        // setOpen(false)
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


        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };


    return (
        <div>

            {/* <RippleButton className="ripple-button" text="Upload" onClick={(e) => { handleOpen(e) }}></RippleButton> */}
            <Button onClick={(e) => { handleOpen(e) }}>
                Upload Template
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