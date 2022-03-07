import React from 'react';
import './App.css';
import {NavBar} from './components/Components/NavBar/NavBar';
import { LetsGrowth } from './components/Components/LetsGrowth/LetsGrowth';
import { Features } from './components/Components/Features/Features';
import { ChooseUs } from './components/Components/ChooseUs/ChooseUs';
import { GrowingBusiness } from './components/Components/GrowingBussiness/GrowingBusiness';
import { Professional } from './components/Components/Professional/Professional';
import { GetStarted } from './components/Components/GetStarted/GetStarted';
import { Slider } from './components/Components/Slider/Slider';
import { BlogPost } from './components/Components/BlogPost/BlogPost';
import { AboutImpact } from './components/Components/AboutImpact/AboutImpact';
import { MobileNavBar } from './components/Components/MobileNavBar/MobileNavBar';

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
      <Slider/>
      <BlogPost/>
      <AboutImpact/>
    </div>
  );
}

export default App;
