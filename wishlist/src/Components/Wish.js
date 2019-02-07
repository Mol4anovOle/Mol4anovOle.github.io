import React, { Component } from 'react';

class Wish  extends Component {
  render() {
    const { title, id, remove } = this.props;

    return (
      <div className="wish">
        <li onClick={() => remove(id)}>{title}</li>

      </div>
    );
  }
}

export default Wish;