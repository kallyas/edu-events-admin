import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EventModal = (props) => {
    const { show, setShowModal } = props;
    const [body, setBody] = React.useState('');
    const handleClose = () => setShowModal(false);

    return (
        <div className={`modal modal-blur fade events-open-modal ${show ? 'show display-block' : ''}`} id="modal-report" onClick={handleClose} tabIndex="-1" role={show ? 'dialog' : ''} aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" onClick={e => { e.stopPropagation(); }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Event</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" name="example-text-input" placeholder="Enter event title ..." />
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Time</label>
                                    <input type="time" className="form-control" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Summary</label>
                                <input type="text" className="form-control" name="example-text-input" placeholder="Enter event summary..." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <div className="form-label">Select Categories</div>
                                    <select className="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Location/Address</label>
                                    <input type="text" className="form-control" placeholder='Soliz House, Kampala Uganda' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <CKEditor
                                    className="form-control-cke"
                                    editor={ClassicEditor}
                                    data={body}
                                    value={body}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setBody(data);
                                        console.log({ event, editor, data });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <span className="btn btn-secondary link-secondary">
                            Cancel
                        </span>
                        <span className="btn btn-primary ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            Create New Event
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal