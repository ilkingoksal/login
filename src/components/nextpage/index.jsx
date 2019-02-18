import React, { Component } from 'react';
import './index.css';

class NextPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }


  render() {
    return (
      <div className="next-page-wrapper">
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default NextPage;
