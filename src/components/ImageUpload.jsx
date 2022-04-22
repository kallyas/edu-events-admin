import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';

const ImageUpload = (props) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className='thumb' key={file.name}>
            <div className='thumbInner'>
                <img
                    src={file.preview}
                    className="img-fluid-thumb"
                    alt="thumb"
                />
                <p>{file.name}</p>
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