import React from 'react';
import './comicDisplay.css';

const comicDisplay = (comic = {}, imageClass = "searchImage") => (
    <div className="comicDisplay">
        <div className="image-container">
            <img src={comic.img}
                alt={comic.title}
                title={comic.alt}
                className={imageClass}
            />
        </div>
        {Object.keys(comic)
        ? <div className="image-details">
            <div>Title:</div><div>{comic.title}</div>
            <div>Post number:</div><div>{comic.num}</div>
            <div>Date posted:</div><div>{`${comic.month}/${comic.day}/${comic.year}`}</div>
        </div>
        : "No details found!"
        }
    </div>
);

export { comicDisplay };