import React from 'react'

function NewsCard(props) {

const dateHandler = date => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = date.substring(0,4);
    let month = months[(Number(date.substring(5,7))) - 1];
    let day = date.substring(8,10);
    return(`${month} ${day}, ${year}`)
}

    return (
        <div className="news-card">
            <div className="news-img-container">
                <img id="news-image" src={props.image} alt="articleimage"></img>
            </div>

            <div className="news-info-container">
                <div className="news-title-container">
                    <p id="news-title">{props.title}</p>
                </div>

                <div className="news-date-container">
                    <p id="news-date">{dateHandler(props.date)}</p>
                </div>
            </div>
            

            {/*<div className="news-desc-container">
                <p id="news-description">{props.description}</p>
            </div>*/}

            {/*<a className="news-readmore" href={`/${props.news}`}>
                <span id="readmore-text">
                    Read More ...
                </span>
            </a>*/}
        </div>
    )
}

export default NewsCard
