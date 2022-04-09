import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

function Table({ columns, data, sortColumn, onSort }) {
    return (
        <table className="table">
            <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
            <TableBody data={data} columns={columns} />
        </table>
    )
}

export default Table