import React from 'react';
import Recipe from './Recipe';

import styled from 'styled-components';

import PropTypes from 'prop-types';

class Results extends React.Component {

    render(){
        console.log(this.props.recipes);
        return (
            <Container>
                <RecipesList>
                    {this.props.recipes.map(item => 
                            <Recipe 
                                key={item.id}
                                f2fURL={item.f2f_url}
                                image={item.image_url}
                                publisher={item.publisher}
                                publisherURL={item.publisher_url}
                                recipeID={item.recipe_id}
                                source={item.source_url}
                                title={item.title}
                            />)}
                </RecipesList>
            </Container>
        );
    }
};

export default Results;

const Container = styled.div`
    display: flex;
    height: auto;
    width: 90%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`

const RecipesList = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`

Results.propTypes = {
    recipes: PropTypes.array
}