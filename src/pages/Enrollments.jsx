import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, NavBar } from '../components'
import EnrollmentTable from '../components/EnrollmentTable'
import SearchBar from '../components/SearchBar'
import PagePagination from '../utils/PagePagination';
import { paginate } from '../utils/paginate'
import { enrollmentSelector, getEnrollmentAsync } from './../features/enrollment/enrollmentSlice';
// import exportToCSV from './../utils/ExportToCSV';

const Enrollments = () => {
    const dispatch = useDispatch();
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState({ path: 'firstName', order: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(getEnrollmentAsync());
    }, [dispatch]);

    const { data: enrollments } = useSelector(enrollmentSelector);

    //handle delete
    const handleDelete = (id) => {
        dispatch({
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

    const getData = () => {
        const allEnrollments = [...enrollments];
        const filtered = allEnrollments.filter(enrollment => enrollment.firstName.toLowerCase().includes(searchQuery.toLowerCase()));
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const paginated = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: paginated };
    }

    const { totalCount, data: myEnrollments } = getData();

    return (
        <div class="page">
            <NavBar />
            <div class="page-wrapper">
                <div class="page-body">
                    <div class="container-xl">
                        <div class="row row-cards">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title">Enrollments</h3>
                                    </div>
                                    <div class="card-body border-bottom py-3">
                                        <div class="d-flex">
                                            <div class="text-muted">
                                                Show
                                                <div className="mx-2 d-inline-block">
                                                    <div className="form-group">
                                                        <select className="form-control sm" aria-label=".form-select-lg example" name="rowNumber" onChange={(e) => handleRowNumber(e.target.value)}>
                                                            <option value="5">5</option>
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
                                            <div class="ms-auto text-muted">
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
                                    <div class="table-responsive">
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
    )
}

export default Enrollments