import React, { useState } from 'react';
import { Footer, NavBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelector } from '../features/projects/projectSlice';
import ProjectsTable from '../components/ProjectsTable';
import PagePagination from '../utils/PagePagination';
import _ from 'lodash';
import { paginate } from '../utils/paginate';
import SearchBar from '../components/SearchBar';
import ExportLabel from '../components/ExportLabel';
import usePagination from '../utils/usePagination';

const Projects = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const { handlePageChange, handleRowNumber, handleSearch, handleSort } = usePagination(
    setCurrentPage,
    setPageSize,
    setSearchQuery,
    setSortColumn
  );

  let { projects } = useSelector(projectsSelector);

  //handle delete
  const handleDelete = (id) => {
    dispatch({
      payload: id,
    });
  };

  //get data
  const getData = () => {
    const allProjects = [...projects];
    const filtered = allProjects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginated = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginated };
  };

  const { totalCount, data: myProjects } = getData();

  const columns = [
    { title: 'Title', path: 'title' },
    { title: 'Deadline', path: 'date' },
  ];

  return (
    <div className="page">
      <NavBar />
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <div className="card card-content">
                  <div className="card-header card-export">
                    <h3 className="card-title text-muted-mod">Project List</h3>
                    <ExportLabel data={projects} columns={columns} fileName={'EDU - Projects'} />
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted-mod">
                        Show
                        <div className="mx-2 d-inline-block">
                          <div className="form-group">
                            <select
                              className="form-control sm text-muted"
                              aria-label=".form-select-lg example"
                              name="rowNumber"
                              onChange={(e) => handleRowNumber(e.target.value)}
                            >
                              <option value="10">10</option>
                              <option value="15">15</option>
                              <option value="20">20</option>
                              <option value="25">25</option>
                              <option value="30">30</option>
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
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
