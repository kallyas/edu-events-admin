import { useState } from 'react'

const usePagination = () => {
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

}