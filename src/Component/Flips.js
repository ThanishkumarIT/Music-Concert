// FlipImage.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './Flips.css'; // Import a CSS file for styling
import myimage1 from './Ani.jpg';
import myimage2 from './U1.jpg';
import myimage3 from './Pradeep.jpg';
import myimage4 from './Vijay_Antony.jpg';
import myimage5 from './AR.jpg';
import myimage6 from './Gv.jpg';
import myimage7 from './Harris.jpg';
import myimage8 from './San.jpg';
import myimage9 from './Hiphop.jpg';
import myimage10 from './Sid.jpg';
import myimage11 from './Music_Concert.png';
import myimage12 from './concertimg.png';
import myimage13 from './tickets1.png';
import myimage14 from './tickets2.png';

const JQUERY1 = () => {
  useEffect(() => {
    // Apply 3D flip effect on image hover using jQuery
    $('.flip-box').hover(
      function () {
        $(this).addClass('hover');
      },
      function () {
        $(this).removeClass('hover');
      }
    );
  }, []);

  return (
    <div>
    <div className="flip-box">
      <div className="flip-box-inner1">
        <div className="flip-box-front1">
          {/* Your front content goes here */}
          <img className='flipimg1' src={myimage1} alt="Front Image" />
        </div>
        <div className="flip-box-back1">
          {/* Your back content goes here */}
          <p>M</p>
        </div>
      </div>

      <div className="flip-box-inner2">
        <div className="flip-box-front2">
          {/* Your front content goes here */}
          <img className='flipimg2' src={myimage2} alt="Front Image" />
        </div>
        <div className="flip-box-back2">
          {/* Your back content goes here */}
          <p>U</p>
        </div>
      </div>

      <div className="flip-box-inner3">
        <div className="flip-box-front3">
          {/* Your front content goes here */}
          <img className='flipimg3' src={myimage3} alt="Front Image" />
        </div>
        <div className="flip-box-back3">
          {/* Your back content goes here */}
          <p>S</p>
        </div>
      </div>

      <div className="flip-box-inner4">
        <div className="flip-box-front4">
          {/* Your front content goes here */}
          <img className='flipimg4' src={myimage4} alt="Front Image" />
        </div>
        <div className="flip-box-back4">
          {/* Your back content goes here */}
          <p>I</p>
        </div>
      </div>

      <div className="flip-box-inner5">
        <div className="flip-box-front5">
          {/* Your front content goes here */}
          <img className='flipimg5' src={myimage5} alt="Front Image" />
        </div>
        <div className="flip-box-back5">
          {/* Your back content goes here */}
          <p>C</p>
        </div>
      </div>

      <div className="flip-box-inner6">
        <div className="flip-box-front6">
          {/* Your front content goes here */}
          <img className='flipimg6' src={myimage6} alt="Front Image" />
        </div>
        <div className="flip-box-back6">
          {/* Your back content goes here */}
          <p>S</p>
        </div>
      </div>

      <div className="flip-box-inner7">
        <div className="flip-box-front7">
          {/* Your front content goes here */}
          <img className='flipimg7' src={myimage7} alt="Front Image" />
        </div>
        <div className="flip-box-back7">
          {/* Your back content goes here */}
          <p>E</p>
        </div>
      </div>


      <div className="flip-box-inner8">
        <div className="flip-box-front8">
          {/* Your front content goes here */}
          <img className='flipimg8' src={myimage8} alt="Front Image" />
        </div>
        <div className="flip-box-back8">
          {/* Your back content goes here */}
          <p>B</p>
        </div>
      </div>


      <div className="flip-box-inner9">
        <div className="flip-box-front9">
          {/* Your front content goes here */}
          <img className='flipimg9' src={myimage9} alt="Front Image" />
        </div>
        <div className="flip-box-back9">
          {/* Your back content goes here */}
          <p>I</p>
        </div>
      </div>

      <div className="flip-box-inner10">
        <div className="flip-box-front10">
          {/* Your front content goes here */}
          <img className='flipimg10' src={myimage10} alt="Front Image" />
        </div>
        <div className="flip-box-back10">
          {/* Your back content goes here */}
          <p>V</p>
        </div>
      </div>
      </div>

      <div className='musicimg'>
        <img className='musicpic1' src={myimage11}></img>
        <img className='musicpic2' src={myimage12}></img>
        <img className='tickets1' src={myimage13}></img>
        <img className='tickets2' src={myimage14}></img>
        <h3 className='book'>The Concert Tickets are out now   <a href='Buytickets.html' target='_blank'><button>BOOK NOW</button></a></h3>
      </div>
    </div>



  );
};

export default JQUERY1;
