import React, { Component } from 'react';
import './App.css';  
import AddQuoteForm from './AddQuoteForm';

const url = 'http://localhost:3001/api/quotes/'

class App extends Component {
  constructor(){
    super()
      this.state = {
        quote: "Click Below for Wise Words",
        author: ""
      }
      this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    const rand = Math.floor(Math.random() * 23);
    fetch(`${url}`)
    .then(res => res.json())
    .then(json => {
      this.setState(
        {
          quote: json[rand].quoteText,
          author: json[rand].quoteAuthor
        })
    })
  }
  render(){
    return (
      <div className="App">
        <nav className="navBar">
          <h1>Inspire Me</h1>
        </nav>
        <div className="cardContainer">
          <div className="quoteDisplayCard">
            <p>{this.state.quote}</p>
            <p>{this.state.author}</p>
          </div>
        </div>
        <div className='buttonsContainer'>
        <button onClick={this.componentDidMount} className="newQuoteButton">Next Quote</button>
        <button onClick={AddQuoteForm}>Add New Quote</button>
        </div>
      </div>
    )
  }
}

export default App;
