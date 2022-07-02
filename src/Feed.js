// import React, { useEffect, useState } from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'
import db from './firebase';

function Feed() {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   db.collection('posts').onSnapshot =(snapshot => (
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   ))
  // }, [])

  return (
    <div className='feed'>
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
      <Post 
      displayName = "Chialuka Prisca-mary Onuoha"
      userName= 'Lukas_T_noledge'
      verified = {true}
      text = 'Crazy things are happening'
      avatar = '/static/images/avatar/3.jpg'
      image = 'https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
      />
     
    </div>
  );
}

export default Feed;
