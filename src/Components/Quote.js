import React from 'react';
import './Quote.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Quote() {
  return (
    <div className="quote-container">
      <p className="quote-header">
        <FaQuoteLeft className="quote-icon" />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut earum suscipit harum, ipsa,
        autem numquam laboriosam iusto labore necessitatibus illum, ducimus impedit quae voluptate
        corporis quod. Qui repudiandae, quod commodi, praesentium quidem esse accusamus aliquam tota
        porro asperiores nostrum sapiente sunt tenetur rem itaque nesciunt provident soluta minvero.
        <FaQuoteRight className="quote-icon" />
        <br />
        <br />
        <span><i>- William Paul Thompson</i></span>
      </p>
    </div>
  );
}

export default Quote;
