import React from 'react'
import { Link } from 'react-router-dom';
import Table from './Table';

function ProjectsTable(props) {
    const columns = [
        { path: 'index', label: '#' },
        { path: 'title', label: 'Project', content: project => <Link to={`/projects/${project.id}`}>{project.title}</Link> },
        { path: 'date', label: 'DeadLine' },
        {
            key: 'delete', content: project => (<>
                {/* <button onClick={() => props.onDelete(project)} className="btn btn-danger">Delete</button> */}
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
        }
    ]
    const { projects, onSort, sortColumn } = props;
    return (
        <Table columns={columns} data={projects} sortColumn={sortColumn} onSort={onSort} />
    )
}

export default ProjectsTable