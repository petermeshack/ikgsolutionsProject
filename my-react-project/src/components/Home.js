// src/components/Home.js
import React from 'react';
//import { Link } from 'react-router-dom';      <Link to="/about">Go to About Page</Link>
import Footers from '../assets/Footers';
import Headers from "../assets/Headers";
import logo from '../assets/images/gkilogo.png';
import SetImage from "../assets/image";
const Home = () => {
  return (
    <>
    <div>
      <Headers title="iKg Solutions" subtitle="Beyond Oceans"/>
      <SetImage imagePath={logo}/>

    </div>
    <Footers/>
    </>
  );
};

export default Home;
