// src/components/OurTeam.js
import React from 'react';
//import { Link } from 'react-router-dom';
import CustomcardHeader from "../assets/CustomcardHeader";
import CustomcardHeaderSub from "../assets/CustomcardHeadersSubH";
import Footers from '../assets/Footers';
const OurTeam = () => {
  return (
    <>
    <div>
    <CustomcardHeader title="Our Team" subtitle="Get To Know The Brains" />
        
        <CustomcardHeaderSub 
                title="Our Team" 
                subtitle="Our team of highly qualified professionals have extensive experience in their respective fields and work closely with clients to understand their specific needs and develop tailor-made solutions that drive positive change."
                 />
    </div>
    <Footers/>
    </>
  );
};

export default OurTeam;
