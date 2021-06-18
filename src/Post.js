import React, { useState } from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import Verificationicon from '@material-ui/icons/VerifiedUser';
import Chatbubleoutlinedicon from '@material-ui/icons/ChatBubbleOutline';
import Repeaticon from '@material-ui/icons/Repeat';
import Favouritebordericon from '@material-ui/icons/FavoriteBorderOutlined';
import Publishicon from '@material-ui/icons/Publish';


function Post({avatar,image,text,displayname,verified}) {
    return (
        <div className="post">
            <div className="post__body">
                <div className="post__header">
                    <div className="post__avatar">
                        <Avatar className="avatar" src={avatar} alt="jp"/>
                    </div>
                    <div className="post__headertext">
                        <h3>
                            {displayname}{" "}
                             <span>
                               {verified && <Verificationicon className="post__badge"/>}
                            </span>
                        </h3>
                    </div>
                </div>

                    <div className="postheader__description">
                        <p>{text}</p>
                    </div>
                <img src={image} alt="jp"/>

                <div className="post__footer">
                    <Chatbubleoutlinedicon/>
                    <Repeaticon/>
                    <Favouritebordericon />
                    <Publishicon/>
                </div>
            </div>
        </div>
    );
}

export default Post;