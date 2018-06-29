import React from 'react'
import SingleTweet from './SingleTweet'

const Display = props => (
      <div className="Display">
        <h2>TWEETS ABOUT {props.tweets.tweets.search_metadata.query.split('+').join(' ')}</h2>
        <ul>
          {props.tweets.tweets.statuses.map( data => (
            <li><SingleTweet tweet={data}/> </li>
          ))}
        </ul>
      </div>
    )

export default Display