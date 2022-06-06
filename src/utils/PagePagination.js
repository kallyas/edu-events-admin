import React from 'react'
import _ from 'lodash';
import propTypes from 'prop-types';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';

function PagePagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;

  //create an array of page numbers using lodash (Optimized version of Underscore Js library)
  const pages = _.range(1, pageCount + 1);

  //handle previous button
  const handlePrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  }

  //handle next button
  const handleNext = () => {
    if (currentPage === pageCount) return;
    onPageChange(currentPage + 1);
  }

  return (
    <div className="card-footer d-flex align-items-center">
      <p className="m-0 text-muted">Showing <span>{currentPage}</span> to <span>{pageSize}</span> of <span>{itemsCount}</span> entries</p>
      <ul className="pagination m-0 ms-auto">
        <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href='#/' onClick={handlePrevious}>
            <IconChevronLeft />
            prev
          </a>
        </li>
        {pages.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a className="page-link" href='#/' onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
        <li className={currentPage === pageCount ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" href="#/" onClick={handleNext}>
            next
            <IconChevronRight />
          </a>
        </li>
      </ul>
    </div>
  )
}

PagePagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
}

export default PagePagination