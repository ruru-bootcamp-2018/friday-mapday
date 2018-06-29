import React from 'react'

const SingleTweet = (props) => {
  return (
    <div className="tweetContainer" style={{backgroundImage: `url(${props.tweet.user.profile_banner_url})`}}>
      <div className="tweetImg">
        <img src={props.tweet.user.profile_image_url}/>
      </div>
        <p className="tweetText">
          <strong>{props.tweet.user.screen_name} </strong> <br/>
          {props.tweet.text}
        </p>
    </div>
  )
}


export default SingleTweet