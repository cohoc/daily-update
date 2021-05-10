import React, {useContext} from 'react'
import {HomeContext} from '../../contexts/HomeContext'
import NewsCard from './NewsCard';

function NewsSection() {
    const {news} = useContext(HomeContext);

    return (
        <>
            <div className="news-headline">
                <p id="headline">TOP HEADLINES</p>
            </div>
            {(typeof news.articles != "undefined") ? (
                <div className="home-news-container">
                    {news.articles.slice(0,8).map((news,index) => {
                        return(
                            <NewsCard key={index}
                                title={news.title}
                                description={news.description}
                                image={news.urlToImage}
                                url={news.url}
                                date={news.publishedAt}
                            />
                        )} 
                    )}
                </div>
            ) : ('')}
        </>
    )
}

export default NewsSection
