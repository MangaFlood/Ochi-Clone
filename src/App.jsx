import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import MainMoto from './components/MainMoto';
import About from './components/About';
import Eyes from './components/Eyes';
import Projects from './components/Projects';
import Review from './components/Review';
import Ending from './components/Ending';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900' >
      <Navbar />
      <LandingPage />
      <MainMoto />
      <About></About>
      <Eyes />
      <Projects/>
      <Review />
      <Ending />
      <Footer />
    </div>
  )
}

export default App;