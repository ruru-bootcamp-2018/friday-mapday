import React from 'react'



class Form extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      q: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  doSearch (e) {
    e.preventDefault();
    console.log('Form: doing serach with ', this.state);
    this.props.finishSearch(this.state)
  }

  render () {
    console.log("rendering form")
    return (
      <div className="form">
        <form>
            <p><input placeholder="screen name" name="q"
                onChange={this.handleChange}
                value={this.state.name}/></p>
            <button onClick={this.doSearch}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
