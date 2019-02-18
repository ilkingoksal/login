import React, { Component } from 'react';
import logo from '../../assets/logo.png'
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonText: '',
      linkText: '',
      username: '',
      password: '',
    }

    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.signupClickHandler = this.signupClickHandler.bind(this);
    this.forgotClickHandler = this.forgotClickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount() {
    if(this.props.loginValue === true) {
      this.setState({
        buttonText: 'Log in',
        linkText: 'Signup'
      })
    } else {
      this.setState({
        buttonText: 'Signup',
        linkText: 'Log in',
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginValue === true) {
      this.setState({
        buttonText: 'Log in',
        linkText: 'Signup'
      })
    } else {
      this.setState({
        buttonText: 'Signup',
        linkText: 'Log in',
      })
    }
  }

  handleUsernameInputChange(evt) {
    evt.preventDefault()
    this.setState({
      username: evt.target.value
    })
  }

  handlePasswordInputChange(evt) {
    evt.preventDefault()
    this.setState({
      password: evt.target.value
    })
  }

  forgotClickHandler(evt) {
    evt.preventDefault()
    this.props.goToForgotPassword()
  }

  signupClickHandler(evt) {
    evt.preventDefault()
    this.props.goToSignup()
  }

  submitHandler(evt) {
    evt.preventDefault()

    if (this.state.username.length !== 0 && this.state.password.length !== 0) {
      this.props.goToNextPage()
    }
  }

  render() {
    return (
      <div className="login">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img className="company-logo" src={logo} alt="Logo" />
            </div>

            <form onSubmit={this.submitHandler}>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="username" onChange={this.handleUsernameInputChange} />
              <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" onChange={this.handlePasswordInputChange} />
              <input type="submit" className="fadeIn fourth" value={this.state.buttonText} />
            </form>

            <div id="formFooter">
              <a className="underlineHover ahmet" href="#" onClick={this.forgotClickHandler}>Forgot Password?</a>
              <a className="underlineHover" href="#" onClick={this.signupClickHandler}>Go to {this.state.linkText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
