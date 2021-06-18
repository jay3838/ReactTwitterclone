import React from 'react';
import './Widgets.css';
import Searchicon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgest__input">
                <Searchicon />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div >
                <h2>What's Happpining</h2>

                <TwitterTweetEmbed tweetId={'858551177860055040'}/>

                <TwitterTimelineEmbed sourceType="profile" screenName="jay patel" options={{height:400}}/>

                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
                options={{text:"#ownsome React", via:"jaypatel" }}/>


                
                <TwitterTweetEmbed tweetId={'858551177860055040'}/>

                <TwitterTimelineEmbed sourceType="profile" screenName="jay patel" options={{height:400}}/>

                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
                options={{text:"#ownsome React", via:"jaypatel" }}/>
            </div>
        </div>
    );
}

export default Widgets;