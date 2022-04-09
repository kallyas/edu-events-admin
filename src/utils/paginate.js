import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converting items to lodash wrapper
        .slice(startIndex) // slicing the items
        .take(pageSize) // taking the pageSize
        .value();
}