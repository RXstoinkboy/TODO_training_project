import React, { Component } from 'react';
import {MenuWrapper, Title, Section, Dish, Description, Price, MenuGrid, DishContainer} from './MenuStyle';
import {menu} from '../../../menu';
import Fade from 'react-reveal/Fade'


class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuWrapper>
                <Title>Menu</Title>
                    {menu.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Section>{item.section}</Section>
                                <MenuGrid>
                                    {
                                        item.items.map((dish, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Fade bottom cascade>
                                                        <DishContainer>
                                                            <Dish>{dish.name}</Dish>
                                                            <Description>{dish.description}</Description>
                                                            <Price>{dish.price}</Price>
                                                        </DishContainer>
                                                    </Fade>
                                                </React.Fragment>
                                            )
                                        })
                                    }                
                                </MenuGrid>
                            </React.Fragment>
                        )
                    })}
                </MenuWrapper>
            </React.Fragment>
        );
    }
}

export default Menu;