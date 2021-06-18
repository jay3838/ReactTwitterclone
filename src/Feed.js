import React,{useEffect, useState} from 'react';
import './Feed.css';
import Searchicon from '@material-ui/icons/Search';
import TweetBox from './Tweetbox';
import Post from './Post';
import  { db } from './firebase';


function Feed() {
    const [posts,setposts] = useState([]);



    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
          setposts(snapshot.docs.map(doc=>
            doc.data()
          ))
        })
      },[])
      console.log(posts);
    
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
                <Searchicon className="sc"/>   
            </div>

            <TweetBox/>

            {posts.map((post)=>(
              <Post avatar={post.avatar}
              displayname={post.displayname}
              image={post.image}
              text={post.text}
              verified={post.verified}
              />
            ))}


            {/* <Post/>
            <Post/> */}

            {/* <Post displayname="Jay patel"
            verified={true}
            text="BJP National President Shri @JPNaddav addresses Town Hall meeting in Rajarhat New Town, West Bengal."
            image="https://source.unsplash.com/random"
            avatar="https://source.unsplash.com/random"/> */}
        

        </div>
    );
}

export default Feed;