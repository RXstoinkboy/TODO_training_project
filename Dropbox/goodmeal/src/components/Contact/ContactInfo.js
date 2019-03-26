import React from 'react';
import {Wrapper, Title,HoursWrapper, Hours, Label, Time, Address} from './ContactInfo.style';

const ContactInfo = () => {
    return (
        <Wrapper>
        <Title>Opening hours</Title>
            <Hours>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
                <HoursWrapper>
                    <Label>Mon</Label>
                    <Time>9am:noon</Time>
                </HoursWrapper>
            </Hours>
            <Address>
                577 Maple Street 
                Brooklyn, NY 11204
            </Address>
        </Wrapper>
    );
};

export default ContactInfo;