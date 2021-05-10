import React from 'react'

function NewsCard(props) {
    return (
        <div className="news-card">
            <div className="news-img-container">
                <img id="news-image" src={props.image} alt="articleimage"></img>
            </div>

            <div className="news-title-container">
                <p id="news-title">{props.title}</p>
            </div>

            <div className="news-desc-container">
                <p id="news-description">{props.description}</p>
            </div>

            <a className="news-readmore" href={`/${props.news}`}>
                <span id="readmore-text">
                    Read More ...
                </span>
            </a>
        </div>
    )
}

export default NewsCard
