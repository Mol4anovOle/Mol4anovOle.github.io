import React, { Component } from 'react';
import Wish from './Wish';

class WL extends Component {
  render() {
    const { wishes, removeFromWL } = this.props;

    return (
      <div className="wl">Wish List
        {wishes.map((wish) => (
          <Wish
            key={wish.id}
            id={wish.id}
            title={wish.title}
            remove={removeFromWL}
          />
        ))}
      </div>
    );
  }
}

export default WL;