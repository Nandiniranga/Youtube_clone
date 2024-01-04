import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Card , CardContent , CardMedia } 
from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle } from '../utils/constants';

const VideoCard = ({video : {
  id : { videoId , channelId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
        image = {snippet?.thumbnails?.high?.url}
        alt = {snippet?.title}
        sx = {{width : 358 , height : 180}}
        />
        <CardContent sx = {{backgroundColor : '#1e1e1e', 
        height : '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography varaint = "subtitle1" fontWeight= "bold" color = "#FFF">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link>
        <Link to={channelId  ? `/video/${channelId}` : demoVideoUrl}>
        <Typography varaint = "subtitle2" fontWeight= "bold" color = "gray">
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircleOutlineIcon  sx={{ fontSize: "16px", color: "gray", ml: "5px" }}/>
        </Typography>
        </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard;
