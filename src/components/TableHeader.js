import React from 'react';
import { IconCaretDown, IconCaretUp } from '@tabler/icons';

function TableHeader(props) {
    const raiseSort = path => {
        const sortColumn = { ...props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        props.onSort(sortColumn)
    }

    const renderIcon = column => {
        const { sortColumn } = props;
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <IconCaretUp />

        return <IconCaretDown />
    }
    return (
        <thead className='clickable'>
            <tr key={1}>
                {
                    props.columns.map(column => (
                        <th key={column.path || column.key}
                            onClick={() => raiseSort(column.path)}>
                            {column.label} {renderIcon(column)}
                        </th>
                    ))
                }
            </tr>
        </thead>
    );
}

export default TableHeader;