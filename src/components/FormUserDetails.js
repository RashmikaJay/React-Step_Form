import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import UserForms from './UserForms';
export class FormUserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const values = this.props;
        //this.props.values kiyana ekata kelinma apita values kiyana eka use karanna plwn.
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        hintText ="Enter Your First Name"
                        floatingLabelText ="First Name"
                        onChange = {this.props.handleChange('firstName')}
                        defaultValue ={values.firstName}
                    /> 
                    <br/>
                    <TextField 
                        hintText ="Enter Your Last Name"
                        floatingLabelText ="Last Name"
                        onChange = {this.props.handleChange('lastName')}
                        defaultValue ={values.lastName}
                    /> 
                    <br/>
                    <TextField 
                        hintText ="Enter Your Email Address"
                        floatingLabelText ="Email"
                        onChange = {this.props.handleChange('email')}
                        defaultValue ={values.email}
                    /> 

                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary ={true}//theme eke colour ekata set wenawa meken
                        style={{margin :15}}
                        onClick = {this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>        
        )
    }
}

export default FormUserDetails
