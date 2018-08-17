import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import Routes from '../Routes';
import SearchBar from './SearchBar';

const AppBase = (props) => {
  const {
    handleSearchRequest,
    handleInfiniteLoad,
    searchResults,
    isLastPageofData,
    isLoading,
    fetchError,
    showErrorMessage,
    hideErrorMessage,
  } = props;

      return (
        <div style={{height:'100%', width:'100%'}}>
          <MuiThemeProvider>
            <div className='row'>
              <SearchBar
                handleSearchRequest={handleSearchRequest} 
                isLoading={isLoading}
              />
              <Routes
                searchResults={searchResults}
                isLastPageofData={isLastPageofData}
                handleSearchRequest={handleSearchRequest}
                handleInfiniteLoad={handleInfiniteLoad}
                showErrorMessage={showErrorMessage}
              />
              <Snackbar
                open={fetchError}
                message='Oops! Something went wrong. Please refresh and try again.'
                autoHideDuration={4000}
                onRequestClose={hideErrorMessage}
              />
            </div>
          </MuiThemeProvider>        
        </div>
      );
    }

  export default AppBase;