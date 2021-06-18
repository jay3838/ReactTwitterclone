import React from 'react';
import './Sidebar.css';
import Twittericon from '@material-ui/icons/Twitter';
import Homeicon from '@material-ui/icons/Home';
import Searchicon from '@material-ui/icons/Search';
import Notificationicon from '@material-ui/icons/NotificationImportant';
import Messageicon from '@material-ui/icons/Message';
import Bookmarkicon from '@material-ui/icons/Bookmark';
import Listicon from '@material-ui/icons/List';
import Profileicon  from '@material-ui/icons/PermIdentity';
import Moreicon from '@material-ui/icons/More';
import Sidebaroption from './Sidebaroption';
import { Button } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar"> 
            <Twittericon className="sd"/>
            <Sidebaroption  Icon={Homeicon} name="Home" />
            <Sidebaroption  Icon={Searchicon} name="Explore" />
            <Sidebaroption  Icon={Notificationicon} name="Notification" />
            <Sidebaroption  Icon={Messageicon} name="Message" />
            <Sidebaroption  Icon={Bookmarkicon} name="Bookmark" />
            <Sidebaroption  Icon={Listicon} name="List" />
            <Sidebaroption  Icon={Profileicon} name="Profile" />
            <Sidebaroption  Icon={Moreicon} name="More" />
           
            <Button variant="outlined" className="btn" fullwidth>Tweet</Button>
                
        </div>
    );
}

export default Sidebar;