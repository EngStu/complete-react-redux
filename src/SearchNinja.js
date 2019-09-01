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
    const { name, age } = this.props.result;
    // return (
    //   <div>
    //     <form onSubmit={this.handleSubmit}>
    //       <input onChange={this.handleChange} type="text" placeholder="search ninja name"/>
    //       <button>Search</button>
    //     </form>
    //   </div>
    // )
    {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" placeholder="search ninja name"/>
            <button>Search</button>
          </form>
          if (name) {
            <p>Result: Name: {name} and age was {age}</p>
          }
        </div>
      )
      
    }
  }
}

export default SearchNinja
