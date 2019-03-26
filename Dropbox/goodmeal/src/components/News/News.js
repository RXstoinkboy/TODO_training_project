import React from 'react';
import {Wrapper, NewsList, NewsItem, NewsItemPicture, NewsItemContent} from './News.style.js';
import newsList from '../../news';
import Fade from 'react-reveal';

const News = props => {
    return (
        <Wrapper>
            <NewsList>
                {newsList.map((item, index) => {
                    if(index%2 === 0){
                        return (
                            <NewsItem key={index}>
                                <Fade left>
                                    <NewsItemPicture
                                        photo={item.photo} />
                                </Fade>
                                    <NewsItemContent>
                                        <Fade top cascade>
                                            <h1 
                                                style={{
                                                    fontFamily: 'Kaushan Script', 
                                                    color: 'var(--secondaryColor',
                                                    margin: '20px 0'}}
                                                    >
                                                    {item.title}
                                            </h1>
                                        </Fade> 
                                        {item.content}
                                    </NewsItemContent>
                            </NewsItem>
                        )
                    } else {
                        return (
                            <NewsItem key={index}>
                                <NewsItemContent>
                                    <Fade top cascade>
                                        <h1 
                                            style={{
                                                fontFamily: 'Kaushan Script', 
                                                color: 'var(--secondaryColor',
                                                margin: '20px 0'}}
                                                >
                                                {item.title}
                                        </h1>
                                    </Fade>
                                    {item.content}
                                </NewsItemContent>
                                <Fade right>
                                    <NewsItemPicture
                                        photo={item.photo} />
                                </Fade>
                            </NewsItem>
                        )
                    }
                    
                })}
            </NewsList>
        </Wrapper>
    );
};

export default News;