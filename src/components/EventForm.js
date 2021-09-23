/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import createEvent from '../service/EventService';
import { selectOptions, customStyles } from './SelectOptions';
import { useDispatch, useSelector } from 'react-redux';
import { imageSelector } from '../features/images/imageSlice';
import { createEventAsync, eventsSelector } from '../features/events/eventsSlice';

const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-dark me-3',
    },
    buttonsStyling: false,
  })
);

const EventForm = () => {
  const { imageUrl, uploading, uploaded } = useSelector(imageSelector)
  const { loading } = useSelector(eventsSelector)
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([])
  console.log(loading)
  const [data, setData] = useState({
    title: '',
    time: '',
    date: '',
    excerpt: '',
    location: '',
    body: '',
  });

  const finalData = {
    title: data.title,
    date: data.date.concat('T' + data.time + '+03:00'),
    excerpt: data.excerpt,
    categories: categories,
    location: data.location,
    img_url: imageUrl,
    body: data.body.toString(),
    completed: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!finalData.img_url) {
      return customButton.fire(
        "Ooops, something doesn't seem right",
        'Please upload an Image and try again',
        'error'
      );
    }
    console.log(finalData);
    
    dispatch(createEventAsync(finalData));
   
    customButton.fire('Sucess', 'Event created successfully', 'success');
    setData({
      title: '',
      time: '',
      date: '',
      excerpt: '',
      categories: [],
      location: '',
      body: '',
    });
  };
  const handleChange = (e) => {
    console.log(finalData);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handle multi select
  const selectFn = (e) => {
    e.forEach(el => {
      categories.includes(el.value) ?  console.log('yes') : setCategories([...categories, el.value])
    })
  }

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
              <Form.Group>
                <Form.Label>Select categories</Form.Label>
                <Select
                  name="categories"
                  defaultInputValue={categories}
                  onChange={(e) => selectFn(e)}
                  options={selectOptions}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#61DAFB',
                      primary: '#61DAFB',
                    },
                  })}
                  styles={customStyles}
                  isMulti
                />
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
                  setData({...data, body: editor.getData()})
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
