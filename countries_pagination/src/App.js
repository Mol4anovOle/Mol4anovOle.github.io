import React, { Component } from 'react';
import countries from './countries';
import './App.css';
import Pagination from './Pagination';
class App extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 10,
  };
  handlePageChange = pageNumber => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  // renderPagination() {
  //   const { itemsPerPage } = this.state;
  //   const pagesCount = Math.ceil(countries.length / itemsPerPage);
  // const buttons = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   buttons.push(
  //     <button key={i} onClick={() => this.handlePageChange(i)}>
  //       {i}
  //     </button>
  //   );
  // }
  // return buttons;
  //   return Array.from(Array(pagesCount), (v, i) => (
  //     <button key={i} onClick={() => this.handlePageChange(i + 1)}>
  //       {i + 1}
  //     </button>
  //   ));
  // }
  render() {
    const { currentPage, itemsPerPage } = this.state;
    const itemStart = (currentPage - 1) * itemsPerPage;
    const itemsEnd = itemStart + itemsPerPage;
    const coutriesToShow = countries.slice(itemStart, itemsEnd);

    return (
      <div>
        <ul>
          {coutriesToShow.map(c => (
            <li key={c}>{c} </li>
          ))}
        </ul>
        <div className="buttons">
          <button onChange={this.handlePageDown} className="pageDown">
            &lt;
          </button>
          <Pagination
            perPage={itemsPerPage}
            total={countries.length}
            onChange={this.handlePageChange}
          />
          <button onChange={this.handlePageUp} className="pageUp">
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default App;
