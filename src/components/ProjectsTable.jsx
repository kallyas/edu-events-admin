import React from 'react'
import { Link } from 'react-router-dom';
import ActionGroup from './ActionGroup';
import Table from './Table';

function ProjectsTable(props) {
    const columns = [
        { path: 'index', label: '#' },
        { path: 'id', label: 'Id' },
        { path: 'title', label: 'Project', content: project => <Link to={`/projects/${project.id}`}>{project.title}</Link> },
        { path: 'date', label: 'DeadLine' },
        { key: 'actions', label: 'Actions', content: project => <ActionGroup item={project} /> },
        { path: 'space', label: ' ' },
    ]
    const { projects, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={projects} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default ProjectsTable