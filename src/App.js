import React, { Component } from 'react';
import './App.css';  
import AddQuoteForm from './AddQuoteForm';
import {Route, Switch, Link} from 'react-router-dom'
import Quote from '../src/Quote'

const url = 'http://localhost:3001/api/quotes/';

class App extends Component {
  constructor(){
    super()
      this.state = {
        quote: "",
        author: "",
        quoteData: []
      }
  }
  componentDidMount(){
    console.log('App: componentDidMount')
    fetch(`${url}`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        this.setState({quoteData: json})
    })
  }
  render(){
    console.log('App: render')
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navBar">
            <h1 className="App-logo">
              <Link to='/'>Inspire Me</Link>
            </h1>
            <p className="App-link">
              <Link to='/add'>Add New Quote</Link>
            </p>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact path='/'
              render={(routerProps) => {
                return <Quote {...routerProps}{...this.state}/>
              }}
            />
            <Route
              exact path='/add'
              render={(routerProps) => {
                return <AddQuoteForm {...routerProps}{...this.state}/>
              }}
            />
          </Switch>
        </main>
      </div>
    )

  }
}

export default App;
