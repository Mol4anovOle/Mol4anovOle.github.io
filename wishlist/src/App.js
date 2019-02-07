import React, { Component } from 'react';
import WL from './Components/WL';
import './App.css';

class App extends Component {
  state = {
    wishTitle: '',
    wishes: [],
  };

  handleAddToWL = () => {
    const { wishes, wishTitle } = this.state;

    if (!wishTitle) {
      alert('Enter the Wish!');

      return;
    }

    this.setState({
      wishes: [
        ...wishes,
        {
          id: wishes.length,
          title: wishTitle,
        },
      ],
      wishTitle: '',
    });
  };

  removeFromWL = (id) => {
    const { wishes } = this.state;

    const newWishes = wishes.filter(p => p.id !== id);

    this.setState({ wishes: newWishes });
  };

  render() {
    const { wishes, wishTitle } = this.state;

    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => this.setState({ wishTitle: e.target.value })}
          value={wishTitle}
          placeholder="Enter Wish"
        />
        <button onClick={this.handleAddToWL}>Add to WL</button>
        <WL wishes={wishes} removeFromWL={this.removeFromWL} />
      </div>
    );
  }
}

export default App;