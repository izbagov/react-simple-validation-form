import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      userName: "",
      userNameError: "",
      email: "",
      emailError: "",
      password: "",
      passowrdError: "",
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate() {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailError: "",
      passwordError: ""
    };

    if (this.state.userName.length < 5) {
      isError = true;
      errors.userNameError = "Username needs to be atleats 5 characters long"
    }

    if(this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    })
    
    return isError;
  }

  handleSubmit(e) {
    e.preventDefault();

    const err = this.validate();

    if(!err) {
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        userName: "",
        userNameError: "",
        email: "",
        emailError: "",
        password: "",
        passowrdError: "",
      })
    }
  }

  render() {
    return (
      <div className="Form">
        <TextField
          name="firstName"
          hintText="John "
          floatingLabelText="First name"
          value={this.state.firstName}
          errorText={this.state.firstNameError}
          onChange={e => this.handleChange(e)}
          floatingLabelFixed={true}
        /><br />
        <TextField
          name="lastName"
          hintText="Doe"
          floatingLabelText="Last name"
          value={this.state.lastName}
          errorText={this.state.lastNameError}
          onChange={e => this.handleChange(e)}
          floatingLabelFixed={true}
        /><br />
        <TextField
          name="email"
          hintText="steve@jobs.com"
          floatingLabelText="Email"
          errorText={this.state.emailError}
          value={this.state.email}
          onChange={e => this.handleChange(e)}
          floatingLabelFixed={true}
        /><br />
        <TextField
          name="userName"
          hintText="johnny"
          floatingLabelText="Username"
          errorText={this.state.userNameError}
          value={this.state.userName}
          onChange={e => this.handleChange(e)}
          floatingLabelFixed={true}
        /><br />
        <TextField
          name="password"
          hintText="Very strong"
          floatingLabelText="Your password"
          errorText={this.state.passowordError}
          value={this.state.password}
          onChange={e => this.handleChange(e)}
          type="password"
          floatingLabelFixed={true}
        /><br />
        <RaisedButton
          onClick={e => this.handleSubmit(e)}
          label="Registration"
          primary={true}
        />
      </div>
    );
  }
}

export default Form;
