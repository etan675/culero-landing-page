import React from "react";
import '../../css/search-bar.css'

const SearchBar = () => {
    return (
        <input
            className="search-bar"
            style={{
                borderRadius: '50vh',
                padding: '6px',
                width: '100%',
                border: '1px solid lightBlue',
            }} 
            type="search" 
            placeholder="Search by name or skills"
        />
    )
}

export default SearchBar;