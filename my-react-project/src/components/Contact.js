// src/components/Contact.js
import React from 'react';
//import { Link } from 'react-router-dom';
import CustomcardHeader from "../assets/CustomcardHeader";
import CustomcardHeaderSubListUl from "../assets/CustomcardHeadersSubHlistul";
import Footers from '../assets/Footers';
const Contact = () => {
  return (
    <>
    <div>
      <CustomcardHeader title="Contact Us" subtitle="Get To Know Us Better"/>
      <CustomcardHeaderSubListUl 
      title="Partnership opportunities" 
          subtitle="For inquiries, partnership opportunities, or to learn more about our projects, please contact us at:" 
          content={[
                    {
                      heading: "Email: ",
                      text: "info@ensafo.com."
                    },
                    {
                      heading: "Phone: ",
                      text: "+254 706 507 801"
                    },
                    {
                      heading: "Address: ",
                      text: "Ufundi Cooperative Plaza, Nairobi."
                    },
                    {
                      heading: "Website: ",
                      text: "www.ensafo.com"
                    }
        ]}/>

        <CustomcardHeaderSubListUl title="Social media" 
          subtitle="Stay connected with us on social media for updates, news, and inspiring stories:" 
          content={[
                    {
                      heading: "Facebook: ",
                      text: "---------------"
                    },
                    {
                      heading: "Twitter: ",
                      text: "https://twitter.com/_EnSaFo"
                    },
                    {
                      heading: "Instagram: ",
                      text: "Ufundi Cooperative Plaza, Nairobi."
                    },
                    {
                      heading: "LinkedIn: ",
                      text: "https://www.linkedin.com/in/ensafo/"
                    }
        ]}/>
      </div>
    <Footers/>
    </>
  );
};

export default Contact;
