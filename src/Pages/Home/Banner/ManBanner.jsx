import { FaRegUserCircle, FaStar } from 'react-icons/fa';
import hero from './Hero.png'
import Sky from './Sky2.png'

const ManBanner = () => {
    return (
        <div>
            <img className=' hidden md:block  md:mr-80 absolute' src={Sky} alt="" />
            <img className='md:relative w-[300px] md:w-[634px] h-[350px] md:h-[700px] z-10 ml-16 md:ml-0 md:mt-44' src={hero} alt="" />

            <div className=' hidden lg:block absolute top-[25rem] right-24 w-[280px] rounded-md bg-gradient-to-br px-5 py-2 from-white via-blue-100 to-blue-200'>
            <div className='flex justify-between items-center  '>
               <p><FaRegUserCircle /></p>
               <p className='text-sm font-popins font-semibold'>Rk Ripon Khan</p>
                <div className='flex items-center text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>

            </div>
            <p className='font-popins text-xs mt-2'>It looks now brand new. I am happy to find them in Toronto. Thanks guys</p>
            </div>
        </div>
    );
};

export default ManBanner;