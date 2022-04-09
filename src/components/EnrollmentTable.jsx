import React from 'react'
import { Link } from 'react-router-dom';
import Table from './Table';

const EnrollmentTable = (props) => {
    const columns = [
        { path: 'index', label: '#' },
        { path: 'firstName', label: 'Full Name', content: enrollment => <Link to={`/enrollments/${enrollment.id}`}>{enrollment.firstName + ' ' + enrollment.lastName}</Link> },
        { path: 'gender', label: 'Gender' },
        { path: 'phoneNumber', label: 'Phone Number' },
        { path: 'email', label: 'Email' },
        { path: 'education', label: 'Education' },
        { path: 'employment', label: 'Employment' },
        { path: 'experience', label: 'Experience' },
        { path: 'track', label: 'Track' },
        { path: 'country', label: 'Country' },
        {
            key: 'delete', label: 'Actions', content: enrollment => (<>
                <div className="btn-list flex-nowrap">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle align-text-top" data-bs-toggle="dropdown">
                            Actions
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#/">
                                Action
                            </a>
                            <a className="dropdown-item" href="#/">
                                Another action
                            </a>
                        </div>
                    </div>
                </div>
            </>
            )
        },
        { path: 'space', label: ' ' },
    ];
    const { enrollments, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={enrollments} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default EnrollmentTable