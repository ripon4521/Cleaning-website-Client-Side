

import {  FaFacebook, FaPhone,  FaWhatsapp } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const TopHeader = () => {
    const gradientStyle = {
        background: 'linear-gradient(270deg, rgba(122, 225, 237, 0.20) 37.09%, rgba(122, 225, 237, 0.00) 77.73%)',
        // Add other styles as needed
      };
    return (
       <div style={gradientStyle} className='p-4 mt-10 md:mt-0'>
         <div  className=' font-semibold gap-3  flex md:gap-5 lg:mr-56 font-popins justify-end items-center '>
       
           <FaFacebook className='text-xl hidden lg:block '></FaFacebook>
           <FaWhatsapp className='text-xl hidden lg:block '></FaWhatsapp>
           <div className='flex gap-2 justify-center items-center'>
           <IoTimeOutline className='text-xs md:text-2xl' />

            <h1>24/7 Hours</h1>
           </div>

           <div className='flex gap-0 md:gap-2 justify-center items-center'>
            <FaPhone className=' text-xs md:text-xl'></FaPhone>
            <h1>88829796</h1>
           </div>

           <div className='flex gap-0 md:gap-2 justify-center items-center'>
           <CiMail className='text-xs md:text-2xl'></CiMail>
           <h1>xyz@gmail.com</h1>
           </div>
         
        
        </div>
       </div>
    );
};

export default TopHeader;