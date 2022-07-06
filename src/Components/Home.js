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
          students go beyond What is the answer? to explore What is the trick?
        </p>
        <p className="two">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut earum suscipit harum, ipsa,
          autem numquam laboriosam iusto labore necessitatibus illum, ducimus impedit quae voluptate
          corporis quod. Qui repudiandae, quod commodi, praesentium quidem esse accusas aliquam tota
          porro asperiores nostrum sapiente sunt tenetur rem itaque nesciunt providt soluta minvero.
        </p>
        <p className="three">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nihil possimus recusandae
          dicta reprehenderit harum quibusdam voluptates, itaque illo voluptatibus dolor deleniti
          consectetur praesentium eius illum corporis? Cupiditate, a! Quo, enim? Provident tempora
          itaque reiciendis laboriosam error voluptatem ipsum ratione enim consequuntur ipsa nobis a
          nihil officia alias quisquam, at qui fugiat incidunt harum riatur maxime sequi? Illo, quod
          perferendis similique ipsum iusto eligendi pariatur facilis quidem accusantium quo molest
          ias dolores nisi tempora repellendus, asperiores ipsa! Molestias repudiandae voluptate d
          ab eum voluptatum eos amet earum exercitationem. Molestias repellendus iure pariatur exp
          a illo provident ipsum vitae eos aliquam modi, quidem ullam eveniet aspernatur ? Quos, u
          nde voluptatibus ullam earum provident, soluta autem nisi commodi eum non tempore odio
          tenetur cum, qui commodi voluptate, adipisci omnis tempore nobis ipsum quis veritatis
          aliquid laudantium nemo in tempore pariatur sequi iusto sit, beatae minima aut,
          consequuntur aperiam.
        </p>
        <h3>To get started!</h3>
        <p>
          Click on Calculator on the navigation bar to enjoy all the awesome features
          of our math magician calculator app.
        </p>
      </div>
    </div>
  );
}

export default Home;
