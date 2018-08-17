import React from 'react';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionHomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter } from 'react-router';

const SearchBar = (props) => {
  const {handleSearchRequest, isLoading, location} = props;
  const isOnDetailPage = location.pathname.includes('/watch'); // only allow search on home page
  return (
    <AppBar
      iconElementLeft={<Link to='/'><IconButton><ActionHomeIcon color='white' /></IconButton></Link>}
      className='col-12'
      title={<span>Drift Surfing Channel</span>}
      style={{backgroundColor: '#157bfc'}}>
      <div className='row align-items-center' style={{marginRight: 10}}>
        {(isLoading &&
          <CircularProgress color='white' size={30} thickness={5} style={{marginRight: 10}}/>)
          || <SearchIcon color='white' />}
        <TextField
          hintText='Search Surf Videos'
          inputStyle={{color: 'white'}}
          hintStyle={{color: '#e3e3e3'}}
          underlineStyle={{color: '#e3e3e3'}}
          onChange={handleSearchRequest}
          disabled={isOnDetailPage}
        />
      </div>
    </AppBar>
  );
}

export default withRouter(SearchBar);