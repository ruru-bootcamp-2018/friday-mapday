import React from 'react'
import Display from './Display'

import Form from './Form'

import { basicSearch } from '../apiClient'
import { getScreenName } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchresults: null
    }

    this.finishSearch = this.finishSearch.bind(this);

  }

  finishSearch (queryObj) {
    console.log("App: doing search with:",queryObj)
    getScreenName(queryObj)
      .then( (tweets) => {console.log(tweets);
      return tweets})
      .then( tweets => this.setState({
        searchresults:tweets
      }))
      
  }

  render() {
    console.log("The state includes: ", this.state.searchresults)
    return (
      <div className='app'> 
        <Form finishSearch={this.finishSearch}/>      
        {this.state.searchresults && <Display tweets={this.state.searchresults}/>}
      </div>
    )
  }
}

export default App
