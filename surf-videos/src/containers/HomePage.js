import React, { Component } from 'react';
import VideoList from '../components/VideoList';

class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
      const {searchResults} = this.props;
      
      return (
        <VideoList searchResults={searchResults} />
      );
    }
  }
  
  export default HomePage;