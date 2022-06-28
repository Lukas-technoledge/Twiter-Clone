import React from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <input placeholder="what's happening" type="text" />
        </div>
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
