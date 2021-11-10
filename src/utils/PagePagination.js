import  { Nav, Pagination } from '@themesberg/react-bootstrap'

const PagePagination = ({ itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Nav>
        <Pagination className="mb-2 mb-lg-0">
          <Pagination.Prev>
            Previous
          </Pagination.Prev>
          {pageNumbers.map(number => (
            <Pagination.Item key={number} onClick={() => paginate(number)}></Pagination.Item>
          ))}
          <Pagination.Next>
            Next
          </Pagination.Next>
        </Pagination>
      </Nav>
    )
}

export default PagePagination
