import React from 'react';
import './Home.css';
import myImage from '../Images/orange.calc.png';

function Home() {
  return (
    <div className="homePage">
      <div><img src={myImage} alt="background" /></div>
      <div className="heading">
        <h2>Welcome to our page!</h2>
        <p className="one">
          Math magic tricks can liven up any math class and create a sense of wonder and curiosity
          about math. Not only that, math magic creates a new context for algebraic reasoning as
          students go beyond to explore. What is the answer? What is the trick?
        </p>
        <p className="two">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut earum suscipit harum, ipsa,
          autem numquam laboriosam iusto labore necessitatibus illum, ducimus impedit quae voluptate
          corporis quod. Qui repudiandae, quod commodi, praesentium quidem esse accusas aliquam tota
          porro asperiores nostrum sapiente sunt tenetur rem itaque nesciunt providt soluta minvero.
        </p>
        <div className="getStarted">
          <h3>To get started!</h3>
          <p className="three">
            Click Calculator on the navigation bar to enjoy all the awesome features
            of our math magician calculator app.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
