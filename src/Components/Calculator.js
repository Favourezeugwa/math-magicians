import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <input type="text" className="calculator-screen" value="0" />
        <div className="calculator-keys">
          <button type="button" className="btn-lightgrey">AC</button>
          <button type="button" className="btn-lightgrey">+/-</button>
          <button type="button" className="btn-lightgrey">%</button>
          <button type="button" className="btn-orange">+</button>
          <button type="button" className="btn-lightgrey">7</button>
          <button type="button" className="btn-lightgrey">8</button>
          <button type="button" className="btn-lightgrey">9</button>
          <button type="button" className="btn-orange">*</button>
          <button type="button" className="btn-lightgrey">4</button>
          <button type="button" className="btn-lightgrey">5</button>
          <button type="button" className="btn-lightgrey">6</button>
          <button type="button" className="btn-orange">-</button>
          <button type="button" className="btn-lightgrey">1</button>
          <button type="button" className="btn-lightgrey">2</button>
          <button type="button" className="btn-lightgrey">3</button>
          <button type="button" className="btn-orange">+</button>
          <button type="button" className="btn-lightgrey item0">0</button>
          <button type="button" className="btn-lightgrey">&sdot;</button>
          <button type="button" className="btn-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
