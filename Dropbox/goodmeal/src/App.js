import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {PoseGroup} from 'react-pose';
import {RoutesContainer} from './Transition';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
const Hero = React.lazy(()=> import('./components/Hero/Hero'));
const Contact = React.lazy(()=> import('./components/Contact/Contact'));
const News = React.lazy(()=> import('./components/News/News'));
const About = React.lazy(()=> import('./components/About/About'));
const Recipes = React.lazy(()=> import('./components/Recipes/Recipes'));

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      color: window.location.pathname === '/contact' ? 'black' : 'white',
      date: new Date(),
      currentDate: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      submitForm: {},
      buttonDisabled: true,
      nameVal: true,
      emailVal: true,
      phoneVal: true,
      messageVal: true,
      namePattern: /[abcdefghijklmnopqrstuvwxyz]+/,
      emailPattern: /[^@\s]+@[^@\s]+\.[^@\s]+/,
      messagePattern: /\w+/
    }
  }
  handleChange =(date)=>{
    this.setState({date: date[0]});
  }

  phonePattern(str) {
      // accepted formats
          // 555-555-5555			
          // (555)555-5555		
          // (555) 555-5555		
          // 555 555 5555			
          // 5555555555		
          // 1234567890		
          // 1 555 555 5555		
        
        const pattern1 = /^\d{3}\-\d{3}\-\d{4}$/;
        const pattern2 = /^1*\(\d{3}\)\d{3}\-\d{4}$/;
        const pattern3 = /^(1\s)*\(\d{3}\)\s\d{3}\-\d{4}$/;
        const pattern4 = /^\d{3}\s\d{3}\s\d{4}$/;
        const pattern5 = /^\d{10}$/;
        const pattern6 = /^1*(\s|\-)\d{3}(\s|\-)\d{3}(\s|\-)\d{4}$/;
        
        if(pattern1.test(str) || pattern2.test(str) || pattern3.test(str) || pattern4.test(str) || pattern5.test(str) || pattern6.test(str)){
          return true
           }else{
            return false
          }
  }

  handleInputChange =e=>{
    const target = e.target;
    const value = e.target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    }, ()=>{
      // dynamic validation
      this.setState({
        phoneVal: this.phonePattern(this.state.phone) ? true : false,
        nameVal: this.state.namePattern.test(this.state.name) ? true : false,
        messageVal: this.state.messagePattern.test(this.state.message) ? true : false,
        emailVal: this.state.emailPattern.test(this.state.email) ? true : false,
      }, ()=>{
        // enable submit button based on validation
        const {nameVal,emailVal,phoneVal,messageVal} = this.state;
        if(nameVal && emailVal && messageVal && phoneVal){
          this.setState({
            buttonDisabled: false,
          }) 
          console.log('ok')
        } else {
          this.setState({
            buttonDisabled: true,
          })
        }
      })
  })
}

  handleSubmit =e=>{
    e.preventDefault();
    const day=`${this.state.date.getDate()}`;
    const month=( (this.state.date.getMonth())+1 < 10 ? `0${(this.state.date.getMonth())+1}` : `${(this.state.date.getMonth())+1}` );
    const year= `${1900 + this.state.date.getYear()}`;

    this.setState({
      buttonDisabled: true,
      submitForm: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        date: `${year}-${month}-${day}`,
        message: this.state.message
      }
    }, ()=>{
      // setTimeout just to simulate that is being sent
      // reset the state after submiting message
      setTimeout(()=>{
        this.setState({
          buttonDisabled: true,
          name: '',
          email: '',
          phone: '',
          message: '',
          submitForm: {},
          nameVal: true,
          emailVal: true,
          phoneVal: true,
          messageVal: true,
        })
        console.log('message sent')
      },3000)
      console.log(this.state.submitForm)})
    // a function to send data as an email to restaurant
    console.log('sending message')
  }

  // menu color based on path
  handleColor =()=>{
    this.setState({
      color: 'white'
    }, ()=>{
      this.setState({
        color: window.location.pathname == '/contact' ? 'black' : 'white'
      })
    }) 
  }

  componentDidMount(){
    const day=`${this.state.date.getDate()}`;
    const month=( (this.state.date.getMonth())+1 < 10 ? `0${(this.state.date.getMonth())+1}` : `${(this.state.date.getMonth())+1}` );
    const year= `${1900 + this.state.date.getYear()}`;
    this.setState({
      date: new Date(),
      currentDate: new Date(),
      submitForm: {
        date: `${year}-${month}-${day}`,
      }
    })
    console.log(this.state.date)
  }

  render(){
    return(
      <React.Fragment>
      <Navbar color={this.state.color} handleColor={this.handleColor}/>
          {/* <PoseGroup> */}
            <RoutesContainer key={window.location.pathname}>
              <React.Suspense fallback={<Loader />}>
                <Switch location={window.location}>
                  <Route 
                    exact path='/' 
                    render={(props)=>
                      <Hero 
                      {...props}
                      {...this.state}
                      handleColor={this.handleColor}
                      handleChange={this.handleChange}
                      />
                    } 
                    key='home' />
                  <Route path='/recipes' component={Recipes} key='recipes' />
                  <Route path='/news' component={News} key='news'/>
                  <Route path='/about' component={About} key='about' />
                  <Route 
                    path='/contact' 
                    render={(props)=>
                      <Contact 
                      {...props}
                      handleChange={this.handleChange}
                      handleColor={this.handleColor}
                      handleInputChange={this.handleInputChange}
                      handleSubmit={this.handleSubmit}
                      {...this.state}
                      />
                    } 
                    key='contact' />
                </Switch>
              </React.Suspense>
            </RoutesContainer>
          {/* </PoseGroup> */}
      </React.Fragment>
      )
    }
  }
  
  export default App;
  