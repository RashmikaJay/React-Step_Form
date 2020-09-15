import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';

export class UserForms extends Component {

    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        occupation : '',
        city : '',
        bio : ''
    }

    //Next step Proceed (arrow function ekk hadanne)
    nextStep =() => {
        const {step} = this.state;
        this.setState( {
            step : step + 1
        })
    }

    //Go back to Previous step 
    prevStep = () =>{
        const {step} =this.state;
        this.setState({
            step : step - 1
        })
    }

    handleChange = input =>e => {
        this.setState( {[input] : e.target.value } );
        //api input karana onema ekk meken handle karanawa(fname,lname,occupation..)
    }

    render() 
    {
        const {step} = this.state;
        const {firstName,lastName,email,occupation,city,bio} =this.state;
        const values = {firstName,lastName,email,occupation,city,bio}

        switch (step){
            case 1: 
                return (
                    <FormUserDetails  
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {this.values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetail 
                        nextStep = {this.nextStep}
                        prevStep ={this.prevStep}
                        handleChange = {this.handleChange}
                        values = {this.values}
                    />
                )   
            case 3: 
            return (
                <Confirm 
                nextStep = {this.nextStep}
                prevStep ={this.prevStep}
                values = {this.values}
            />
            )
            case 4 :
                return <h1>Success</h1>
        }
    }
        
    
}

export default UserForms