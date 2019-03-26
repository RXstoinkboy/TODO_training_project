import React from 'react';
import {Wrapper, Title, Image, ImageWrapper, Source, RecipeID, F2FURL, PublisherSourceUrl, Publisher, PublisherUrl} from './Recipe.style.js';

const Recipe = props => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={props.image}/>
            </ImageWrapper>
            <Title>{props.title}</Title>
            <Source>
                More information about recipe:
                <RecipeID>Recipe ID: {props.recipeID}</RecipeID>
                <F2FURL href={props.f2fURL}>Click to see more info about this recipes</F2FURL>
            </Source>
            <Publisher>
                Publisher: {props.publisher}
                <PublisherUrl href={props.publisherURL}>@ {props.publisherURL}</PublisherUrl>
                <PublisherSourceUrl href={props.source}>Original source.</PublisherSourceUrl>
            </Publisher>
        </Wrapper>
    );
};

export default Recipe;