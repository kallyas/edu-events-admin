import React from 'react';
import { Link } from 'react-router-dom';
import ActionGroup from './ActionGroup';
import Table from './Table';

const UserTable = (props) => {
    const columns = [
        { path: 'index', label: '#' },
        { path: 'name', label: 'Name', content: user => <Link to={`/users/${user.id}`}>{user.name}</Link> },
        { path: 'email', label: 'Email' },
        { path: 'occupation', label: 'Occupation' },
        { path: 'event_id', label: 'Event Id' },
        { key: 'actions', label: 'Actions', content: user => <ActionGroup item={user} /> },
        { path: 'space', label: ' ' },
    ];
    const { users, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={users} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default UserTable