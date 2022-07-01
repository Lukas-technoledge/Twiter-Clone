import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {/* post*/}
      <Post displayName = 'Chialuka Prisca-mary Onuoha'
       userName = 'Lukas_T_noledge'
       verified = {true}
       text = 'I am the greatest' 
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
       avatar = '/static/images/avatar/3.jpg' />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      
    </div>
  )
}

export default Feed
