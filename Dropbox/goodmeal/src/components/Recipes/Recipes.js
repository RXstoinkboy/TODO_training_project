import {Wrapper, SearchBar, SearchButton} from './Recipes.style.js';
import React, { Component } from 'react';
import Results from './Results';

class Recipes extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            recipes: []
        }
    }
    handleChange=e=>{
        this.setState({
            search: e.target.value
        })
    }
    

    handleSearch =()=>{
            if(this.state.search !== ''){
                const url = `https://www.food2fork.com/api/search?key=367d2d744696f9edff53ec5b33a1ce64&q=${this.state.search}`
                
                fetch(url)
                        .then(data => data.json())
                        .then(jsonData => {
                            this.setState({recipes: jsonData.recipes})
                        })
                
            } else {
                console.log('empty')
            }
    }

    render() {
        return (
            <Wrapper>
                <SearchBar 
                    value={this.state.search} 
                    type='search' 
                    onChange={this.handleChange}>
                </SearchBar>
                <SearchButton onClick={this.handleSearch}>SEARCH</SearchButton>
             
                <Results recipes={this.state.recipes}/>
                
            </Wrapper>
        );
    }
}

export default Recipes;