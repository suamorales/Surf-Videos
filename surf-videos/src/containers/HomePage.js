import React, { Component } from 'react';
import VideoList from '../components/VideoList';

class HomePage extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render() {
      const {handleSearchRequest, handleInfiniteLoad, searchResults, isLastPageofData} = this.props;

      return (
        <VideoList
          handleSearchRequest={handleSearchRequest}
          handleInfiniteLoad={handleInfiniteLoad}
          searchResults={searchResults}
          isLastPageofData={isLastPageofData}
        />
      );
    }
  }
  
  export default HomePage;