

import {  FaFacebook, FaPhone,  FaWhatsapp } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const TopHeader = () => {
    const gradientStyle = {
        background: 'linear-gradient(270deg, rgba(122, 225, 237, 0.20) 37.09%, rgba(122, 225, 237, 0.00) 77.73%)',
        // Add other styles as needed
      };
    return (
       <div style={gradientStyle} className='p-4'>
         <div  className=' font-semibold flex gap-5 mr-56 font-popins justify-end items-center '>
           
           <FaFacebook></FaFacebook>
           <FaWhatsapp></FaWhatsapp>
           <div className='flex gap-2 justify-center items-center'>
           <IoTimeOutline />

            <h1>24/7 Hours</h1>
           </div>

           <div className='flex gap-2 justify-center items-center'>
            <FaPhone></FaPhone>
            <h1>01788829796</h1>
           </div>

           <div className='flex gap-2 justify-center items-center'>
           <CiMail></CiMail>
           <h1>riponakiondo4521@gmail.com</h1>
           </div>
         
        
        </div>
       </div>
    );
};

export default TopHeader;