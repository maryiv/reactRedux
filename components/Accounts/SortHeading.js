import React from 'react';

const SortHeading = function({ sort, heading, column, sortColumn, sortDirection }) {
    let sortClassName;
    if (sortColumn === column) {
        sortClassName = sortDirection === 'asc' ? 'arrow-up' : 'arrow-down';
    }
    let sortIcon = <div className={sortClassName}></div>;

    return <span>
        <a href="#" onClick={() => sort(column)}>{sortIcon} {heading}</a>
    </span>
};

export default SortHeading;