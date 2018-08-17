export const videoSearchEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=10&q=surf+{query}`;
export const videoDetailEndpoint = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&id={videoId}`;

