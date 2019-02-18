import React, { Component } from 'react';
import Login from './components/login';
import NextPage from './components/nextpage';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValue: true,
      message: '',
      showNextpage: false,
    }

    this.goToSignup = this.goToSignup.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToForgotPassword = this.goToForgotPassword.bind(this);
  }

  componentDidMount() {

  }

  goToSignup() {
    this.setState({
      loginValue: !this.state.loginValue
    })
  }

  goToForgotPassword() {
    this.setState({
      message: 'This is the forgot password page, password is sampiyonbesiktas',
      showNextpage: true,
    })
  }

  goToNextPage() {
    if(this.state.loginValue === true) {
      this.setState({
        message: 'You have succesfully logged in.',
        showNextpage: true,
      })
    } else {
      this.setState({
        message: 'You have successfully signed up.',
        showNextpage: true,
      })
    }
  }

  render() {
    let renderedComponent;

    if (this.state.showNextpage === true) {
      renderedComponent = <NextPage message={this.state.message} />
    } else {
      renderedComponent = <Login loginValue={this.state.loginValue} goToSignup={this.goToSignup} goToNextPage={this.goToNextPage} goToForgotPassword={this.goToForgotPassword} />
    }
    return (
      <div className="app">
        {renderedComponent}
      </div>
    );
  }
}

export default App;
