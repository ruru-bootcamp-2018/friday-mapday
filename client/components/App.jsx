import React from 'react'
import Display from './Display'


import { getFruits } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: []
    }
  }

  componentDidMount() {
    getFruits()
      .then(fruits => {
        this.setState({ fruits })
      })
  }

  render() {
    return (
      <div className='app'>
        <Display />
      </div>
    )
  }
}

export default App
