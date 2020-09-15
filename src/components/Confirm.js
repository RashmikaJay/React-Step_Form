import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List ,ListItem} from 'material-ui/List';
//import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import UserForms from './UserForms';

export class Confirm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const  { values : {firstName,lastName,email,occupation,city,bio }}  = this.props;
        //this.props.values kiyana ekata kelinma apita values kiyana eka use karanna plwn.
        console.log(this.props.values);        
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm user data" />
                    
                    <List>
                        <ListItem
                            primaryText ="First Name"
                            secondaryText = {firstName}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText ="Last Name"
                            secondaryText = {lastName}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText ="Email"
                            secondaryText = {email}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText ="Occupation"
                            secondaryText = {occupation}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText ="City"
                            secondaryText = {city}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText ="Bio"
                            secondaryText = {bio}
                        />
                    </List>
                    
                    <RaisedButton 
                        label="Continue"
                        primary ={true}//theme eke colour ekata set wenawa meken
                        style= {{margin :15}}
                        onClick = {this.continue}
                    />

                    <RaisedButton 
                        label="Back"
                        primary ={false}//theme eke colour ekata set wenawa meken
                        style={{margin :15}}
                        onClick = {this.back}
                    />

                </React.Fragment>
            </MuiThemeProvider>        
        )
    }
}


export default Confirm
