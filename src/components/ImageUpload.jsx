import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { useDispatch } from "react-redux";
import { uploadImageAsync } from "../features/images/imageSlice";

const ImageUpload = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (files) => {
            setFiles(
                files.map((file) => ({
                    ...file,
                    preview: URL.createObjectURL(file),
                }))
            );
            dispatch(uploadImageAsync(files[0]));
        },
    });

    const thumbs = files.map(file => (
        <div className='thumb' key={file.path}>
            <div className='thumbInner'>
                <img
                    src={file.preview}
                    className="img-fluid-thumb"
                    alt="thumb"
                />
                <p>{file.path}</p>
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div className='thumbsContainer'>
                {thumbs}
            </div>
        </>
    )
}

export default ImageUpload