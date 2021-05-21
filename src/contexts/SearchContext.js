import React, {useState, createContext} from 'react'

    const SearchContext = createContext();
    const SearchProvider = props => {

    const [location, setLocation] = useState('');
    const [search, setSearch] = useState('');
    const [queue, setQueue] = useState(false);

    const locationHandler = e => {
        setLocation(e.target.value)
    }

    const searchHandler = (event) => {
        if(event.key === "Enter"){
            setSearch(location);
            setQueue(!queue);
        }
    }  
    
    return (
        <SearchContext.Provider value={{
            location,
            queue,
            search,
            setQueue,
            setLocation,
            locationHandler,
            searchHandler
            }}>
            {props.children}
        </SearchContext.Provider>
    );
        
}

export {SearchProvider, SearchContext}
