import React, {useState, createContext} from 'react'

    const SearchContext = createContext();
    const SearchProvider = props => {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');
    const [queue, setQueue] = useState(false);

    const cityHandler = e => {
        setCity(e.target.value)
    }

    const searchHandler = (event) => {
        if(event.key === "Enter"){
            setSearch(city);
            setQueue(!queue);
        }
    }  
    
    return (
        <SearchContext.Provider value={{
            city,
            queue,
            search,
            setQueue,
            setCity,
            cityHandler,
            searchHandler
            }}>
            {props.children}
        </SearchContext.Provider>
    );
        
}

export {SearchProvider, SearchContext}
