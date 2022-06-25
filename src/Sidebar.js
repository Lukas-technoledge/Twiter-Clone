import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleOutline from '@mui/icons-material/PeopleOutline';
import Button from '@mui/material/Button';


function Sidebar() {
  return (
    <div>
      
        { /*twittwer icon */ }
        <TwitterIcon />
        <SidebarOption active Icon={HomeIcon} text='Home'/>
        <SidebarOption Icon={SearchIcon} text='Explore'/>
        <SidebarOption Icon={PeopleOutlineIcon} text='Communities'/>
        <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/>
        <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
        <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
        <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
        <SidebarOption Icon={MoreHorizIcon} text='More'/>

        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar
