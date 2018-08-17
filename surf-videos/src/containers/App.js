import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import AppBase from '../components/AppBase';
import { BrowserRouter } from 'react-router-dom';
import { videoSearchEndpoint }  from '../apiEndpoints';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      searchResults: [],
      nextPageToken: '',
      isLastPageofData: false,
      isLoading: false,
      fetchError: false,
    };

    this.fetchSearchResults = debounce(this.fetchSearchResults.bind(this), 1000);
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
    this.hideErrorMessage = this.hideErrorMessage.bind(this);
  }

  fetchSearchResults(){
    const {query} = this.state;
    this.setState({isLoading: true}, () => {
      axios(videoSearchEndpoint.replace('{query}', query)).then(res => {
        const searchResults = [...res.data.items];
        const nextPageToken = res.data.nextPageToken;
        const isLastPageofData = nextPageToken && true; // coerce to boolean
  
        this.setState({
          isLoading: false,
          searchResults, 
          nextPageToken, 
          isLastPageofData});
          
      }).catch(err => {
        this.showErrorMessage();
      })
    })
  }

  handleSearchRequest(e) {
    e.persist()
    this.setState({
      query: e.target.value,
    }, () => {
      this.fetchSearchResults();
    });
  }

  handleInfiniteLoad() {
    const {nextPageToken, query} = this.state;
    const searchEndpoint = videoSearchEndpoint.replace('{query}', query) + `&pageToken=${nextPageToken}`;
    axios(searchEndpoint).then(res => {
      const searchResults = [...this.state.searchResults, ...res.data.items];
      const nextPageToken = res.data.nextPageToken;
      const isLastPageofData = nextPageToken && true; // coerce to boolean

      this.setState({searchResults, nextPageToken, isLastPageofData})
    }).catch(err => {
      this.showErrorMessage();
    })
  }

  showErrorMessage() {
    this.setState({fetchError: true});
  }

  hideErrorMessage() {
    this.setState({fetchError: false});
  }

  render() {
    const {
      searchResults,
      isLastPageofData,
      isLoading,
      fetchError,
    } = this.state;
    return (
      <BrowserRouter>
        <AppBase
          handleSearchRequest={this.handleSearchRequest}
          handleInfiniteLoad={this.handleInfiniteLoad}
          searchResults={searchResults}
          isLastPageofData={isLastPageofData}
          isLoading={isLoading}
          fetchError={fetchError}
          showErrorMessage={this.showErrorMessage}
          hideErrorMessage={this.hideErrorMessage}
        />
      </BrowserRouter>
    );
  }
}

export default App;
