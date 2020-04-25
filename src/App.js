import React from 'react';
import Header from '../src/components/header/header';
import About from '../src/components/about/about';
import Resume from '../src/components/resume/resume';
import Portfolio from '../src/components/portfolio/portfolio';
import Footer from '../src/components/footer/footer';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="tochka-cv-wrapper">
      <Navigation />
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
