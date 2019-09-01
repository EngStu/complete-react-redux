import React, { Component } from 'react'

export class SearchNinja extends Component {
  state = {
    searchTerm: null
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchNinja(this.state.searchTerm)
  }

  
  render() {
    const { result } = this.props;
    let searchFrom = (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="search ninja name"/>
        <button>Search</button>
      </form>
    )

    return (
      <div>
        { searchFrom }
        { result }
      </div>
    )
    
  }
}

export default SearchNinja
