import { useState } from 'react';
import {
  Card,
  Form,
  Button,
  Modal,
  InputGroup,
  Row,
  Col,
} from '@themesberg/react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AddNewProject } from '../service/AddProjectService';

const customButton = withReactContent(
    Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-dark me-3',
      },
      buttonsStyling: false,
    })
  );

const AddProjectModal = ({ show, handleClose }) => {
    const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    title: '',
    question: '',
    desc: '',
    status: '',
    points: '',
    date: '',
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      const res = await AddNewProject(data);
      if(!res) return console.log('error');
      customButton.fire('Success', 'Project added successfully', 'success')
      setData({
        title: '',
        question: '',
        desc: '',
        status: '',
        points: '',
        date: '',
      })
  };

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header className="border-0">
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body className="p-0">
        <Card className="px-0 px-md-4 py-0 border-0">
          <Card.Header className="pb-0 py-0 border-0">
            <h2 className="h4">create new project</h2>
          </Card.Header>
          <Card.Body>
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type="text"
                        placeholder="project titile"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Question</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="question"
                        name="question"
                        value={data.question}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type="text"
                    placeholder="description"
                    name="desc"
                    value={data.desc}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Points</Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type="number"
                        placeholder="100"
                        name="points"
                        value={data.points}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Assigned"
                        name="status"
                        value={data.status}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Date</Form.Label>
                <InputGroup>
                  <Form.Control
                    required
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                {loading ? 'Adding Project...': 'Add Project'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddProjectModal;
