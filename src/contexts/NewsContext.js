import React, {createContext, useState, useEffect} from 'react'

    const NewsContext = createContext();
    const NewsProvider = props => {
        
        const [news, setNews] = useState({});
        const [hour, setHour] = useState();

        useEffect(() => {
            const newsapiHandler = async () => {
                try{
                    const newsapi = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
                    const response = await fetch(newsapi);
                    const result = await response.json();
                    setNews(result);
                    console.log(result);
                    setHour(new Date().getHours());
                    } 
                catch (e){
                    console.log("Error in news fetch: ", e);
                }
            
            }
            newsapiHandler();
        }, [])


        return(
            <NewsContext.Provider value={{
                news,
                hour,
                setNews,
                setHour
                }}>
                {props.children}
            </NewsContext.Provider>
        )

    }
export {NewsProvider, NewsContext}
