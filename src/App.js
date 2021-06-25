import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholer="SearchMonster..."
          handleChange={this.handleChange}
        /> 
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}


export default App;
