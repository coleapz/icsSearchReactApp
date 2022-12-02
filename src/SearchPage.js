import React from 'react'
import SearchBar from './SearchBar'
import uciLogo from './images/uciLogo.png';
import { useNavigate, createSearchParams  } from "react-router-dom"
import './SearchPage.css'


function SearchPage(){
    // Store our query variable
    const [query, setQuery] = React.useState("");

    // Sets up clicking on UCI Logo
    let navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    // Store Data returned from search api
    const [data, setData] = React.useState([[]])

    const searchAndSetData = () => {
        fetch(window.location.href).then(
            res => res.json()
            ).then(
            data => {
                setData(data['data'])
                setQuery(data['query'])
                console.log(data)
            }
            )
    }
    // When our Component first mounts set the data
    React.useEffect(() => {
        // Sets the search Data
        searchAndSetData()
    }, [])

    // onsearch what is done when search is done
    const onSearch = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/search',
            search: `?${createSearchParams({'q': query})}`,
        });
        searchAndSetData();
    }
    
    return (
        <>
            <div className='search-bar-wrapper'>
            <div className="image-div">
                <img
                    src={uciLogo}
                    alt="UCILOGO"
                    width="100"
                    height="100"
                    onClick= {goHome}
                />
            </div>
            <div className='searchbar-div'>
                <SearchBar 
                    query={query} 
                    onSearch={onSearch}
                    setQuery={setQuery}/>
            </div>
                
            </div>
            {data.slice(0,10).map((url)=> {
                return(
                <div className= "Blocks">
                    <a href={url} target= "_blank"> {url} </a>
                </div>
            )})}
            {data.length == 0 && <h1>Sorry Page Not Found</h1>}
        </>
      )
}

export default SearchPage