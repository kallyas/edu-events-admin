import React from 'react';
import { IconSearch } from '@tabler/icons';

const SearchBar = ({ name, type, onChange }) => {
    return (
        <div className="input-icon">
            <span className="input-icon-addon">
                <IconSearch />
            </span>
            <input type={type} className="form-control" id={name} placeholder="Search..." onChange={onChange} />
        </div>
    );
};

export default SearchBar;
