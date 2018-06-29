import React from 'react'



class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      screen_name: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  doSearch () {
      console.log('doing serach with ', this.state);
    this.props.finishSearch(this.state)
  }

  render () {
    return (
      <div>
        <form>
            <p><input placeholder="screen name" name="screen_name"
                onChange={this.handleChange}
                value={this.state.name}/></p>
            <button onClick={this.doSearch}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
