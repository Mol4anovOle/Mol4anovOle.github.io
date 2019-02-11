import React, { Component } from 'react';
import countries from './countries';
import './App.css';

class App extends Component {
  state = {
  query:'',
  order: true,
  };
  changeOrder() {
    this.setState({ order: !this.state.order });
  }

  render() {
    const {query} = this.state;
    const filteredCountries=countries.filter(
      c=>c.toLowerCase().includes(query.toLowerCase()));
    let orderList = this.state.order ? filteredCountries : filteredCountries.reverse();
    return (
      <div>
        <input onChange={e=>this.setState({query: e.target.value})} value={query}/>
      <button onClick={this.changeOrder.bind(this)}>Reverse</button>
      {query && (
      <p> Found {filteredCountries.length}/{countries.length} for query "{query}"</p>
      )}
        <ul className={orderList}>{filteredCountries.map(c => <li key={c}>{c} </li>)}</ul>
      </div>
    );
  }
}

export default App;
