// src/components/OurService.js
import React from 'react';
//import { Link } from 'react-router-dom';
import CustomcardHeader from "../assets/CustomcardHeader";
import CustomcardHeaderSubListOl from "../assets/CustomcardHeadersSubHlistol";
import Footers from '../assets/Footers';
const OurService = () => {
  return (
    <>
    <div>
    <CustomcardHeader title="Our Services" subtitle="Get To Know what we offer" />
        
        <CustomcardHeaderSubListOl
        title="Our Services" 
        subtitle="We provide the following services" 
        content={[
                  {
                    heading: "Consulting Services",
                    text: "By collaborating with local communities, governments, and businesses, we strive to enhance marine resilience, foster responsible practices, and contribute to the long-term well-being of both people and the ocean ecosystems in Africa. Through our innovative consulting solutions, we aim to be a driving force behind the responsible management of marine resources, contributing to environmental conservation, economic prosperity, and social well-being across Africa's diverse coastal regions at National, regional, and continental levels."
                  },
                  {
                    heading: "Sales and Service of MetOcean equipment",
                    text: "We act as agents for different vendors for sale, supply, installation, and maintenance of a wide range of Meteorological and Oceanographic equipment."
                  },
                  {
                    heading: "Entrepreneurship support",
                    text: "We support the empowerment of African youth and women with skills that that will catalyse the BlueTech profitability.  We walk with them in entrepreneurship development and support them to conceptualize innovative startup solutions that address complex marine issues, promote environmental stewardship, sustainable resource management, and socio-economic growth."
                  }
              ]}
        />
   
        <CustomcardHeaderSubListOl 
         title="Why Choose iKg Solutions" 
              subtitle="Reasons Why to Choose iKg Solutions" 
              content={[
                        {
                          heading: "Innovation",
                          text: "We are at the forefront of Blue Economy technology, always supporting the development of new solutions to drive sustainability and profitability."
                        },
                        {
                          heading: "Sustainability",
                          text: "Our commitment to protecting the ocean and its resources is embedded in everything we do."
                        },
                        {
                          heading: "Customization",
                          text: "We tailor our solutions to meet your specific needs, ensuring they seamlessly integrate into your operations."
                        },
                        {
                          heading: "Expertise",
                          text: "Our team of experts is passionate about the Blue Economy and dedicated to helping you succeed."
                        }
            ]}
            />

    </div>
    <Footers/>
    </>
  );
};

export default OurService;
