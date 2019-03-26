import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import {ContactWrapper} from './ContactStyle';
import markerIcon from '../../img/marker.png';

class Contact extends Component {
    constructor(){
        super();
        this.createInfoWindow = this.createInfoWindow.bind(this);
    };

    createInfoWindow(e, map) {
        var contentString = 
        `<div style='text-align: center'>
            <h1>Good Meal</h1>
            <br/>
            <h3>Visit us to get the best food in town.</h3>
            <br/>
            <p>577 Maple Street</p>
            <p>Brooklyn, NY 11204</p>
        </div>`

        const infoWindow = new window.google.maps.InfoWindow({
            content: contentString,
            position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
        })
        infoWindow.open(map)
      }

    render(){
        return (
            <div style={{
                background: 'white', 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                display: 'flex', 
                justifyContent:'center', 
                alignItems:'center'}}>
                <ContactWrapper>
                    <ContactInfo />
                    <ContactForm 
                        // currentDate={this.props.currentDate}
                        // date={this.props.date}
                        // handleChange={this.props.handleChange}
                        // handleColor={this.props.handleColor}
                        // handleInputChange={this.props.handleInputChange}
                        //     name={this.props.name}
                        //     email={this.props.email}
                        //     phone={this.props.phone}
                        //     message={this.props.message}
                        // handleSubmit={this.props.handleSubmit}
                        // buttonDisabled={this.props.buttonDisabled}
                        // nameVal={this.props.nameVal}
                        // phoneVal={this.props.phoneVal}
                        // emailVal={this.props.emailVal}
                        // messageVal={this.props.messageVal}
                        // handleCurrentValidation={this.props.handleCurrentValidation}
                        {...this.props}
                        />
                    <ContactMap
                        id="myMap"
                        options={{
                        center: { lat: 40.747814, lng: -73.991099 },
                        zoom: 17,
                        styles: [
                            {
                                "featureType": "all",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "saturation": -100
                                    },
                                    {
                                        "gamma": 0.5
                                    }
                                ]
                            }
                        ]
                    }}
                    onMapLoad={map => {
                        const marker = new window.google.maps.Marker({
                            position: { lat: 40.747814, lng: -73.991099 },
                            map: map,
                            icon: markerIcon,
                            animation: window.google.maps.Animation.DROP,
                            title: 'Good Meal'
                        });
                        marker.addListener('click', e => {
                            this.createInfoWindow(e, map)
                        })
                    }}
                    />
                </ContactWrapper>
            </div>
    );

    }
};

export default Contact;