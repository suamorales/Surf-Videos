import React from 'react';
import { Switch, Route } from 'react-router';

const Routes = (props) => {
    return(
    <Switch>
      <Route path="/watch/:videoId" render={<div> video detail </div>}/>
      <Route render={<div> Home Page </div>}/>
    </Switch>)
}

export default Routes;

