import React from 'react';
import {Wrapper, Title, Form, Button,Permission, Name, Email, Phone, Message, Loader} from './ContactForm.style';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const ContactForm = props => {
    return (
        <Wrapper>
            <Title>contact form</Title>
            <Form
                onSubmit={props.handleSubmit}>
                <Name 
                    type='text'
                    name='name'
                    value={props.name}
                    onChange={props.handleInputChange}
                    placeholder='name and surname'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit}
                    nameVal={props.nameVal} />
                <Email 
                    type='email'
                    name='email'
                    value={props.email}
                    onChange={props.handleInputChange}
                    placeholder='youremail@example.com'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit}
                    emailVal={props.emailVal} />
                <Phone 
                    type='text'
                    name='phone'
                    value={props.phone}
                    onChange={props.handleInputChange}
                    placeholder='ex: 0090-9000-900-90'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit}
                    phoneVal={props.phoneVal} />
                <Message 
                    type='text'
                    name='message'
                    value={props.message}
                    onChange={props.handleInputChange}
                    placeholder='please write your message here'
                    handleInputChange={props.handleInputChange}
                    handleSubmit={props.handleSubmit}
                    messageVal={props.messageVal} />
                <Flatpickr
                    value={props.date}
                    onChange={props.handleChange}
                    options={{minDate: props.currentDate}}
                    style={{
                        margin:'0', 
                        padding: '.5rem', 
                        color: 'var(--mainColor)', 
                        border: '1px solid var(--mainColor)', 
                        fontSize:'1rem',
                        background: 'transparent'}} />
                <Button 
                    type='submit'
                    disabled={props.buttonDisabled}
                    buttonDisabled={props.buttonDisabled}
                    >
                    submit
                </Button>
                <Permission>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore ipsam molestiae cumque natus repudiandae harum perspiciatis vel animi rem aperiam in, laudantium, quaerat adipisci alias perferendis eum recusandae. Impedit dolores similique, repellat nobis in alias aliquid eveniet non, quibusdam quo nisi, ad quos. Alias voluptatibus incidunt eveniet eius delectus! Ea molestias suscipit est at a? Voluptatibus ratione quas architecto!</Permission>
            </Form>
        </Wrapper>
    );
};

export default ContactForm;