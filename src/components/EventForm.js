import { useState, useEffect } from 'react';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import createEvent from '../service/EventService';

const EventForm = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: '',
    time: '',
    date: '',
    excerpt: '',
    categories: [],
    location: '',
    body: ''
  });

  const finalData = {
    title: data.title,
    date: data.date.concat('T' + data.time + '+03:00'),
    excerpt: data.excerpt,
    categories: data.categories,
    location: data.location,
    img_url: 'https://outbox.co.ug/sites/default/files/styles/medium_3/public/2021-07/outbox-fullstack-web-boot-camp-twitter-3.png',
    body: data.body.toString(),
    completed: false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    const res = await createEvent(finalData)
    console.log(res)
  };
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  };
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">create a new event</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter event title"
                  name="title"
                  defaultValue={data.title}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  name="date"
                  defaultValue={data.date}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="time">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  required
                  type="time" 
                  name="time"
                  defaultValue={data.time}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Group id="weight">
                <Form.Label>summary</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Event summary..."
                  name="excerpt"
                  defaultValue={data.excerpt}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="category">
                <Form.Label>Category(s)</Form.Label>
                <Form.Select
                  defaultValue=""
                  name="categories"
                  onChange={handleChange}
                >
                  <option value="0">Courier Type</option>
                  <option value="parcel">Parcel</option>
                  <option value="shipping">shipping</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="location">
                <Form.Label>Location/Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Soliz House, Kampala uganda"
                  name="location"
                  defaultValue={data.location}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Body</h5>
          <Row>
            <Col sm={12} className="mb-3">
              <CKEditor
                editor={ClassicEditor}
                onReady={(editor) => {
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(e, editor) => {
                  data.body = editor.getData()
                }}
              />
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">
              {loading ? 'creating event...' : 'create new event'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EventForm;
