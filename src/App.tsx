import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { LetsGrowth } from './components/LetsGrowth/LetsGrowth';
import { Features } from './components/Features/Features';
import { ChooseUs } from './components/ChooseUs/ChooseUs';
import { GrowingBusiness } from './components/GrowingBussiness/GrowingBusiness';
import { Professional } from './components/Professional/Professional';
import { GetStarted } from './components/GetStarted/GetStarted';
import {Carousel} from './components/Carousel/Carousel';
import { BlogPost } from './components/BlogPost/BlogPost';
import { AboutImpact } from './components/AboutImpact/AboutImpact';


function App() {
  return (
    <div className="app">
      <div className='header'>
        <NavBar />
        <LetsGrowth/>
        <Features/>
      </div>
      <ChooseUs/>
      <GrowingBusiness />
      <Professional/>
      <GetStarted/>
      <Carousel/>
      <BlogPost/>
      <AboutImpact/>
    </div>
  );
}

export default App;
