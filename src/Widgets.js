import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterTweetEmbed,TwitterShareButton} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>Tweets</h2>
        <TwitterTweetEmbed tweetId={'1533167105050304514'} />

        <TwitterTimelineEmbed sourceType='profile' screenName='Lukas_T_noledge' options={{height: 400}}/>
        <TwitterShareButton url={'https://github.com/Lukas-technoledge?tab=repositories'} options= {{text: "Want to know what i've been up to? check me out on gitHub :" , Via : 'Lukas-technoledge'}}/>
      </div>
    </div>
  )
}

export default Widgets
