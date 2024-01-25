import './App.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
// import myImage11 from './nav1-bg.jpg';
import myImage2 from './sec2-img1.png';
import myImage3 from './sec2-img2.png';
import myImage4 from './sec2-img3.png';
import Flips from './Component/Flips';
// import myImage12 from './nav2-bg.jpg';
// import myImage13 from './nav3-bg.jpg';
import myImage14 from './footerimg.png';

function App() {
  return (
    <div>
      {/****Navbar Start****/}
      <section className='sec1'>
      <div className='nav1-bg'>
        <div className='NAV1 navbar-dark fixed-top'>
        <h3 className='title1'><a href='#'>Music Vibes</a></h3>
        <h3 className='nav1'><a href='App.js'>Home</a></h3>
        <h3 className='nav2'><a href='Events.html'>Events</a></h3>
        <h3 className='nav3'><a href='Contact.html'>Contact</a></h3>
        <h3 className='nav4'><a href='Login.html'>Login</a></h3>
        </div>
      </div>
      </section>

      {/****Home Start****/}
      <section className='sec2'>
        <h1 className='sec2-text1'>Let's</h1>
        <h1 className='sec2-text2'>Begin</h1>
        <h1 className='sec2-text3'>The Vibes</h1>
        <img className='sec2-img1' src={myImage2}></img>
        <img className='sec2-img2' src={myImage3}></img>
        <img className='sec2-img3' src={myImage4}></img>
      </section>

      <section className='sec3'>
        <div className='nav2-bg'>
        <Flips/>
        </div>
      </section>


    {/****Footer Start****/}
      <section className='sec4'>
        <div className='nav3-bg'>
        <img className='footerimg2' src={myImage14}></img>
        <h3 className='footertext1'>Music Vibes</h3>
        <h4 className='footertext2'><a href='App.js'>Home</a></h4>
        <h4 className='footertext3'><a href='Events.html'>Events</a></h4>
        <h4 className='footertext4'><a href='Contact.html'>Contact</a></h4>
        <h4 className='footertext5'><a href='Login.html'>Login</a></h4>
        </div>
        <div className='copyrighttext'>
        Copyright &copy; 2024 by Thanish kumar | All Rights Reserved
        </div>
      </section>




    </div>
  );
}

export default App;
