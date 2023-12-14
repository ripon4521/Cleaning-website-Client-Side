
import { useState } from 'react';
import banner from './Bannner2.png';
import Line from './Line.png';
import './style.css'
import Quate from './Quate';
import { IoCallOutline } from "react-icons/io5";


const Banner = () => {



  return (
    <div className='max-w-full'>
      <header className='' >
     
      <div className="flex md:hidden mt-20 pl-4  flex-col md:flex-row h-[35rem] items-center md:justify-between container mx-auto md:px-20 ">
          <div className="text-left ">
            <h1 className="text-3xl font-jost text-[#0A85EA]  lg:text-4xl">
            Transform Your Bathroom with
            </h1 >
            <h1 className='text-4xl md:text-6xl bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 text-transparent bg-clip-text font-jost font-semibold mt-2'>Best Bathtub Reglazing <br />
service in Toronto</h1>
<img className='md:ml-56' src={Line} alt="" />
<p className='font-popins mt-3 text-xl  text-black text-transparent bg-clip-text font-poppins  font-medium leading-8'>Bathtub Reglazing: Experience Luxury at a  Fraction of Replacement Cost</p>
<div className='flex gap-5 mt-5'>
<button className="flex items-center gap-2 px-4 py-2 rounded-full text-xl font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-glow font-popins text-white"> <IoCallOutline /> Call Now</button>

</div>
           
          </div>

          <div className=''>
<Quate></Quate>
          </div>

        </div>

      <div className="md:w-full  -mt-60 md:-mt-0  bg-center bg-cover h-[20rem] md:h-[45rem]" style={{ backgroundImage: ` url(${banner})`   }}>
        <div className="md:flex hidden  flex-col md:flex-col lg:flex-row h-[35rem] items-center md:justify-between container mx-auto md:px-20 ">
          <div className="text-left ">
            <h1 className="text-2xl mt-10 font-jost text-[#0A85EA]  lg:text-4xl">
            Transform Your Bathroom with
            </h1 >
            <h1 className='text-4xl md:text-6xl bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 text-transparent bg-clip-text font-jost font-semibold mt-2'>Best Bathtub Reglazing 
service in Toronto</h1>
<img className='lg:ml-56' src={Line} alt="" />
<p className='font-popins mt-3 text-xs md:text-xl  text-black text-transparent bg-clip-text font-poppins  font-medium leading-8'>Bathtub Reglazing: Experience Luxury at a <br /> Fraction of Replacement Cost</p>
<div className='flex gap-5 mt-5'>
<button className="flex items-center gap-2 px-4 py-2 rounded-full text-xl font-semibold  bg-gradient-to-r from-cyan-500 to-blue-500 shadow-glow font-popins text-white"> <IoCallOutline /> Call Now</button>
<button className='text-[#1C7ACE] font-popins text-xl rounded-full font-semibold border-4 border-blue-600 px-3 py-2'>Get a Quate</button>
</div>
           
          </div>

          <div className='md:hidden lg:block'>
<Quate></Quate>
          </div>

        </div>
      </div>
    </header>
    </div>
  );
};

export default Banner;
