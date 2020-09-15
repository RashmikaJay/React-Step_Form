import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import UserForms from './UserForms';
export class FormPersonalDetail extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const values = this.props;
        //this.props.values kiyana ekata kelinma apita values kiyana eka use karanna plwn.
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        hintText ="Enter Your Occupation"
                        floatingLabelText ="Occupation"
                        onChange = {this.props.handleChange('occupation')}
                        defaultValue ={values.occupation}
                    /> 
                    <br/>
                    <TextField 
                        hintText ="Enter Your City"
                        floatingLabelText ="City"
                        onChange = {this.props.handleChange('city')}
                        defaultValue ={values.city}
                    /> 
                    <br/>
                    <TextField 
                        hintText ="Enter Your Bio"
                        floatingLabelText ="Bio"
                        onChange = {this.props.handleChange('bio')}
                        defaultValue ={values.bio}
                    /> 

                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary ={true}//theme eke colour ekata set wenawa meken
                        style={{margin :15}}
                        onClick = {this.continue}
                    />

                    <RaisedButton 
                        label="Back"
                        primary ={true}//theme eke colour ekata set wenawa meken
                        style={{margin :15}}
                        onClick = {this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>        
        )
    }
}

export default FormPersonalDetail
