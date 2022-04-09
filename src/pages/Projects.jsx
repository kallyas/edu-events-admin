import React, { useEffect, useState } from 'react';
import { NavBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAsync, projectsSelector } from '../features/projects/projectSlice';
import ProjectsTable from '../components/ProjectsTable';
import PagePagination from '../utils/PagePagination';
import _ from 'lodash'
import { paginate } from '../utils/paginate';
import SearchBar from '../components/SearchBar';

const Projects = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchProjectsAsync());
    }, [dispatch]);

    let { projects } = useSelector(projectsSelector);

    //handle delete
    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_PROJECT',
            payload: id
        });
    }

    //handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    //handle sort
    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn);
    }

    //handle search
    const handleSearch = (query) => {
        setSearchQuery(query);
        setCurrentPage(1);
    }

    //handle row number
    const handleRowNumber = (value) => {
        const newPageSize = parseInt(value);
        setPageSize(newPageSize);
    }

    //get data
    const getData = () => {
        const allProjects = [...projects];
        const filtered = allProjects.filter(project => project.title.toLowerCase().includes(searchQuery.toLowerCase()));
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const paginated = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: paginated };
    }

    const { totalCount, data: myProjects } = getData();

    return (

        <>
            <div className="page">
                <NavBar />
                <div className="page-wrapper">
                    <div className="page-body">
                        <div className="container-xl">
                            <div className="col-12">
                                <div className="card card-content">
                                    <div className="card-header">
                                        <h3 className="card-title">Projects</h3>
                                    </div>
                                    <div className="card-body border-bottom py-3">
                                        <div className="d-flex">
                                            <div className="text-muted">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <div className="form-group">
                                                        <select className="form-control sm" aria-label=".form-select-lg example" name="rowNumber" onChange={(e) => handleRowNumber(e.target.value)}>
                                                            <option value="5">5</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                entries
                                            </div>
                                            <div className="ms-auto text-muted">
                                                <SearchBar
                                                    value={searchQuery}
                                                    onChange={(e) => handleSearch(e.target.value)}
                                                    type="text"
                                                    name="searchQuery"
                                                    label="Search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <ProjectsTable
                                            projects={myProjects}
                                            onDelete={handleDelete}
                                            onSort={handleSort}
                                            sortColumn={sortColumn}
                                        />
                                    </div>
                                    <PagePagination
                                        itemsCount={totalCount}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Projects;
