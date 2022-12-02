import React from 'react'
import SearchBar from './SearchBar'
import './HomePage.css'
import { useNavigate, createSearchParams } from "react-router-dom"


function HomePage(){
    const [query, setQuery] = React.useState("")
    const navigate = useNavigate();

    const search = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/search',
            search: `?${createSearchParams({'q': query})}`,
        });
    }
    return (
        <div className="center-screen">
          <div className="vertical-stack">
            <div><h1 className="uci-header">UCI ICS Search</h1></div>
            <div className="search-div">
              <SearchBar 
                onSearch={search} 
                query={query}
                setQuery={setQuery}/>
            </div>
          </div>
        </div>
      )
}

export default HomePage