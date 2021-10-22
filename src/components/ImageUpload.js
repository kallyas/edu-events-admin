import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Form, Image } from "@themesberg/react-bootstrap";

import { uploadImageAsync } from "../features/images/imageSlice";

const ImageUpload = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
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

  const ImageUploadFile = (props) => {
    const { path, preview } = props;

    return (
      <Col xs={3} className="dropzone-preview" style={{ width: "100vw" }}>
        <Image src={preview} className="dropzone-image" />
        <Card.Text className="dropzone-filename">{path}</Card.Text>
      </Col>
    );
  };

  return (
    <>
      <Form
        {...getRootProps({
          className:
            "dropzone rounded d-flex align-items-center justify-content-center mb-4",
        })}
      >
        <Form.Control {...getInputProps()} />
        <div className="dz-default dz-message text-center">
          <p className="dz-button mb-0">
            Drop event image header file here to upload
          </p>
        </div>
      </Form>
      <Row className="dropzone-files">
        {files.map((file) => (
          <ImageUploadFile key={file.path} {...file} />
        ))}
      </Row>
    </>
  );
};

export default ImageUpload;
