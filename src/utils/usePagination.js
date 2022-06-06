const usePagination = (setCurrentPage, setPageSize, setSearchQuery, setSortColumn) => {
  const handlePageChange =  (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  const handleSort =  (sortColumn) => {
    setSortColumn(sortColumn);
  }
  const handleSearch =  (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }
  const handleRowNumber =  (value) => {
    const newPageSize = parseInt(value);
    setCurrentPage(1);
    setPageSize(newPageSize);
  }

  return {
    handlePageChange,
    handleRowNumber,
    handleSearch,
    handleSort
  }
};

export default usePagination;