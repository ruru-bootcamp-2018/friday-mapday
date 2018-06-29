import React from 'react'
import {getScreenName} from '../apiClient'
import SingleTweet from './SingleTweet'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null
    } //state
  } //constructor
  
  componentDidMount() {
    getScreenName()
    .then(results => {
      this.setState({tweets:results})
    }
    )
  }
  
  
  render () {
    return (
      <div className="Display">
        <h2>TWEETS ABOUT {this.state.tweets && this.state.tweets.tweets.search_metadata.query.split('+').join(' ')}</h2>
        <ul>
          {this.state.tweets && this.state.tweets.tweets.statuses.map( data => (
          <li>butts: <SingleTweet tweet={data}/> </li>
        ))
      }
        </ul>
      </div>
    )
  }// render
} //class

export default Display