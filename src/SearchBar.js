import React from 'react'
import './SearchBar.css'
function SearchBar(props) {
    const { onSearch, query,setQuery } = props;

    return (
    <form onSubmit={onSearch}> 
        <input 
            type="search" 
            onChange={event => setQuery(event.target.value)} 
            name="search" 
            value={query} 
            placeholder="Search..."/>
    </form>
    )
}

export default SearchBar