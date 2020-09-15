import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List ,ListItem} from 'material-ui/List';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import UserForms from './UserForms';

export class Success extends Component {

    render() {

        //const  { values : {firstName,lastName,email,occupation,city,bio }}  = this.props;
        //this.props.values kiyana ekata kelinma apita values kiyana eka use karanna plwn.
        //console.log(this.props.values);        
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm user data" />

                    <h1>Thank You For Your Submission.</h1>
                    <p>You will get an email with further instructions</p>
                    
                </React.Fragment>
            </MuiThemeProvider>        
        )
    }
}


export default Success
