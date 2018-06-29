import React from 'react'
import tweets from '../../server/public/sample-tweets'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: {}
    } //state
  } //constructor
  
  
  
  render () {
    //console.log(tweets)
    let tweetArray = tweets.statuses;
    return (
      <div className="Display">
        <h3>TWEETS ABOUT {tweets.search_metadata.query}</h3>
        <ul>
          {tweetArray.map( data => <li>butts: {data.user_name} {data.text} </li>)}
        </ul>
      </div>
    )
  }// render
} //class

export default Display