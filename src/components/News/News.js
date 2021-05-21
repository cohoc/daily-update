import React from 'react'
import { NewsProvider } from '../../contexts/NewsContext'
import '../../css/News.css'
import NewsHeader from './NewsHeader'
import NewsSection from './NewsSection'

function News() {
    return (
        <NewsProvider>
            <div className="news-container">
                <NewsHeader />
                <NewsSection />
            </div>
        </NewsProvider>
        
    )
}

export default News
