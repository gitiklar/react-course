import React from 'react';

export default class NumbersBox extends React.Component {
  constructor(props) {
    super(props);
    this.setDelta = props.setDelta;
  }

  hadndleInputChange(e) {
    this.setDelta( { delta : Number(e.target.value) });
  }

  render() {
    const {delta} = this.props;
    return(
      <label>
          Increase by: 
          <input type="number" value={delta} onChange={this.hadndleInputChange.bind(this)}></input>
      </label>
    );
  }  
}