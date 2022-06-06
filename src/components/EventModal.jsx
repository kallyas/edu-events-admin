import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { imageSelector } from '../features/images/imageSlice';
import { createEventAsync, eventsSelector } from '../features/events/eventsSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IconPlus } from '@tabler/icons';
import { selectOptions, customStyles } from './SelectOptions';
import ImageUpload from './ImageUpload';

const customButton = withReactContent(
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-dark me-3',
        },
        buttonsStyling: false,
    })
);

const EventModal = (props) => {
    const { show, setShowModal } = props;
    const [categories, setCategories] = useState([])
    const { imageUrl, uploading, uploaded } = useSelector(imageSelector)
    const { loading } = useSelector(eventsSelector)
    const dispatch = useDispatch();

    console.log(loading, uploading, uploaded);
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

    //handle close.
    const handleClose = () => setShowModal(false);

    //handle submit.
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!finalData.img_url) {
            return customButton.fire(
                "Oops, something doesn't seem right",
                'Please upload an Image and try again',
                'error'
            );
        }

        dispatch(createEventAsync(finalData));

        customButton.fire('Success', 'Event created successfully', 'success');
        setData({
            title: '',
            time: '',
            date: '',
            excerpt: '',
            categories: [],
            location: '',
            body: '',
        });
        setShowModal(false);
    }

    //handle change.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    // handle multi select
    const selectFn = (e) => {
        e.forEach(el => {
            categories.includes(el.value) ? console.log('yes') : setCategories([...categories, el.value])
        })
    }

    return (
        <div className={`modal modal-blur fade events-open-modal ${show ? 'show display-block' : ''}`} id="modal-report" onClick={handleClose} tabIndex="-1" role={show ? 'dialog' : ''} aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" onClick={e => { e.stopPropagation(); }}>
                <div className="modal-content">
                    <form className='form-event'>
                        <div className="modal-header">
                            <h5 className="modal-title">New Event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor='title'>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id='title'
                                        name="title"
                                        placeholder="Enter event title..."
                                        value={data.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor='date' >Date</label>
                                        <input
                                            type="date"
                                            id='date'
                                            name='date'
                                            className="form-control"
                                            value={data.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Time</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id='time'
                                            name='time'
                                            value={data.time}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Summary</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="excerpt"
                                        placeholder="Enter event summary..."
                                        value={data.excerpt}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <div className="form-label">Select Categories</div>
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
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <label className="form-label">Location/Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Soliz House, Kampala Uganda'
                                            name='location'
                                            value={data.location}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <ImageUpload />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <CKEditor
                                        className="form-control-cke"
                                        editor={ClassicEditor}
                                        data={data.body}
                                        value={data.body}
                                        onReady={editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log('Editor is ready to use!', editor);
                                        }}
                                        onChange={(event, editor) => {
                                            setData({ ...data, body: editor.getData() })
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <span className="btn btn-secondary link-secondary" onClick={handleClose} >
                                Cancel
                            </span>
                            <span className="btn btn-primary ms-auto" onClick={handleSubmit}>
                                <IconPlus />
                                New Event
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventModal