import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from '../containers/HomePage';

class AppBase extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const {searchResults} = this.props;

    return(
    <div>
      <MuiThemeProvider>
        <SearchBar />
        <HomePage />
      </MuiThemeProvider>
    </div>);
  }
}

export default AppBase;