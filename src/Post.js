import React from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post( displayName, userName, verified, text,image, avatar) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar />
      </div>
    </div>
  )
}

export default Post
