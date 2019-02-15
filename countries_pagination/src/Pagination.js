import React, { Component } from 'react';
class Pagination extends Component {
  renderButtons() {
    const { perPage, total, onChange } = this.props;
    const pagesCount = Math.ceil(total / perPage);
    // const buttons = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //   buttons.push(
    //     <button key={i} onClick={() => this.handlePageChange(i)}>
    //       {i}
    //     </button>
    //   );
    // }
    // return buttons;
    return Array.from(Array(pagesCount), (v, i) => (
      <button key={i} onClick={() => onChange(i + 1)}>
        {i + 1}
      </button>
    ));
  }
  render() {
    const { activePage, perPage, total } = this.props;
    return <div>{this.renderButtons()}</div>;
  }
}
export default Pagination;
