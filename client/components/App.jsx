import React from 'react'
import Display from './Display'


class App extends React.Component {
  constructor(props) {
    super(props)
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
