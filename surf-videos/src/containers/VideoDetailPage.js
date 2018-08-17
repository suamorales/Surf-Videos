import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import {Card,CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {videoDetailEndpoint} from '../apiEndpoints';

class VideDetailPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        videoId: '',
        videoTitle: '',
        videDescription: '', 
        channelTitle: '',
        publishedAt: '',
        totalResults: 0,
      }
    }

    componentDidMount() {
      const {videoId} = this.props.match.params;
      const videoDetails = this.props.searchResults.filter(video => video.id.videoId === videoId);

      this.setState({videoId}, () => {
        const videoDetailsEmpty = videoDetails.length === 0;
        const {videoId} = this.state;

        if (videoDetailsEmpty) {
          // Fetch video details
          axios(videoDetailEndpoint.replace('{videoId}', videoId)).then(res => {
            const {totalResults} = res.data.pageInfo;
            if (totalResults > 0) {
              const {title, description, channelTitle, publishedAt} = res.data.items[0].snippet;
              this.setState({
                videoTitle: title,
                videoDescription: description, 
                channelTitle,
                publishedAt,
                totalResults,
              })
            }
          }).catch(err => {
            const {showErrorMessage} = this.props
            showErrorMessage();
          })
        } else {
          const {
            title,
            description,
            channelTitle,
            publishedAt
          } = videoDetails[0].snippet;
          this.setState({
            videoTitle: title, 
            videoDescription: description, 
            channelTitle,
            publishedAt,
            totalResults: 1,
          })
        }
      })
    }
    
    render() {
      const {
        videoId,
        videoTitle,
        videoDescription,
        channelTitle,
        publishedAt,
        totalResults,
      } = this.state;

      return (
        <div className='container' style={{margin: 30, marginLeft: '10%'}}>
          <Paper zDepth={2} className='row no-gutters' style={{width: '100%', height: 510}}>
            { (totalResults > 0 &&
                <div className='col'>
                  <iframe
                    title="YouTube video player"
                    className="col-12 youtube-player"
                    type="text/html"
                    width={700}
                    height={500}
                    src={`http://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{paddingTop: 10}}
                  />
                  <Card>
                    <CardTitle title={videoTitle} subtitle={`Published ${publishedAt.substring(0, 10)} | ${channelTitle}` } />
                    <CardText> {videoDescription} </CardText>
                  </Card>
                </div>)
              || 
              <div className='col-12' style={{paddingLeft: '15%', paddingTop: '20%'}}> 
                Nothing was found for Video ID: {videoId}. Please try clicking Home and searching for sweet surf videos!
              </div>
            }
          </Paper>
        </div>
      );
    }
  }
  
  export default withRouter(VideDetailPage);