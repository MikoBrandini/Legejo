import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import axios from 'axios';


import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import WikiContainer from './components/WikiContainer';


class App extends Component {
  // Initialize state
      constructor(props){
      super(props);

  this.state = {
                   term: '',
                   wikidata: []
                 }

    }
  componentDidMount() {
   var _this = this;
    this.wikiSearch('');
  }

  wikiSearch(term){
    this.setState({
      term: term
    })
  }
  render() {
    const wikiSearch = _.debounce((term) => {this.wikiSearch(term) }, 300)
    return (
      <div className="App">

        <NavBar />
        <SearchBar onSearchTermChange={wikiSearch} />
         <WikiContainer wikiStuff={this.state.wikidata} />
      </div>
    );
  }
}

export default App;
