// src/components/About.js
import React from 'react';
//import { Link } from 'react-router-dom';
import CustomcardHeader from "../assets/CustomcardHeader";
import CustomcardHeaderSub from "../assets/CustomcardHeadersSubH";
import Footers from '../assets/Footers';
const About = () => {
  return (
    <>
    <div>
    <CustomcardHeader title="About Us" subtitle="Get To Know our Background" />
        
        <CustomcardHeaderSub  
        title="About iKg Solutions Ltd" 
        subtitle="iKg Solutions Ltd, formerly known as ENSAFO Group Ltd is a Kenyan firm incorporated in the year 2014 with an operational base in Nairobi.  
        iKg is committed to driving positive change in Africa's marine landscape through expert consulting services." 
       />

        <CustomcardHeaderSub 
        title="Our Vision" 
        subtitle="We aspire to lead the way in empowering clients, industries, and communities to navigate the future of the blue economy space with confidence and resilience."
         />
        <CustomcardHeaderSub
        title="Our mission" 
        subtitle="We dedicate ourselves to supporting the development of technologically innovative and tailored solutions that address contemporary and future marine related challenges."
              />

      <CustomcardHeaderSub
        title="Our Slogan" 
        subtitle="Beyond Oceans summarizes our business philosophy of shaping the future of blue growth in Africa to the benefit of the lives of its citizenry.  We also engage on interrelated fields of Climate change, Early warning systems and Disaster Risk reduction that are critically linked to security, conflicts, infrastructure, and environment in Africa."
              />
    </div>
    <Footers/>
    </>
    
  );
};

export default About;
