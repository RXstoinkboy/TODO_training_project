import React, {Component} from 'react';
import {Wrapper} from './ContactMap.style'

class ContactMap extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  googleChecker =()=>{
    if (!window.google) {
      const source = document.createElement('script');
      source.type = 'text/javascript';
      source.src = `https://maps.google.com/maps/api/js?key=AIzaSyDmrGP-sjeDWfqeD2AUJ8qCQPMmTtrDBFs`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(source, x);

      source.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } 
    
    else {
      this.onScriptLoad();
    }
  }

  componentDidMount(){
    // const mapsKey = process.env.REACT_APP_APP_ID;
    this.googleChecker()
  }

  render() {
    return (
        <Wrapper id={this.props.id} />
    );
  }
}

export default ContactMap
