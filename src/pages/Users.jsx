import React, { useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, NavBar } from '../components';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import PagePagination from '../utils/PagePagination';
import { paginate } from '../utils/paginate';
import { usersSelector } from '../features/users/usersSlice';
import ExportLabel from '../components/ExportLabel';
import usePagination from '../utils/usePagination';

const Users = () => {
  const { users } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: 'name', order: 'asc' });
  const [searchQuery, setSearchQuery] = useState('');
  const { handlePageChange, handleRowNumber, handleSearch, handleSort } = usePagination(
    setCurrentPage,
    setPageSize,
    setSearchQuery,
    setSortColumn
  );

  //handle delete
  const handleDelete = (id) => {
    dispatch({
      payload: id,
    });
  };

  const getData = () => {
    const allUsers = [...users];
    const filtered = allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.occupation.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginated = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginated };
  };

  const { totalCount, data: myUsers } = getData();

  const columns = [
    { title: '#', path: 'index' },
    { title: 'Name', path: 'name' },
    { title: 'Email', path: 'email' },
    { title: 'Occupation', path: 'occupation' },
    { title: 'Event Id', path: 'event_id' },
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
                    <h3 className="card-title text-muted-mod">Users List</h3>
                    <ExportLabel data={users} columns={columns} fileName={'EDU - Users'} />
                  </div>
                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="text-muted show-data">
                        <span>Show</span>
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
                        <span>entries</span>
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
                    {/* Table */}
                    <UserTable
                      users={myUsers}
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

export default Users;
