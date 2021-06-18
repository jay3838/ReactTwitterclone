import React, { useState } from 'react';
import './Tweetbox.css';
import {Avatar,Button} from '@material-ui/core';
import {db} from './firebase';

function Tweetbox() {
    const [tweetmsg,settweetmsg]=useState("");
    const [tweetimg,settweetimg]=useState("");

    const sendtweet = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            displayname:"Jay patel",
            verfied:true,
            text:tweetmsg,
            image:tweetimg,
            avatar:"https://source.unsplash.com/random"
        });
        settweetmsg("");
        settweetimg("");
    }
    
    return (
        <div className="tweetbox">
               <div className="tweetbox__input">
                    <Avatar src="https://source.unsplash.com/random" className="as"/>
                    <input type="text" onChange={(e)=>settweetmsg(e.target.value)} value={tweetmsg} placeholder="What's happening?"/>
               </div>   
                    <div className="jp"></div>
                    <input type="text" placeholder="Enter image url"  onChange={(e)=>settweetimg(e.target.value)}  value={tweetimg} className="tweetbox__image"/>
                    <div className="jp"></div>
                <Button variant="outlined" onClick={sendtweet} className="btnt">Tweet</Button>
           <hr/>
        </div>
    );
}

export default Tweetbox;