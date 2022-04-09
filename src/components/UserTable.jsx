import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table';

const UserTable = (props) => {
    const columns = [
        { path: 'index', label: '#' },
        { path: 'name', label: 'Name', content: user => <Link to={`/users/${user.id}`}>{user.name}</Link> },
        { path: 'email', label: 'Email' },
        { path: 'occupation', label: 'Occupation' },
        { path: 'event_id', label: 'Event Id' },
        {
            key: 'delete', label: 'Actions', content: user => (<>
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
    const { users, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={users} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default UserTable