import React, { Component } from 'react';

class ShelfPicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    // alert(event.target.value);
    // debugger;
    this.props.handleChange(event.target.value)
  }
  render() {
    const shelfOptions = this.props.shelves.map((shelf) =>
      <option key={shelf.id} value={shelf.name}>{shelf.name}</option>
    );
    return <div>
      <select name="shelf" onChange={this.handleChange}>
        <option value=""></option>
        {shelfOptions}
        <option value="shelf_1">Shelf 1</option>
        <option value="shelf_2">Shelf 2</option>
      </select>
    </div>
  }
}

export default ShelfPicker;