import React from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName, userName, verified, text,image, avatar}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Chialuka Prisca-mary Onuoha {" "} <span className='post__headerSpecial'> <VerifiedIcon className='post__badge' /> @Lukas_T_noledge </span> </h3>
          </div>
          <div className="post__headerDescription">
            <p>Build me a twitter clone</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="post image" className='post__image' />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
