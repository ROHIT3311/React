import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      filteredItems: props.items,
      searchTerm: "",
    };

    this.debouncedSearch = this.debounce(this.search, 3000);
  }

  debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
  
  search = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = this.state.items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    this.setState({ searchTerm, filteredItems });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.debouncedSearch}
          placeholder="Search..."
        />
        <ul>
          {this.state.filteredItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
