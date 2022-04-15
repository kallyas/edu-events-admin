import _ from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, NavBar } from '../components';
import EnrollmentTable from '../components/EnrollmentTable';
import ExportLabel from '../components/ExportLabel';
import SearchBar from '../components/SearchBar';
import PagePagination from '../utils/PagePagination';
import { paginate } from '../utils/paginate';
import usePagination from '../utils/usePagination';
import { enrollmentSelector } from './../features/enrollment/enrollmentSlice';

const Enrollments = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: 'firstName', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const { handlePageChange, handleRowNumber, handleSearch, handleSort } = usePagination(setCurrentPage, setPageSize, setSearchQuery, setSortColumn);

  const { data: enrollments } = useSelector(enrollmentSelector);

  //handle delete
  const handleDelete = (id) => {
    dispatch({
      payload: id,
    });
  };

  const getData = () => {
    const allEnrollments = [...enrollments];
    const filtered = allEnrollments.filter(
      (enrollment) =>
        enrollment.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.employment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enrollment.gender.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginated = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginated };
  };

  const { totalCount, data: myEnrollments } = getData();

  const columns = [
    { title: 'First Name', path: 'firstName' },
    { title: 'Last Name', path: 'lastName' },
    { title: 'Gender', path: 'gender' },
    { title: 'Email', path: 'email' },
    { title: 'Phone Number', path: 'phoneNumber' },
    { title: 'Education', path: 'education' },
  ];

  return (
    <div className="page">
      <NavBar />
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-cards">
              <div className="col-12">
                <div className="card">
                  <div className="card-header card-export">
                    <h3 className="card-title text-muted-mod">Enrollment List</h3>
                    <ExportLabel
                      data={enrollments}
                      columns={columns}
                      fileName={'EDU - Enrollments'}
                    />
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted">
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
                      <div className="ms-auto d-flex text-muted">
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
                    {/* Table */}
                    <EnrollmentTable
                      enrollments={myEnrollments}
                      onDelete={handleDelete}
                      onSort={handleSort}
                      sortColumn={sortColumn}
                    />
                  </div>
                  {/* pagination */}
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
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Enrollments;
