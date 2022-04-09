import React from 'react';
import _ from 'lodash';

function TableBody(props) {

    //render cell
    const renderCell = (item, column) => {
        if (column.content) return column.content(item);
        console.log(item);
        return _.get(item, column.path);
    };

    //create key function
    const createKey = (item, column) => {
        return item._id + (column.path || column.key);
    };

    const { data, columns } = props;
    return (
        <tbody>
            {data.map((item, index) => (
                <tr key={item._id || item.id}>
                    {columns.map(column => {
                        return <td key={createKey(item, column)}>
                            {renderCell(Object.assign({}, item, { index: index + 1 }), column)}
                        </td>
                    })}
                </tr>
            )
            )
            }
        </tbody>

    );
}

export default TableBody;