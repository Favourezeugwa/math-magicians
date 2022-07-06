import React, { useState } from 'react';
import calculate from '../Logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, operation: null, next: null });

  const { total, operation, next } = state;

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (
    <>
      <h1 className="calculator-header">Lets do some Maths!</h1>
      <div className="calculator-container">
        <input type="text" className="calculator-screen" value={(total || '') + (operation || '') + (next || '')} />
        <div className="calculator-keys">
          <button type="button" className="btn-lightgrey" onClick={handleClick}>AC</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>+/-</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>%</button>
          <button type="button" className="btn-orange" onClick={handleClick}>÷</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>7</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>8</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>9</button>
          <button type="button" className="btn-orange" onClick={handleClick}>x</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>4</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>5</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>6</button>
          <button type="button" className="btn-orange" onClick={handleClick}>-</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>1</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>2</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>3</button>
          <button type="button" className="btn-orange" onClick={handleClick}>+</button>
          <button type="button" className="btn-lightgrey item0" onClick={handleClick}>0</button>
          <button type="button" className="btn-lightgrey" onClick={handleClick}>.</button>
          <button type="button" className="btn-orange" onClick={handleClick}>=</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
