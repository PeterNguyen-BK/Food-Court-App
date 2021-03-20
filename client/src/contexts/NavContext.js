import React, { useState, useRef } from 'react';

export const NavContext = React.createContext();

export function NavProvider(props) {

    let obj = {};
    if (!localStorage.getItem('Filters')) {
        obj = {
            page: 1,
            limit: 5,
            term: ''
        }
    }else {
        obj = JSON.parse(localStorage.getItem('Filters'));
    }

    const [Filters, setFilters] = useState(obj);

    const handlePageChange = (newPage) => {
        setFilters({
            ...Filters,
            page: newPage
        });
    };

    const handleFilterChange = (newFilter) => {
        setFilters({
            ...Filters,
            page: 1,
            term: newFilter
        })
    }

    return <NavContext.Provider value={{Filters: Filters, handlePageChange: handlePageChange, handleFilterChange: handleFilterChange}}>
        {props.children}
    </NavContext.Provider>;
}