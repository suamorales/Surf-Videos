import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import VideoDetailPage from './containers/VideoDetailPage';

const Routes = (props) => {
  const {
    searchResults,
    isLastPageofData,
    handleSearchRequest,
    handleInfiniteLoad,
    showErrorMessage,
  } = props;
  return(
    <Switch>
      <Route path="/watch/:videoId" render={
        props => (<VideoDetailPage
                    searchResults={searchResults}
                    showErrorMessage={showErrorMessage}
                    {...props}
                  />)
      }/>)
      <Route render={
        props => (<HomePage
                    handleSearchRequest={handleSearchRequest}
                    handleInfiniteLoad={handleInfiniteLoad}
                    searchResults={searchResults}
                    isLastPageofData={isLastPageofData}
                    {...props}
                  />)
      } />
    </Switch>)
}

export default Routes;

