import React from 'react';
import he from 'he';

interface EachCardType {
    Title: string;
    SelfText_HTML: string;
    URL: string;
    score: number;
}

const EachCard = ({ Title, SelfText_HTML, URL, score }:EachCardType) => {
    const decodedSelfText = SelfText_HTML ? he.decode(SelfText_HTML) : '';

    return (
        <aside className='each-card'>
                <h2>{Title}</h2>
                <div>{decodedSelfText && <div dangerouslySetInnerHTML={{ __html: decodedSelfText.slice(0,200)}} />}</div>
                <p>Score {score}</p>
                <a href={URL} className='find-more' target='_blank'>Find More</a>
        </aside>
    );
};

export default EachCard;
