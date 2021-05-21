import React, {useContext} from 'react'
import {NewsContext} from '../../contexts/NewsContext'
import NewsCard from './NewsCard';

function NewsSection() {
    const {news} = useContext(NewsContext);

    return (
        <>
            <div className="news-headline">
                <p id="headline">TOP HEADLINES</p>
            </div>
            {(typeof news.articles != "undefined") ? (
                <div className="news-content-container">
                    {news.articles
                    .filter(article => article.urlToImage !== null)
                    .slice(0,8)
                    .map((article,index) => {
                        return(
                            <NewsCard key={index}
                                title={article.title}
                                description={article.description}
                                image={article.urlToImage}
                                url={article.url}
                                date={article.publishedAt}
                            />
                        )} 
                    )}
                </div>
            ) : ('')}
        </>
    )
}

export default NewsSection
