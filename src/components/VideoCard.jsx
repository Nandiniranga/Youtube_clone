import React from 'react'
import {Link} from 'react-router-dom';
import { Typography, Card , CardContent , CardMedia } 
from '@mui/material';
import CheckCircleOutlineIcon
from '@mui/icons-material/CheckCircleOutline';
import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle } from '../utils/constants';

const VideoCard = ({video : {
  id : { videoId }, snippet } }) => {
  return (
    <div>
    VideoCard
    </div>
  )
}

export default VideoCard;
