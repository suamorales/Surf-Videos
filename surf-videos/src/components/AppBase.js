import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppBase extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return(
    <div>
      <MuiThemeProvider>
        <SearchBar />
      </MuiThemeProvider>
    </div>);
  }
}

export default AppBase;