import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom'
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

const VideoList = (props) => {
  const {handleInfiniteLoad, searchResults, isLastPageofData} = props;
    return(
      <div className="container" style={{height: '50%', minHeight: 300}}>
        {
          (searchResults.length > 0 &&
            <InfiniteScroll
              pageStart={0}
              initialLoad={false}
              loadMore={handleInfiniteLoad}
              hasMore={isLastPageofData}
              loader={<div className='col-8'> Loading ... </div>}
              useWindow={true}
              className='row justify-content-center'>
              {searchResults.map(res =>
              <Card style={{marginTop: 20, height: '50%', width: '80%'}} key={res.id.videoId}>
                <div className="row">
                  <CardMedia className="col-4" style={{height: '100%'}}>
                    <img src={res.snippet.thumbnails.medium.url} />
                  </CardMedia>
                  <div className="col-7">
                    <Link to={`/watch/${res.id.videoId}`}>
                      <CardTitle title={res.snippet.title} subtitle={res.snippet.description} /> 
                    </Link>
                  </div>
                </div>
              </Card>)}
            </InfiniteScroll> ||
            <div className='row justify-content-center' style={{fontSize: 50, marginTop: 50}}> 
              Search for sweet surf videos!
            </div>
          )
        }
      </div>
    )
  }
  
  export default VideoList;