import React, {Component} from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

const VideoList = (props) => {
  const {searchResults} = props;
    console.log(searchResults);
    return(
      searchResults.items.map(res => 
        <div>
          <Card>
            <CardMedia className="col-4" style={{height: '100%'}}>
              <img src={res.snippet.thumbnails.medium.url} />
            </CardMedia>
            <div className="col-7">
                <CardTitle title={res.snippet.title} subtitle={res.snippet.description} /> 
            </div>
          </Card>
        </div>)
    )
  }
  
  export default VideoList;