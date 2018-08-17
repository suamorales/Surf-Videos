import React, { Component } from 'react';
import axios from 'axios';
import AppBase from '../components/AppBase';
import { videoSearchEndpoint }  from '../apiEndpoints';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      isLoading: false,
      fetchError: false,
    };
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
  }

  handleSearchRequest(){
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
        console.log(err);
      })
    })
  }

  render() {
    const searchResults = {
      "kind": "youtube#searchListResponse",
      "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/SK1rUaUQbzkwW5JkUt7bsQjaz9k\"",
      "nextPageToken": "CAUQAA",
      "regionCode": "US",
      "pageInfo": {
       "totalResults": 1000000,
       "resultsPerPage": 5
      },
      "items": [
       {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/DMxysgkB8iyrvWIQ7YEirdHGWbs\"",
        "id": {
         "kind": "youtube#video",
         "videoId": "sIpbI0SQczM"
        },
        "snippet": {
         "publishedAt": "2018-06-22T21:04:09.000Z",
         "channelId": "UCFO5Mv0ugp2AE63nfOx7TTw",
         "title": "Tsu Surf freestyles on Bars On I-95",
         "description": "Making his return to the microphone, one of Jersey's most respected MCee's Tsu Surf stops through Bars On I-95 with an exclusive freestyle. @Tsu_Surf ...",
         "thumbnails": {
          "default": {
           "url": "https://i.ytimg.com/vi/sIpbI0SQczM/default.jpg",
           "width": 120,
           "height": 90
          },
          "medium": {
           "url": "https://i.ytimg.com/vi/sIpbI0SQczM/mqdefault.jpg",
           "width": 320,
           "height": 180
          },
          "high": {
           "url": "https://i.ytimg.com/vi/sIpbI0SQczM/hqdefault.jpg",
           "width": 480,
           "height": 360
          }
         },
         "channelTitle": "Bars On I-95",
         "liveBroadcastContent": "none"
        }
       },
       {
        "kind": "youtube#searchResult",
        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Q6uiTU1VPDL5Dia9EBIHVaLMd-o\"",
        "id": {
         "kind": "youtube#video",
         "videoId": "XWyw3aPbLvw"
        },
        "snippet": {
         "publishedAt": "2018-08-02T14:51:35.000Z",
         "channelId": "UCpuAPXDuJKe5fAuSLCG8LDg",
         "title": "HEAD NOISE - Noa Deane Surf Film | Volcom",
         "description": "Learn more: http://vol.cm/noaheadnoise Noa Deane's \"Head Noise\" is a cinematic surf movie from filmmaker Mikey Mallalieu. Noa Deane full clothing collection ...",
         "thumbnails": {
          "default": {
           "url": "https://i.ytimg.com/vi/XWyw3aPbLvw/default.jpg",
           "width": 120,
           "height": 90
          },
          "medium": {
           "url": "https://i.ytimg.com/vi/XWyw3aPbLvw/mqdefault.jpg",
           "width": 320,
           "height": 180
          },
          "high": {
           "url": "https://i.ytimg.com/vi/XWyw3aPbLvw/hqdefault.jpg",
           "width": 480,
           "height": 360
          }
         },
         "channelTitle": "Volcom",
         "liveBroadcastContent": "none"
        }
       }]
      }
    return(<AppBase
            handleSearchRequest={this.handleSearchRequest}
            searchResults={searchResults}
          />)
  }
}

export default App;