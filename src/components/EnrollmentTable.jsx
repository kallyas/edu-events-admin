import React from 'react'
import { Link } from 'react-router-dom';
import ActionGroup from './ActionGroup';
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
        { key: 'actions', label: 'Actions', content: enrollment => <ActionGroup item={enrollment} /> },
        { path: 'space', label: ' ' },
    ];
    const { enrollments, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={enrollments} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default EnrollmentTable